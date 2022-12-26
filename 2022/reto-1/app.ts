import * as fs from "fs";

const fileName: string = "./reto-1/users.txt";
let fileContent = fs.readFileSync(fileName, "utf8");

const campos = ["usr", "eme", "psw", "age", "loc", "fll"];

let strline: string = "";
let user;
let cantidad: number = 0;
let usuarios: Array<string> = [];

usuarios = fileContent.split("\n\n").filter(value => campos.every(camp => value.includes(camp)));
cantidad = usuarios.length;
strline = usuarios[cantidad - 1];

user = strline.split(/\n|\s/).map((chunk: string) => chunk.split(":"));
const map = new Map(user);

console.log(cantidad.toString() + map.get('usr'));