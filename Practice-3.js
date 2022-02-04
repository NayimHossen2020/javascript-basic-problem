//calculate Electricity bill
//for first 100 unit - 5 taka per unit
//for more than 100 unit - 6 taka for every unit

function calculateBill(unit) {
    let bill;
    if (unit <= 100) {
        bill = unit * 5;
    }
    else if (unit > 200) {
        let first100Bill = 100 * 5;
        let after100Bill = 100 * 6;
        let after200Bill = (unit - 200) * 7;
        bill = first100Bill + after100Bill + after200Bill;
    }
    else if (unit > 100) {
        let first100 = 100 * 5;
        let after100 = (unit - 100) * 6;
        bill = first100 + after100;
    }
    return bill;
}

const result = calculateBill(250);
console.log(result);