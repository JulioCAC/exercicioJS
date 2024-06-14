function inverterStrings(array) {
    return array.map(string => string.split('').reverse().join(''));
}

const strings = ["abc", "def", "ghi"];
const stringsInvertidas = inverterStrings(strings);
console.log(stringsInvertidas);
