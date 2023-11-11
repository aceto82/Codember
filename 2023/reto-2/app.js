"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var fileName = "./2023/reto-2/message_02.txt";
var fileContent = fs.readFileSync(fileName, "utf8");
var valor = 0;
var imprimir = '';
fileContent.trim().split('').forEach(function (v) {
    //datos[v.toLowerCase()] = datos[v.toLowerCase()]===undefined ? 1: datos[v.toLowerCase()] + 1;    
    if (v === '#') {
        valor++;
    }
    else if (v === '@') {
        valor--;
    }
    else if (v === '*') {
        valor *= valor;
    }
    else if (v === '&') {
        imprimir += valor;
    }
});
console.log("submit ".concat(imprimir));
