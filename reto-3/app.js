"use strict";
exports.__esModule = true;
var fs = require("fs");
var fileName = "./reto-3/colors.txt";
var fileContent = fs.readFileSync(fileName, "utf8");
var color = "";
var color1 = "";
var color2 = "";
var cant = 0;
var maycolor = "";
var maycant = 0;
fileContent
    .replace("[", "")
    .replace("]", "")
    .replace("\n", "")
    .split(",")
    .forEach(function (col) {
    col = col.replace("'", "").replace("'", "").trim();
    if (color1 == "") {
        color1 = col;
        color = col;
    }
    else if (color2 == "" && color1 != col) {
        color2 = col;
        color = col;
        cant++;
    }
    else {
        cant++;
        if (col == color1 && cant % 2 == 1) {
            color = col;
        }
        else if (col == color2 && cant % 2 == 0) {
            color = col;
        }
        else {
            if (cant >= maycant) {
                maycolor = color;
                maycant = cant;
            }
            color1 = col;
            color = col;
            cant = 1;
            color2 = "";
        }
    }
});
console.log(maycant.toString() + "@" + maycolor.toString());
