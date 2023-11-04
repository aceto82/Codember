import * as fs from "fs";

const fileName: string = "./2023/reto-1/message_01.txt";
let fileContent = fs.readFileSync(fileName, "utf8");

let datos:any = {};
fileContent.trim().split(/\s/).forEach((v:string)=>{
    datos[v.toLowerCase()] = datos[v.toLowerCase()]===undefined ? 1: datos[v.toLowerCase()] + 1;    
});
let resp:string = "";
for (const p in datos){
    resp+=p+datos[p];
}
console.log(resp);
