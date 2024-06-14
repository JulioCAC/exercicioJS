function elevarAoQuadrado(numeros) {
    return numeros.map(numero => numero ** 2);
}
const numeros = [1, 2, 3, 4, 5];
const numerosAoQuadrado = elevarAoQuadrado(numeros);

console.log(numerosAoQuadrado); 
