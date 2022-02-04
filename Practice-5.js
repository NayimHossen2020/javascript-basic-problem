//find a largest element of an array

function largestNumber(array) {
    if (Array.isArray(array) != true) {
        return "pleas give an array"
    }
    let largest = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const array = [23, 40, 54, 30, 90, 100];
const result = largestNumber(array);
console.log(result);