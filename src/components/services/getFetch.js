const products = [
    { id: 1, name: 'Nike', price: 200, stock: 10 },
    { id: 2, name: 'Adidas', price: 180, stock: 6},
    { id: 3, name: 'Puma', price: 180, stock: 4},
    { id: 4, name: 'Reebok', price: 180, stock: 2},
];


export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
    
});