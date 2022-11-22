var fin = 98123;
var index = 0;
var pass55 = 0;
for (var ini = 11099; ini < fin; ini++) {
    var val = ini.toString();
    var okpass = true;
    var num5 = 0;
    var ant = val.charAt(0);
    if (ant == '5') {
        num5++;
    }
    for (var k = 1; k < 5; k++) {
        var element = val.charAt(k);
        if (element == '5') {
            num5++;
        }
        if (parseInt(ant) > parseInt(element)) {
            okpass = false;
            break;
        }
        ant = element;
    }
    if (num5 >= 2 && okpass) {
        if (index == 55) {
            pass55 = ini;
        }
        index++;
    }
}
console.log(index.toString() + "-" + pass55.toString());
