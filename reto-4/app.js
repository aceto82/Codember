var fin = 98123;
var index = 0;
var pass55 = 0;
for (var ini = 11099; ini < fin; ini++) {
    var val = ini.toString();
    var okpass = true;
    var num5 = 0;
    var ant = '0';
    for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
        var chr = val_1[_i];
        if (chr == '5') {
            num5++;
        }
        if (parseInt(ant) > parseInt(chr)) {
            okpass = false;
            break;
        }
        ant = chr;
    }
    if (num5 >= 2 && okpass) {
        if (index == 55) {
            pass55 = ini;
        }
        index++;
    }
}
console.log(index.toString() + "-" + pass55.toString());
