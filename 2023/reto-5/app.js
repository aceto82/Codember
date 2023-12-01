"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var regexAlfanum = /[A-Za-z0-9]+/g;
var regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g;
var regexNum = /\d+/g;
var regexAlfa = /[A-Za-z ]+/g;
var verificar = function (entrada, match) {
    if (match === null || match.length === 0)
        return false;
    return match[0] == entrada;
};
var fileName = "./2023/reto-5/database_attacked.txt";
var fileContent = fs.readFileSync(fileName, "utf8");
var imprimir = '';
fileContent.trim().split('\n').forEach(function (v) {
    var isValid = true;
    var data = v.split(',');
    var id = data[0].trim();
    var username = data[1].trim();
    var email = data[2].trim();
    var resId = id.match(regexAlfanum);
    var resUsername = username.match(regexAlfanum);
    var resemail = email.match(regexEmail);
    if (!verificar(id, resId) || !verificar(username, resUsername) || !verificar(email, resemail)) {
        isValid = false;
        console.log("Verificar los 3: ".concat(isValid));
    }
    else {
        if (data.length <= 4) {
            var age = data[3].trim();
            var resAge = age.match(regexNum);
            if (!verificar(age, resAge)) {
                isValid = false;
                console.log("Verificar 4: ".concat(isValid));
            }
        }
        if (data.length <= 5) {
            var location_1 = data[4].trim();
            var resLocation = location_1.match(regexAlfa);
            if (!verificar(location_1, resLocation)) {
                isValid = false;
                console.log("Verificar 5: ".concat(isValid));
            }
        }
    }
    if (!isValid) {
        imprimir += username[0];
    }
    console.log(data);
    console.log(isValid);
    // console.log(`${checkStr}-${checksum} ==> ${checksumCalc}`)
});
console.log("submit ".concat(imprimir));
