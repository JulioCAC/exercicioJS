const alunos = [
    { nome: "João", idade: 20, notas: [8, 7, 9] },
    { nome: "Maria", idade: 18, notas: [6, 7, 8] },
    { nome: "Pedro", idade: 22, notas: [9, 9, 9] }
];

const nomesDosAlunos = alunos.map(aluno => aluno.nome);
console.log(nomesDosAlunos);
