//Potato price
//For first 2 kg - 30 taka per kg
//For more then 2 kg - 25 taka per kg
//Write a function to calculate total price based on given quantity and handle errors

function potatoPrice(potatoQuantity) {
    if (typeof potatoQuantity != "number" || potatoQuantity <= 0) {
        return "Place enter a valid quantity";
    }
    if (potatoQuantity > 20) {
        return "I have only 20 kg";
    }

    let price;
    if (potatoQuantity <= 2) {
        price = potatoQuantity * 30;
    }
    else {
        price = potatoQuantity * 25;
    }
    return price;
}

const result = potatoPrice(20);
console.log(result);