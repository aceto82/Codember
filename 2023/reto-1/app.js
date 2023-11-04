"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var fileName = "./2023/reto-1/message_01.txt";
var fileContent = fs.readFileSync(fileName, "utf8");
var datos = {};
fileContent.trim().split(/\s/).forEach(function (v) {
    datos[v.toLowerCase()] = datos[v.toLowerCase()] === undefined ? 1 : datos[v.toLowerCase()] + 1;
});
var resp = "";
for (var p in datos) {
    resp += p + datos[p];
}
console.log(resp);
