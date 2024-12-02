import * as fs from "fs";

function reto3() {
    const fileName: string = "./2024/reto-3/trace.txt";
    let fileContent = fs.readFileSync(fileName, "utf8");

    let suma: number = 0;
    let ultimo: number = 0;

    fileContent.trim().split('\n').forEach((v: string) => {
        ultimo = rastro(v);
        suma+=ultimo;
    });
    console.log(`submit ${suma}-${ultimo}`);
}
function rastro(instrucciones: string): number {
    let instr: number[] = instrucciones.split(" ").map(v => Number(v));
    let resultado: number = 1;
    let bandera: boolean = true;
    let pos: number = 0;
    while (bandera) {
        instr[pos]++;
        pos += instr[pos] - 1;
        if (pos >= instr.length || pos < 0) {
            bandera = false;
            break;
        }
        resultado++;
    }
    return resultado;
}

console.log(rastro("1 2 4 1 -2"));

console.log(rastro("0 1 2 3 -1"));

console.log(rastro("1 -2 5"));

reto3();