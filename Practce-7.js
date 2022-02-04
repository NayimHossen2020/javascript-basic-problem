/*....................................................
    The first problem is converter ana to vori
...................................................... */


function anaToVori(ana) {
    //input must be a number
    if (typeof ana != "number") {
        return "Pleas enter a valid number";
    }
    // We know 16 ana = 1 vori
    const vori = ana / 16;
    return vori;
}

const resultVori = anaToVori(100);
console.log(resultVori);