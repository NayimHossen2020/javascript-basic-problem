//Find if anybody got A+ from your friends

function checkGPA(marks) {
    if (Array.isArray(marks) != true) {
        return "pleas give an array"
    }
    for (let i = 0; i < marks.length; i++) {
        const mark = marks[i];
        if (mark >= 80) {
            return true;
        }
    }
    return false;
}

const result = checkGPA([89, 50, 79]);
console.log(result);