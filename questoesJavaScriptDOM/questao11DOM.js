function calcularFibonacci() {
    const numeroN = parseInt(document.getElementById('num').value);
    let fibonacci = [0, 1];
    let i = 2;

    while (fibonacci[i - 1] <= numeroN) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
        i++;
    }

    const resultado = `Sequência de Fibonacci até ${numeroN}: ${fibonacci.slice(0, i - 1).join(', ')}`;

    document.getElementById('resultado').innerText = resultado;
}