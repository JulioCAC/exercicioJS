function verificarPrimo(){
    var num1 = parseFloat(document.getElementById("num1").value)

    var ehPrimo = true;
    if (num1 <= 1) {
        ehPrimo = false;
    } else {
        for (var i = 2; i <= Math.sqrt(num1); i++) {
            if (num1 % i === 0) {
                ehPrimo = false;
                break;
            }
        }
    }

    if (ehPrimo) {
        document.getElementById("resultado").innerText = num1 + " é primo.";
    } else {
        document.getElementById("resultado").innerText = num1 + " não é primo.";
    }
}
document.getElementById("num1").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        verificarPrimo();
    }
});