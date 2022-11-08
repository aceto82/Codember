import { getRandomValues } from 'crypto';
import * as fs from 'fs';

const fileName: string = './reto-1/users.txt';
let fileContent = fs.readFileSync(fileName, 'utf8');

const campos = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

let strline: string = '';
let cantidad: number = 0;
let usuarios: Array<string> = [];

fileContent.split('\n').forEach((line) => {
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
    } else {
        strline += ' ' + line;
    }
})

usuarios.forEach((value) => {
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
})

console.log(cantidad);