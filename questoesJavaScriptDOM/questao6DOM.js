function calcularNomes() {
    const nomesInput = document.getElementById('nomesInput').value.trim();
    const nomes = nomesInput.split(',').map(nome => nome.trim());

    if (nomes.length === 0 || (nomes.length === 1 && nomes[0] === '')) {
        alert("Por favor, insira pelo menos um nome válido.");
        return;
    }

    let nomeMaisLongo = nomes[0];
    let nomeMaisCurto = nomes[0];

    for (let i = 1; i < nomes.length; i++) {
        if (nomes[i].length > nomeMaisLongo.length) {
            nomeMaisLongo = nomes[i];
        }
        if (nomes[i].length < nomeMaisCurto.length) {
            nomeMaisCurto = nomes[i];
        }
    }

    const resultado = `O nome mais longo é: ${nomeMaisLongo}<br>O nome mais curto é: ${nomeMaisCurto}`;
    document.getElementById('resultado').innerHTML = resultado;
}
