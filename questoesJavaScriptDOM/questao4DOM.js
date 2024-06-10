function somarNumero(){
    var numero = parseInt(document.getElementById("num1").value);

    if (isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número inteiro positivo.";
        return;
    }

    var soma = 0
    for (let i = 1; i <= numero; i++){
        soma += i;
    }
    document.getElementById("resultado").innerText = `A soma dos números de 1 até ${numero} é ${soma}`
}