var carreira = "Desenvolvedor FullStack";
var carreiraAF = "Desenvolvedor BackEnd";

function objetivoDeCarreira(nomeDaCarreira){
    return `Meu objetivo de carreira é me tornar um ${nomeDaCarreira}`;
}

const objetivoDeCarreiraArrowFunction = (nomeDaCarreiraAF) => {
    return `Meu objetivo de carreira é me tornar um ${nomeDaCarreiraAF}`;
}

console.log(objetivoDeCarreira(carreira));
console.log(objetivoDeCarreiraArrowFunction(carreiraAF));