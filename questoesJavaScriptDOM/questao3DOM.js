var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

function verificarNumero(){
    var tentativa = parseInt(document.getElementById("num1").value);

    if (isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
        alert("Por favor, insira um número entre 1 e 100.");
        return;
    }

    if (tentativa === numeroAleatorio){
        document.getElementById("resultado").innerText = `Parabéns! Você acertou! O número sorteado foi ${numeroAleatorio}`;
        document.getElementById("num1").disabled = true;
    } else if (tentativa < numeroAleatorio) {
        document.getElementById("resultado").innerText = "Tente um número maior.";
    } else {
        document.getElementById("resultado").innerText = "Tente um número menor.";
    }
}
function reiniciarJogo() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
    document.getElementById("num1").value = "";
    document.getElementById("resultado").innerText = ""; 
    document.getElementById("num1").disabled = false; 
}
document.getElementById("num1").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        verificarNumero(); 
    }
});