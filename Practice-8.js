/*.............................................................
   The Second problem is pandaCost calculate three items price
............................................................... */


function pandaCost(singara, samucha, jilapi) {
    //error handle valid positive number
    if (typeof singara != "number" || singara < 0) {
        return "Pleas enter a valid positive number";
    }
    if (typeof samucha != "number" || samucha < 0) {
        return "Pleas enter a valid positive number";
    }
    if (typeof jilapi != "number" || jilapi < 0) {
        return "Pleas enter a valid positive number";
    }
    //food price list
    const singaraPrice = 7;
    const samuchaPrice = 10;
    const jilapiPrice = 15;

    //Each food eaten cost
    const singaraCost = singara * singaraPrice;
    const samuchaCost = samucha * samuchaPrice;
    const jilapiCost = jilapi * jilapiPrice;

    //Total food bill calculate
    const totalBill = singaraCost + samuchaCost + jilapiCost;
    return totalBill;
};

const resultTotalBill = pandaCost(3, 4, 4);
console.log(resultTotalBill);