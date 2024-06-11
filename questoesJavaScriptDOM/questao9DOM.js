function contar() {
    var texto = document.getElementById("texto").value.toLowerCase();
    var vogais = 0;
    var consoantes = 0;

    for (var i = 0; i < texto.length; i++) {
        var char = texto.charAt(i);
        if (char.match(/[aeiouáéíóúàèìòùãẽĩõũâêîôû]/)) {
            vogais++;
        } else if (char.match(/[bcdfghjklmnpqrstvwxyzç]/)) {
            consoantes++;
        }
    }

    document.getElementById("resultado").innerHTML = `Números de vogais: ${vogais} <br>Número de consoantes: ${consoantes}`
}
