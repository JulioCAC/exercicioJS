const numeros = Array.from({ length: 100 }, (_, index) => index + 1);

numeros.map(numero => {
    if(numero % 3 === 0 && numero % 5 === 0){
        console.log(`${numero} FizzBuzz`);
    } else if(numero % 3 === 0){
        console.log(`${numero} Fizz`);
    } else if(numero % 5 === 0){
        console.log(`${numero} Buzz`);
    } else {
        console.log(numero);
    }
});