function reto5() {
    const lista = "13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,155,156,157,158,175,176,177,178,179,180,181,182,183,184,195,196".split(",");
    let cantidad = 0;
    let tercer = "";
    lista.forEach(el => {
        if (esPrimo(Number(el))) {
            let num = el.split("").reduce((s, v) => s + Number(v), 0);
            if (esPrimo(num)) {
                console.log(el);
                cantidad++;
                if (cantidad === 3) {
                    tercer = el;
                }
            }
        }
    });
    return `submit ${cantidad}-${tercer}`;
}
function esPrimo(numero) {
    if (numero <= 1) {
        return false; // Los números menores o iguales a 1 no son primos
    }
    if (numero === 2) {
        return true; // 2 es el único número primo par
    }
    if (numero % 2 === 0) {
        return false; // Los números pares mayores que 2 no son primos
    }
    // Verificamos divisores desde 3 hasta la raíz cuadrada del número
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) {
            return false; // Si es divisible por i, no es primo
        }
    }
    return true; // Si no se encontraron divisores, es primo
}
console.log(reto5());
