function multiplosDeCinco(array) {
    return array.filter(numero => numero % 5 === 0);
}

const numeros = [4, 5, 6, 7, 8, 9, 10];
const numerosMultiplosDeCinco = multiplosDeCinco(numeros);
console.log(numerosMultiplosDeCinco);
