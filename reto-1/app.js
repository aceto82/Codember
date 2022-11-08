"use strict";
exports.__esModule = true;
var fs = require("fs");
var fileName = "./reto-1/users.txt";
var fileContent = fs.readFileSync(fileName, "utf8");
var campos = ["usr", "eme", "psw", "age", "loc", "fll"];
var strline = "";
var user = "";
var cantidad = 0;
fileContent.split("\n").forEach(function (line) {
    if (line == "") {
        var cont_1 = 0;
        var tmpusr_1 = "";
        strline.split(" ").forEach(function (val) {
            var par = val.split(":");
            var k = par.at(0);
            if (k != "") {
                campos.forEach(function (campo) {
                    if (campo == k) {
                        cont_1++;
                        if (campo == "usr") {
                            tmpusr_1 = par.at(1);
                        }
                    }
                });
            }
        });
        if (cont_1 >= campos.length) {
            //console.log("SI: " + cont);
            cantidad++;
            user = tmpusr_1;
        }
        strline = "";
    }
    else {
        strline += " " + line;
    }
});
console.log(cantidad + user);
