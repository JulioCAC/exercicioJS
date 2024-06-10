function calcularMedia() {

    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);

    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    document.getElementById("media").innerText = "Média: " + media.toFixed(2);

    if (media >= 7) {
        document.getElementById("resultado").innerText = "Aprovado!";
    } else {
        document.getElementById("resultado").innerText = "Reprovado.";
    }
}
