function encontrarMaiorEMenor() {
    const numerosInput = document.getElementById('numeros').value.trim();
    const numerosArray = numerosInput.split(',').map(num => parseFloat(num.trim()));

    if (!numerosArray.every(num => !isNaN(num))) {
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos separados por vírgula.';
        return;
    }

    const maiorNumero = Math.max(...numerosArray);
    const menorNumero = Math.min(...numerosArray);

    document.getElementById('resultado').innerText = `Maior número: ${maiorNumero}, Menor número: ${menorNumero}`;
}