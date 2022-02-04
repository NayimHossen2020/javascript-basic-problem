/*........................................................
    the fourth problem is that find the first odd
    string from an array
......................................................... */


function oddFriend(array) {
    //error handle array validation
    if (Array.isArray(array) != true) {
        return "Pleas give an valid array"
    }
    //store first oddString from array
    let oddString = '';
    for (let i = 0; i < array.length; i++) {
        const friend = array[i];
        if (friend.length % 2 != 0) {
            oddString = friend;
            break;
        }
    }
    return oddString;
}

const friendArray = ['shoriful', 'alam', "jamal", 'Nayim', 'mim', 'perves', 'smit'];

const resultOddFriend = oddFriend(friendArray);
console.log(resultOddFriend);