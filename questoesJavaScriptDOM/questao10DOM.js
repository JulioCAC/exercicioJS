function converter() {
    var decimal = document.getElementById("decimal").value;
    if (decimal === "") {
        alert("Por favor, digite um valor decimal.");
        return;
    }
    if (isNaN(decimal)) {
        alert("Por favor, digite um número válido.");
        return;
    }
    var binario = parseInt(decimal).toString(2);

    document.getElementById("resultado").innerHTML = `Binário: ${binario};`
}