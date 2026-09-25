// Write your code here
const products = ["Laptop" , "Phone" , "Headphones" , "Monitor"];

function logFirstProduct() {
  console.log(products[0]);
}

function addProduct(productName){
  products.push(productName);
}
addProduct("Earpod");

console.log(products);

function updateProductName(position, newName) {
  products[position] = newName;
}

updateProductName(2 , "smartphone");

console.log(products);


function removeLastProduct() {
  products.pop();
}
removeLastProduct();

console.log(products);


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
