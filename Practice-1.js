//Count the number of vowels in a string
let string = "A Quick brown fox jumps over the lazy dog";

function countVowel(sentence) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        const letter = sentence[i];
        if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
            count += 1;
        }
    }
    return count;
}
const result = countVowel(string);
console.log(result);

