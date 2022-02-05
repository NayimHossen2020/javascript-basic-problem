const products = [
    { name: "samsung s3 phone", price: 120000 },
    { name: "iphone s3 phone", price: 50000 },
    { name: 'ph laptop', price: 30000 },
    { name: 'tv lg', price: 3059 },
    { name: "computer", price: 5999 }
]

function searchProducts(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != - 1) {
            matched.push(product);
        }
    }
    return matched;
}
const result = searchProducts(products, 'phone');
console.log(result);