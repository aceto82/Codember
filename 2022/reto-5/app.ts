import * as fs from "fs";

const fileName: string = "./reto-5/mecenas.txt";
let fileContent = fs.readFileSync(fileName, "utf8");
const list = fileContent.split(",")
const cant = list.length
let index = 0
let sob = cant

while (sob > 1) {
    for (let i = 0; i < cant - 1; i++) {
        if (list[i] != '*xXx*') {
            let found = false
            for (let j = i + 1; j < cant; j++) {
                if (list[j] != '*xXx*') {
                    list[j] = '*xXx*'
                    sob--
                    found = true
                    break
                }
            }
            if (!found) {
                for (let j = 0; j < i; j++) {
                    if (list[j] != '*xXx*') {
                        list[j] = '*xXx*'
                        sob--
                        break
                    }
                }
            }
        }

    }
}

for (let i = 0; i < cant; i++) {
    if (list[i] != '*xXx*') {
        index = i
        break
    }
}

console.log(list[index].trim().replace("'","").replace("'",""), '-', index)
