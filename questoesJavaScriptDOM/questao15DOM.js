function verificarNumeroPerfeito() {
    const numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, digite um número inteiro positivo válido.';
        return;
    }

    let somaDivisores = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            somaDivisores += i;
        }
    }

    if (somaDivisores === numero) {
        document.getElementById('resultado').innerText = `${numero} é um número perfeito.`;
    } else {
        document.getElementById('resultado').innerText = `${numero} não é um número perfeito.`;
    }
}