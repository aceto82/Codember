"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function reto3() {
    var fileName = "./2024/reto-3/trace.txt";
    var fileContent = fs.readFileSync(fileName, "utf8");
    var suma = 0;
    var ultimo = 0;
    fileContent.trim().split('\n').forEach(function (v) {
        ultimo = rastro(v);
        suma += ultimo;
    });
    console.log("submit ".concat(suma, "-").concat(ultimo));
}
function rastro(instrucciones) {
    var instr = instrucciones.split(" ").map(function (v) { return Number(v); });
    var resultado = 1;
    var bandera = true;
    var pos = 0;
    while (bandera) {
        instr[pos]++;
        pos += instr[pos] - 1;
        if (pos >= instr.length || pos < 0) {
            bandera = false;
            break;
        }
        resultado++;
    }
    return resultado;
}
console.log(rastro("1 2 4 1 -2"));
console.log(rastro("0 1 2 3 -1"));
console.log(rastro("1 -2 5"));
reto3();
