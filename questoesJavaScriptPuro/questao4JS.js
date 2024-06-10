const tecnologia = "React";
const tecnologiaAF = "SpringBoot";

function objetivoDoCurso(nomeDaTecnologia){
    return `Meu objetivo é aprender ${nomeDaTecnologia}`;
}

const objetivoDoCursoArrowFunction = (nomeDaTecnoloigaAF) => {
    return `Meu objetivo é aprender ${nomeDaTecnoloigaAF}`;
}

console.log(objetivoDoCurso(tecnologia));
console.log(objetivoDoCursoArrowFunction(tecnologiaAF));