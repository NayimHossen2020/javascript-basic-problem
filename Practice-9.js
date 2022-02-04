/*........................................................
    The Third problem is calculate cost of a picnic based 
    on the member 
......................................................... */


function picnicBudget(member) {
    //error handle valid positive number
    if (typeof member != "number" || member <= 0) {
        return "Pleas enter a valid positive number";
    };
    //store total cost
    let picnicCost = 0;

    if (member > 200) {
        //after 200 member cost calculate
        let first100Member = 100 * 5000;
        let after100Member = 100 * 4000;
        let after200Member = (member - 200) * 3000;

        picnicCost = first100Member + after100Member + after200Member;

    } else if (member > 100) {
        //after 100 member cost calculate
        let first100Cost = 100 * 5000;
        let after100Cost = (member - 100) * 4000;
        picnicCost = first100Cost + after100Cost;
    } else if (member <= 100) {
        //0 to 100 member cost calculate
        picnicCost = member * 5000;
    }

    return picnicCost;
}

const resultPicnicCost = picnicBudget(300);
console.log(resultPicnicCost);