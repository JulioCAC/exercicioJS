function ordenarNumeros() {
    const numerosInput = document.getElementById('numeros').value.trim();
    const numerosArray = numerosInput.split(',').map(num => parseInt(num.trim()));

    if (!numerosArray.every(num => !isNaN(num))) {
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos separados por vírgula.';
        return;
    }

    const numerosOrdenados = numerosArray.sort((a, b) => a - b);

    document.getElementById('resultado').innerText = `Números ordenados: ${numerosOrdenados.join(', ')}`;
}