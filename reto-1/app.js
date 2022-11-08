"use strict";
exports.__esModule = true;
var fs = require("fs");
var fileName = './reto-1/users.txt';
var fileContent = fs.readFileSync(fileName, 'utf8');
var campos = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];
var strline = '';
var cantidad = 0;
var usuarios = [];
fileContent.split('\n').forEach(function (line) {
    if (line == '') {
        //console.log(strline);
        usuarios.push(strline);
        //let cont = 0;
        // strline.split(' ').forEach((val) => {
        //     let par = val.split(':');
        //     let k = par.at(0);            
        //     if (k != '' ) {
        //         campos.forEach((campo) => {
        //             if (campo == k) {
        //                 cont++;
        //             }
        //         })
        //     }        
        // });     
        // if (cont >= campos.length) {
        //     console.log("SI: " + cont);
        //     cantidad++;
        // }
        strline = '';
    }
    else {
        strline += ' ' + line;
    }
});
usuarios.forEach(function (value) {
    console.log(value.split(' ').entries().next().value);
    // let cont = 0;
    // campos.forEach((campo) => {
    //     if (value.includes(campo+':')) {
    //         cont++;
    //     }
    // });
    // if (cont >= 6) {
    //     cantidad++;
    // }
});
console.log(cantidad);
