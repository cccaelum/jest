const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
  });

describe('addProduct', () => {
    it('should add a product', () => {
        addProduct('necklace', 15);
        const products = getProducts();
        expect(products).toHaveLength(1);
        expect(products[0]).toEqual({ id: 1, name: "necklace", price: 15 })
    })
    it('should fail when adding a repeated product', () => {
        addProduct('necklace', 15);
        expect(() => addProduct('necklace', 15)).toThrow('Product already exists');
    })
    it('should fail when adding a product with no name or no price', () => {
        expect(() => addProduct(undefined, 5)).toThrow('Name is required');
        expect(() => addProduct('earrings', undefined)).toThrow('Price is required');
    })
})

describe('removeProduct', () => {
    it('should remove a product', () => {
        addProduct('necklace', 15);
        removeProduct(1);
        const products = getProducts();
        expect(products).toHaveLength(0);
    })
    it('should throw an error if the product does not exist', () => {
        expect(() => removeProduct(-1)).toThrow('Product not found');
      });
})

describe('getProduct', () => {
    it('should get a product', () => {
        addProduct("necklace", 15);
        const product = getProduct(1);
        expect(product).toEqual({ id: 1, name: "necklace", price: 15 });
    })
    it('should throw an error if the product does not exist', () => {
        expect(() => getProduct(-1)).toThrow('Product not found');
      });
})

describe('updateProduct', () => {
    it('should update a product', () => {
        addProduct('necklace', 15);
        updateProduct(1, 'silver necklace', 18);
        const product = getProduct(1);
        expect(product).toEqual({ id: 1, name: 'silver necklace', price: 18 });
    })
    it('should fail when updating a product that does not exist', () => {
        expect(() => updateProduct(-1, 'diamond ring', 1500)).toThrow('Product not found');
    })
    it('should only update the price', () => {
        addProduct('necklace', 15);
        updateProduct(1, 'necklace', 18);
        const product = getProduct(1);
        expect(product).toEqual({ id: 1, name: 'necklace', price: 18 });
    })
    it('should only update the name', () => {
        addProduct('necklace', 15);
        updateProduct(1, 'blue necklace', 15);
        const product = getProduct(1);
        expect(product).toEqual({ id: 1, name: 'blue necklace', price: 15 });
    })
})