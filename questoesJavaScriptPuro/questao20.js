var numeros = [27, 32, 43, 77, 91];

function mediaDoNumerosDaArray(numero) {
   let soma = 0
   for (let i = 0; i < numero.length; i++){
    soma += numero[i]

   }
   return soma / numero.length
}
console.log(mediaDoNumerosDaArray(numeros))