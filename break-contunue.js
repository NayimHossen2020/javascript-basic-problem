const products = [
    { name: "samsung s3 phone", price: 120000 },
    { name: "iphone s3 phone", price: 50000 },
    { name: 'ph laptop', price: 30000 },
    { name: 'tv lg', price: 3059 },
    { name: "computer", price: 599900 },
    { name: "watch", price: 696 }
]

for (const product of products) {
    const price = product.price;
    if (price < 10000) {
        continue;
    }
    console.log(product);
}