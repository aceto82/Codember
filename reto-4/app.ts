
let fin = 98123;
let index = 0;
let pass55 = 0;
for (let ini = 11099; ini < fin; ini++) {
  let val = ini.toString();
  let okpass = true;
  let num5 = 0;
  let ant = val.charAt(0);
  if (ant == '5') {
    num5++;
  }
  for (let k = 1; k < 5; k++) {
    const element = val.charAt(k);
    if (element == '5') {
      num5++;
    }
    if (parseInt(ant) > parseInt(element)) {
      okpass = false;
      break;
    }
    ant = element;
  }
  if (num5 >= 2 && okpass) {
    if (index == 55) {
      pass55 = ini;
    }
    index++;
  }

}
console.log(index.toString() + "-" + pass55.toString());
