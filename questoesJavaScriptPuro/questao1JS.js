
var nome = "Júlio";
const cpf = "123.456.789-00";

function definirSobrenome() {
    let sobreNome = "César";
    return sobreNome;
}

let sobrenome = definirSobrenome();

console.log(nome);
console.log(sobrenome);
console.log(cpf);
console.log(`Nome completo: ${nome} ${sobrenome}; CPF: ${cpf}`);
