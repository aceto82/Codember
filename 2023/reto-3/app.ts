import * as fs from "fs";

const fileName: string = "./2023/reto-3/encryption_policies.txt";
let fileContent = fs.readFileSync(fileName, "utf8");

let cant: number = 0;
let imprimir: string = '';
const FINAL_COUNT: number = 42;
fileContent.trim().split('\n').forEach((v: string) => {
    const data = v.split(':');
    const regla = data[0].trim();
    const pass = data[1].trim();
    const passArr = pass.split('');

    const reglaData = regla.split(' ');
    const rangoRegla = reglaData[0].split('-');

    const minRango: number = parseInt(rangoRegla[0]);
    const maxRango: number = parseInt(rangoRegla[1]);

    const cantLetra = passArr.reduce((p, v) => {
        if (v === reglaData[1]) {
            p++;
        }
        return p;
    }, 0);

    if (cantLetra < minRango || cantLetra > maxRango) {
        cant++;

        if (cant === FINAL_COUNT) {
            imprimir = pass;
        }
    }

});
console.log(`submit ${imprimir}`);
