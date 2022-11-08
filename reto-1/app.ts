import * as fs from "fs";

const fileName: string = "./reto-1/users.txt";
let fileContent = fs.readFileSync(fileName, "utf8");

const campos = ["usr", "eme", "psw", "age", "loc", "fll"];

let strline: string = "";
let user: string | undefined = "";
let cantidad: number = 0;

fileContent.split("\n").forEach((line) => {
  if (line == "") {
    let cont = 0;
    let tmpusr: string | undefined = "";
    strline.split(" ").forEach((val) => {
      let par = val.split(":");
      let k = par.at(0);
      if (k != "") {
        campos.forEach((campo) => {
          if (campo == k) {
            cont++;
            if (campo == "usr") {
              tmpusr = par.at(1);
            }
          }
        });
      }
    });

    if (cont >= campos.length) {
      //console.log("SI: " + cont);
      cantidad++;
      user = tmpusr;
    }
    strline = "";
  } else {
    strline += " " + line;
  }
});

console.log(cantidad+user);