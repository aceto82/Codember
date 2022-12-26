
let fin = 98123;
let index = 0;
let pass55 = 0;
for (let ini = 11099; ini < fin; ini++) {
  let val = ini.toString();
  let okpass = true;
  let num5 = 0;
  let ant = '0';
  for (const chr of val) {
    if (chr == '5') {
      num5++;
    }
    if (parseInt(ant) > parseInt(chr)) {
      okpass = false;
      break;
    }
    ant = chr;
  }
  
  if (num5 >= 2 && okpass) {
    if (index == 55) {
      pass55 = ini;
    }
    index++;
  }

}
console.log(index.toString() + "-" + pass55.toString());
