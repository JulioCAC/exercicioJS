function verificarPalindromo() {
    const palavra = document.getElementById('palavra').value.toLowerCase();
    const reverso = palavra.split('').reverse().join('');

    if (palavra === reverso) {
        document.getElementById('resultado').innerText = `"${palavra}" é um palíndromo.`;
    } else {
        document.getElementById('resultado').innerText = `"${palavra}" não é um palíndromo.`;
    }
}
