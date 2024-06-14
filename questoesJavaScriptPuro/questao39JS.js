
function formatarNumeros(array) {
    return array.map(numero => numero.toFixed(2));
}

const numeros = [5, 10.5, 15.75, 20.123];
const numerosFormatados = formatarNumeros(numeros);
console.log(numerosFormatados);
