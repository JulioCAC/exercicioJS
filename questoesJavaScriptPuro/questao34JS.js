const alunos = [
    { nome: "João", idade: 20, notas: [8, 7, 9] },
    { nome: "Maria", idade: 15, notas: [6, 7, 8] },
    { nome: "Pedro", idade: 22, notas: [9, 9, 9] }
];

const somaDasIdades = alunos.reduce((soma, aluno) => soma + aluno.idade, 0);
const mediaDasIdades = somaDasIdades / alunos.length;
console.log(mediaDasIdades);
