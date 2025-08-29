const name = "Jane";
const userAge = 26;

const user = {
    name,
    age: userAge,
    location: "Greensboro"
}

console.log(user);

//Obj Destructuring 
const product = {
    label: "Notebook",
    price: 3,
    stock: 203,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label;
// const stock = product.stock;

// const {label: productLabel, stock, rating = 5} = product;
// console.log(stock);
// console.log(productLabel);
// console.log(rating);

const trans = (type, { label, stock = 0 } = {}) => {
    // const {label} = myProduct;
    console.log(type, label, stock);
}

trans("order", product);