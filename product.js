let products = []; 
let id = 1;

function resetProducts() {
  products = [];
  id = 1;
}

function getProducts() {
  return products;
}

function getProduct() {

}

module.exports = {
    resetProducts,  
    addProduct, 
    removeProduct, 
    getProducts, 
    getProduct,
    updateProduct
  };