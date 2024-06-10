const tabuada = () => {
    var numero = parseInt(document.getElementById("num1").value);

    if (isNaN(numero) || numero <= 0) {
        document.getElementById("resultado").innerText = "Por favor, insira um número válido.";
        return;
    }

    var tabuadaString = "";
    for (var i = 1; i <= 10; i++) {
        tabuadaString += `${numero} x ${i} = ${numero * 1} <br>`;
    }

    document.getElementById("resultado").innerHTML= tabuadaString;
}