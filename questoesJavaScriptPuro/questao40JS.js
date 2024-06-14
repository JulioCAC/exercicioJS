function numerosMaioresQueDez(array) {
    return array.filter(numero => numero > 10);
}

const numeros = [5, 10, 15, 20, 25];
const numerosMaiores = numerosMaioresQueDez(numeros);
console.log(numerosMaiores);
