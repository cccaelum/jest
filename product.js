let products = []; 
let id = 1; // Iniciar id en 1

function resetProducts() {
  products = [];
  id = 1; // Reiniciar id a 1
}

function addProduct(name, price) {
  if (!name) {
    throw new Error('Name is required');
  }

  if (!price) {
    throw new Error('Price is required');
  }

  const productExists = products.some(product => product.name === name); // uso de some (en lugar de find) porque devuelve true o false 
  if (productExists) {
    throw new Error('Product already exists');
  }

  const product = { id: id++, name, price };
  products.push(product);
}

function removeProduct(productId) {
  const index = products.findIndex(product => product.id === productId);
  if (index === -1) {
    throw new Error('Product not found');
  }
  products.splice(index, 1); // eliminamos solo 1 producto desde el indice dado
}

function getProducts() {
  return products;
}

function getProduct(productId) {
  const product = products.find(product => product.id === productId);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
}

function updateProduct(productId, name, price) {
  const product = products.find(product => product.id === productId);
  if (!product) {
    throw new Error('Product not found');
  }
  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;}

module.exports = {
    resetProducts,  
    addProduct, 
    removeProduct, 
    getProducts, 
    getProduct,
    updateProduct
  };