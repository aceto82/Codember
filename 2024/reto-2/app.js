"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function reto2() {
    var fileName = "./2024/reto-2/log.txt";
    var fileContent = fs.readFileSync(fileName, "utf8");
    var cantVal = 0;
    var cantIntVal = 0;
    fileContent.trim().split('\n').forEach(function (v) {
        if (detectandoAccesoNoDeseado(v)) {
            cantVal++;
        }
        else {
            cantIntVal++;
        }
    });
    console.log("submit ".concat(cantVal, "true").concat(cantIntVal, "false"));
}
function detectandoAccesoNoDeseado(pass) {
    var passArr = pass.split("");
    var resultado = true;
    var primeraLetra = false;
    var valAscii, valAsciiAnt = null;
    for (var k = 0; k < passArr.length; k++) {
        var letra = passArr.at(k);
        valAscii = letra === null || letra === void 0 ? void 0 : letra.charCodeAt(0);
        if (Number.isNaN(valAscii) || valAscii === undefined) {
            resultado = false;
            break;
        }
        if (!((valAscii >= 48 && valAscii <= 57) || (valAscii >= 97 && valAscii <= 122))) {
            resultado = false;
            break;
        }
        if (valAscii >= 97 && valAscii <= 122 && !primeraLetra) {
            primeraLetra = true;
        }
        if (valAscii >= 48 && valAscii <= 57 && primeraLetra) {
            resultado = false;
            break;
        }
        if (valAsciiAnt !== null && valAscii < valAsciiAnt) {
            resultado = false;
            break;
        }
        valAsciiAnt = valAscii;
    }
    return resultado;
}
// 1234     -> true
console.log(detectandoAccesoNoDeseado("1234"));
// abc -> true
console.log(detectandoAccesoNoDeseado("abc"));
// aabbcc -> true (repite pero siempre ascendente)
console.log(detectandoAccesoNoDeseado("aabbcc"));
// 112233 -> true (repite pero siempre ascendente)
console.log(detectandoAccesoNoDeseado("112233"));
// a123 -> false (un número después de una letra)
console.log(detectandoAccesoNoDeseado("a123"));
// 123abc -> true
console.log(detectandoAccesoNoDeseado("123abc"));
// dbce -> false (una "d" y después una "b")
console.log(detectandoAccesoNoDeseado("dbce"));
reto2();
