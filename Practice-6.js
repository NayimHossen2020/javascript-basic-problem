// find the second largest element of an array

function secondLargestElement(array) {
    let largest = array[0];
    let secondLargest = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > largest) {
            secondLargest = largest;
            largest = element;
        } else if (element > secondLargest) {
            secondLargest = element;
        }
    }
    return secondLargest;
}

const array = [23, 49, 89, 08, 23, 50];
const result = secondLargestElement(array);
console.log(result);