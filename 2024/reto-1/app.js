function reto1(comb, mov) {
    var resultado = comb.split("");
    var pos = 0;
    var dig;
    mov.split("").forEach(function (m) {
        switch (m) {
            case "R":
                pos++;
                pos = pos % comb.length;
                break;
            case "L":
                pos--;
                pos = pos + comb.length;
                pos = pos % comb.length;
                break;
            case "U":
                dig = Number(resultado.at(pos));
                dig++;
                dig = dig % 10;
                resultado[pos] = String(dig);
                break;
            case "D":
                dig = Number(resultado.at(pos));
                dig--;
                dig = dig + 10;
                dig = dig % 10;
                resultado[pos] = String(dig);
                break;
        }
    });
    return resultado.join("");
}
// 000 URURD -> 119
console.log(reto1("000", "URURD"));
// 1111 UUURUUU -> 4411
console.log(reto1("1111", "UUURUUU"));
// 9999 LULULULD -> 8000
console.log(reto1("9999", "LULULULD"));
// 528934712834 URDURUDRUDLLLLUUDDUDUDUDLLRRRR
console.log(reto1("528934712834", "URDURUDRUDLLLLUUDDUDUDUDLLRRRR"));
