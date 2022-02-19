const products = [
    { id: 1, category:"nike", img:"https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", name: 'Nike Air Jordan', price: 200, stock: 10 },
    { id: 2, category:"nike", img:"https://images.unsplash.com/photo-1584735175097-719d848f8449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", name: 'Nike SB Dunk Pro', price: 180, stock: 6},
    { id: 3, category:"nike", img:"https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Nike Air Max Pink', price: 180, stock: 4},
    { id: 4, category:"nike", img:"https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Nike Air Jordan 2', price: 180, stock: 2},
    { id: 5, category:"vans", img:"https://images.unsplash.com/photo-1512990414788-d97cb4a25db3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80", name: 'Vans Green', price: 120, stock: 10 },
    { id: 6, category:"vans", img:"https://images.unsplash.com/photo-1582405255296-e85bd3a7944f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80", name: 'Vans Skate', price: 150, stock: 10 },
    { id: 7, category:"vans", img:"https://images.unsplash.com/photo-1566236485911-3bd1f07f9f7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80", name: 'Vans Boots B', price: 130, stock: 10 },
];


export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
    
});