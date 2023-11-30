"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var fileName = "./2023/reto-4/files_quarantine.txt";
var fileContent = fs.readFileSync(fileName, "utf8");
var cant = 0;
var imprimir = '';
var FINAL_COUNT = 33;
fileContent.trim().split('\n').forEach(function (v) {
    var data = v.split('-');
    var checkStr = data[0].trim();
    var checksum = data[1].trim();
    var checksumCalc = checkStr.split('').reduce(function (res, val) {
        var num = 0;
        checkStr.split('').forEach(function (el) { return el == val ? num++ : num; });
        if (num == 1) {
            res += val;
        }
        return res;
    }, '');
    console.log("".concat(checkStr, "-").concat(checksum, " ==> ").concat(checksumCalc));
    if (checksumCalc === checksum) {
        cant++;
        if (cant === FINAL_COUNT) {
            imprimir = checksum;
        }
    }
});
console.log("submit ".concat(imprimir));
