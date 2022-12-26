import * as fs from "fs";

const fileName: string = "./reto-3/colors.txt";
let fileContent = fs.readFileSync(fileName, "utf8");
let color: string = "";
let color1: string = "";
let color2: string = "";
let cant: number = 0;
let maycolor: string = "";
let maycant: number = 0;
fileContent
  .replace("[", "")
  .replace("]", "")
  .replace("\n", "")
  .split(",")
  .forEach((col) => {
    col = col.replace("'", "").replace("'", "").trim();

    if (color1 == "") {
      color1 = col;
      color = col;
    } else if (color2 == "" && color1 != col) {
      color2 = col;
      color = col;
      cant++;
    } else {
      cant++;
      if (col == color1 && cant % 2 == 1) {
        color = col;
      } else if (col == color2 && cant % 2 == 0) {
        color = col;
      } else {
        if (cant >= maycant) {
          maycolor = color;
          maycant = cant;
        }
        color1 = col;
        color = col;
        cant = 1;
        color2 = "";
      }
    }
  });

console.log(maycant.toString() + "@" + maycolor.toString());
