"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var fileName = "./2023/reto-3/encryption_policies.txt";
var fileContent = fs.readFileSync(fileName, "utf8");
var cant = 0;
var imprimir = '';
var FINAL_COUNT = 42;
fileContent.trim().split('\n').forEach(function (v) {
    var data = v.split(':');
    var regla = data[0].trim();
    var pass = data[1].trim();
    var passArr = pass.split('');
    var reglaData = regla.split(' ');
    var rangoRegla = reglaData[0].split('-');
    var minRango = parseInt(rangoRegla[0]);
    var maxRango = parseInt(rangoRegla[1]);
    var cantLetra = passArr.reduce(function (p, v) {
        if (v === reglaData[1]) {
            p++;
        }
        return p;
    }, 0);
    if (cantLetra < minRango || cantLetra > maxRango) {
        cant++;
        if (cant === FINAL_COUNT) {
            imprimir = pass;
        }
    }
});
console.log("submit ".concat(imprimir));
