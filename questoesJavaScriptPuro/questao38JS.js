function stringsTerminadasEmA(array) {
    return array.filter(string => string.endsWith('a'));
}

const strings = ["banana", "maçã", "uva", "abacaxi"];
const stringsTerminadas = stringsTerminadasEmA(strings);
console.log(stringsTerminadas);
