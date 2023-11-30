import * as fs from "fs";

const fileName: string = "./2023/reto-4/files_quarantine.txt";
let fileContent = fs.readFileSync(fileName, "utf8");

let cant: number = 0;
let imprimir: string = '';
const FINAL_COUNT: number = 33;
fileContent.trim().split('\n').forEach((v: string) => {
    const data = v.split('-');
    const checkStr = data[0].trim();
    const checksum = data[1].trim();

    const checksumCalc = checkStr.split('').reduce((res, val) => {
        let num = 0;
        checkStr.split('').forEach(el=> el==val?num++:num);
        if (num==1){
            res+=val;
        }
        return res;
    }, '');
    console.log(`${checkStr}-${checksum} ==> ${checksumCalc}`)
    if (checksumCalc === checksum) {
        cant++;

        if (cant === FINAL_COUNT) {
            imprimir = checksum;
        }
    }

});
console.log(`submit ${imprimir}`);
