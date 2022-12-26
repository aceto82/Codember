"use strict";
exports.__esModule = true;
var fs = require("fs");
var fileName = "./reto-5/mecenas.txt";
var fileContent = fs.readFileSync(fileName, "utf8");
var list = fileContent.split(",");
var cant = list.length;
var index = 0;
var sob = cant;
while (sob > 1) {
    for (var i = 0; i < cant - 1; i++) {
        if (list[i] != '*xXx*') {
            var found = false;
            for (var j = i + 1; j < cant; j++) {
                if (list[j] != '*xXx*') {
                    list[j] = '*xXx*';
                    sob--;
                    found = true;
                    break;
                }
            }
            if (!found) {
                for (var j = 0; j < i; j++) {
                    if (list[j] != '*xXx*') {
                        list[j] = '*xXx*';
                        sob--;
                        break;
                    }
                }
            }
        }
    }
}
for (var i = 0; i < cant; i++) {
    if (list[i] != '*xXx*') {
        index = i;
        break;
    }
}
console.log(list[index].trim().replace("'", "").replace("'", ""), '-', index);
