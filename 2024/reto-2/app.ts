import * as fs from "fs";

function reto2() {
    const fileName: string = "./2024/reto-2/log.txt";
    let fileContent = fs.readFileSync(fileName, "utf8");

    let cantVal: number = 0;
    let cantIntVal: number = 0;

    fileContent.trim().split('\n').forEach((v: string) => {
        if (detectandoAccesoNoDeseado(v)) {
            cantVal++;
        } else {
            cantIntVal++;
        }
    });
    console.log(`submit ${cantVal}true${cantIntVal}false`);
}

function detectandoAccesoNoDeseado(pass: string): boolean {
    let passArr: string[] = pass.split("");
    let resultado: boolean = true;
    let primeraLetra = false;
    let valAscii, valAsciiAnt = null;
    for (let k = 0; k < passArr.length; k++) {
        let letra = passArr.at(k);
        valAscii = letra?.charCodeAt(0);
        if (Number.isNaN(valAscii) || valAscii === undefined) {
            resultado = false;
            break;
        }

        if (!((valAscii >= 48 && valAscii <= 57) || (valAscii >= 97 && valAscii <= 122))) {
            resultado = false;
            break;
        }

        if (valAscii >= 97 && valAscii <= 122 && !primeraLetra) {
            primeraLetra = true;
        }

        if (valAscii >= 48 && valAscii <= 57 && primeraLetra) {
            resultado = false;
            break;
        }

        if (valAsciiAnt !== null && valAscii < valAsciiAnt) {
            resultado = false;
            break;
        }

        valAsciiAnt = valAscii;
    }
    return resultado;
}
// 1234     -> true
console.log(detectandoAccesoNoDeseado("1234"));

// abc -> true
console.log(detectandoAccesoNoDeseado("abc"));

// aabbcc -> true (repite pero siempre ascendente)
console.log(detectandoAccesoNoDeseado("aabbcc"));

// 112233 -> true (repite pero siempre ascendente)
console.log(detectandoAccesoNoDeseado("112233"));

// a123 -> false (un número después de una letra)
console.log(detectandoAccesoNoDeseado("a123"));

// 123abc -> true
console.log(detectandoAccesoNoDeseado("123abc"));

// dbce -> false (una "d" y después una "b")
console.log(detectandoAccesoNoDeseado("dbce"));

reto2();