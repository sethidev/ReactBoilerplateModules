const path = require('path')
const parse = require('./parsers/index')

let inputId = 1
const interpolationLinesMap = {}
const sourceMapsCorrections = {}
const errorWasThrown = {}
const DEFAULT_OPTIONS = {
  moduleName: 'styled-components'
}

module.exports = options => ({
  // Get string for stylelint to lint
  code(input, filepath) {
    let absolutePath
    if (filepath) {
      absolutePath = path.resolve(process.cwd(), filepath)
    } else {
      absolutePath = `<input css ${inputId}>`
      inputId += 1
    }

    try {
      sourceMapsCorrections[absolutePath] = {}
      const { extractedCSS, interpolationLines, sourceMap } = parse(
        input,
        absolutePath,
        Object.assign({}, DEFAULT_OPTIONS, options)
      )
      // Save dummy interpolation lines
      interpolationLinesMap[absolutePath] = interpolationLines.concat(
        interpolationLinesMap[absolutePath] || []
      )
      // Save source location, merging existing corrections with current corrections
      sourceMapsCorrections[absolutePath] = Object.assign(
        sourceMapsCorrections[absolutePath],
        sourceMap
      )
      return extractedCSS
    } catch (e) {
      // incorrect interpolations will throw CssSyntaxError and they'll be handled by stylelint
      if (e.name === 'CssSyntaxError') {
        errorWasThrown[absolutePath] = true
        throw e
      }
      return ''
    }
  },
  // Fix sourcemaps
  result(stylelintResult, filepath) {
    if (errorWasThrown[filepath]) {
      // We threw an error ourselves, in this case we have already put correct
      // line/column numbers so no source maps are needed
      // (and would actually break the line numbers)
      delete errorWasThrown[filepath]
      return stylelintResult
    }
    const interpolationLines = interpolationLinesMap[filepath] || []
    const lineCorrection = sourceMapsCorrections[filepath]
    const warnings = stylelintResult.warnings
      .filter(
        warning =>
          // Filter indentation warnings generated by interpolations substitution
          !(
            warning.rule === 'indentation' &&
            interpolationLines.indexOf(lineCorrection[warning.line]) >= 0
          )
      )
      .map(warning =>
        Object.assign({}, warning, {
          // Replace "brace" with "backtick" in warnings, e.g.
          // "Unexpected empty line before closing backtick" (instead of "brace")
          text: warning.text.replace(/brace/, 'backtick'),
          line: lineCorrection[warning.line]
        })
      )

    const result = Object.assign({}, stylelintResult, { warnings })
    // Undo `errored` if no warnings with error severity any more
    if (result.errored && !warnings.some(warning => warning.severity === 'error')) {
      delete result.errored
    }
    return result
  }
})