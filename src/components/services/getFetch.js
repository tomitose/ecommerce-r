const products = [
    { id: 1, name: 'Nike', price: 200 },
    { id: 2, name: 'Adidas', price: 180 },
    { id: 3, name: 'Puma', price: 180 },
];


export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
    
});