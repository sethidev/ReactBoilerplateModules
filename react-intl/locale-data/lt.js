!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(e.ReactIntlLocaleData=e.ReactIntlLocaleData||{},e.ReactIntlLocaleData.lt=i())}(this,function(){"use strict";return[{locale:"lt",pluralRuleFunction:function(e,i){var n=String(e).split("."),a=n[1]||"",t=Number(n[0])==e,o=t&&n[0].slice(-1),r=t&&n[0].slice(-2);return i?"other":1==o&&(r<11||r>19)?"one":o>=2&&o<=9&&(r<11||r>19)?"few":0!=a?"many":"other"},fields:{year:{displayName:"metai",relative:{0:"šiais metais",1:"kitais metais","-1":"praėjusiais metais"},relativeTime:{future:{one:"po {0} metų",few:"po {0} metų",many:"po {0} metų",other:"po {0} metų"},past:{one:"prieš {0} metus",few:"prieš {0} metus",many:"prieš {0} metų",other:"prieš {0} metų"}}},month:{displayName:"mėnuo",relative:{0:"šį mėnesį",1:"kitą mėnesį","-1":"praėjusį mėnesį"},relativeTime:{future:{one:"po {0} mėnesio",few:"po {0} mėnesių",many:"po {0} mėnesio",other:"po {0} mėnesių"},past:{one:"prieš {0} mėnesį",few:"prieš {0} mėnesius",many:"prieš {0} mėnesio",other:"prieš {0} mėnesių"}}},day:{displayName:"diena",relative:{0:"šiandien",1:"rytoj",2:"poryt","-2":"užvakar","-1":"vakar"},relativeTime:{future:{one:"po {0} dienos",few:"po {0} dienų",many:"po {0} dienos",other:"po {0} dienų"},past:{one:"prieš {0} dieną",few:"prieš {0} dienas",many:"prieš {0} dienos",other:"prieš {0} dienų"}}},hour:{displayName:"valanda",relative:{0:"šią valandą"},relativeTime:{future:{one:"po {0} valandos",few:"po {0} valandų",many:"po {0} valandos",other:"po {0} valandų"},past:{one:"prieš {0} valandą",few:"prieš {0} valandas",many:"prieš {0} valandos",other:"prieš {0} valandų"}}},minute:{displayName:"minutė",relative:{0:"šią minutę"},relativeTime:{future:{one:"po {0} minutės",few:"po {0} minučių",many:"po {0} minutės",other:"po {0} minučių"},past:{one:"prieš {0} minutę",few:"prieš {0} minutes",many:"prieš {0} minutės",other:"prieš {0} minučių"}}},second:{displayName:"sekundė",relative:{0:"dabar"},relativeTime:{future:{one:"po {0} sekundės",few:"po {0} sekundžių",many:"po {0} sekundės",other:"po {0} sekundžių"},past:{one:"prieš {0} sekundę",few:"prieš {0} sekundes",many:"prieš {0} sekundės",other:"prieš {0} sekundžių"}}}}}]});
