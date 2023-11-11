import * as fs from "fs";

const fileName: string = "./2023/reto-2/message_02.txt";
let fileContent = fs.readFileSync(fileName, "utf8");

let valor: number = 0;
let imprimir: string = '';
fileContent.trim().split('').forEach((v:string)=>{
    //datos[v.toLowerCase()] = datos[v.toLowerCase()]===undefined ? 1: datos[v.toLowerCase()] + 1;    
    if (v === '#'){
        valor++;
    } else if (v==='@') {
        valor--;
    } else if (v==='*'){
        valor*=valor;
    } else if (v==='&'){
        imprimir+=valor;
    }
});
console.log(`submit ${imprimir}`);
