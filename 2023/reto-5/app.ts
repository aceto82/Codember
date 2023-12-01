import * as fs from "fs";
const regexAlfanum = /[A-Za-z0-9]+/g;
const regexEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g;
const regexNum = /\d+/g;
const regexAlfa = /[A-Za-z ]+/g;

const verificar = (entrada:string, match:RegExpMatchArray | null) => {
    if (match===null || match.length === 0) return false;
    return match[0]== entrada;
}

const fileName: string = "./2023/reto-5/database_attacked.txt";
let fileContent = fs.readFileSync(fileName, "utf8");

let imprimir: string = '';

fileContent.trim().split('\n').forEach((v: string) => {
    let isValid = true;

    const data = v.split(',');
    const id = data[0].trim();
    const username = data[1].trim();
    const email = data[2].trim();

    const resId = id.match(regexAlfanum);    
    const resUsername = username.match(regexAlfanum);
    const resemail = email.match(regexEmail);

    if (!verificar(id, resId) || !verificar(username, resUsername) || !verificar(email, resemail)){
        isValid = false;
        console.log(`Verificar los 3: ${isValid}`);
    } else {
        if (data.length <= 4) {
            const age = data[3].trim();
            const resAge = age.match(regexNum);
            if (!verificar(age, resAge)){
                isValid = false;
                console.log(`Verificar 4: ${isValid}`);
            }
        }
    
        if (data.length <= 5) {
            const location = data[4].trim();
            const resLocation = location.match(regexAlfa);
            if (!verificar(location, resLocation)){
                isValid = false;
                console.log(`Verificar 5: ${isValid}`);
            }
        }
    }

    if (!isValid){
        imprimir+=username[0];
    }
    console.log(data)
    console.log(isValid)
    // console.log(`${checkStr}-${checksum} ==> ${checksumCalc}`)


});
console.log(`submit ${imprimir}`);
