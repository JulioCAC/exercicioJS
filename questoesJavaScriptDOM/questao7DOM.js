function calcularFatorial(){
    var numero = parseInt(document.getElementById("num1").value);

    var fatorial = 1;
    for (let i = 1; i <= numero; i++){
        fatorial *= i;
    }
    document.getElementById("resultado").innerText = `O fatorial do número ${numero} é ${fatorial}`
}