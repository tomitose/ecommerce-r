const products = [
    { id: 1, img:"https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", name: 'Nike Air Jordan', price: 200, stock: 10 },
    { id: 2, img:"https://images.unsplash.com/photo-1584735175097-719d848f8449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", name: 'Nike SB Dunk Pro', price: 180, stock: 6},
    { id: 3, img:"https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Nike Air Max Pink', price: 180, stock: 4},
    { id: 4, img:"https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Nike Air Jordan 2', price: 180, stock: 2},
];


export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
    
});