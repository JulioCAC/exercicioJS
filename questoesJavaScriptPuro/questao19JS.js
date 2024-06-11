var numeros = [27, 32, 43, 77, 91];

function maiorNumero(numero){
    return Math.min(...numero);
}

console.log(maiorNumero(numeros));