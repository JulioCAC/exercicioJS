function multiplosDeTres(numeros) {
    return numeros.filter(numero => numero % 3 === 0);
}
const numeros = [1, 2, 3, 4, 5];
const numerosAoQuadrado = multiplosDeTres(numeros);

console.log(numerosAoQuadrado); 
