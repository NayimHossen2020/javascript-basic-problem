//string length without string.length

const myString = "nayim";

function stringLength(str) {
    let length = 0;
    while (true) {
        if (str.charAt(length) == '') {
            break;
        }
        else {
            length++;
        }
    }
    return length;
}

const result = stringLength(myString);
console.log(result);