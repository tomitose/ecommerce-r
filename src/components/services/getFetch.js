const products = [
    { id: 1, category:"nike", img:"https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", name: 'Nike Air Jordan 1', price: 250, stock: 24 },
    { id: 2, category:"nike", img:"https://images.unsplash.com/photo-1584735175097-719d848f8449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", name: 'Nike SB Dunk Pro', price: 200, stock: 6},
    { id: 3, category:"nike", img:"https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Nike Air Max Pink', price: 185, stock: 4},
    { id: 4, category:"nike", img:"https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Nike Air Jordan 2', price: 230, stock: 2},
    { id: 5, category:"nike", img:"https://images.unsplash.com/photo-1612902377756-414b2139d5e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", name: 'Nike Air Jordan GY', price: 230, stock: 10 },
    { id: 6, category:"vans", img:"https://images.unsplash.com/photo-1542272605-15bd6a2bd4f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Vans C Yellow', price: 90, stock: 10 },
    { id: 7, category:"vans", img:"https://images.unsplash.com/photo-1621930997123-12b382615241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Vans Skate', price: 130, stock: 10 },
    { id: 8, category:"vans", img:"https://images.unsplash.com/photo-1501813722636-45de2fe4f9b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Vans B B', price: 100, stock: 20 },
    { id: 9, category:"reebok", img:"https://images.unsplash.com/photo-1530389912609-9a007b3c38a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Reebok MC', price: 130, stock: 10 },
    { id: 10, category:"adidas", img:"https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Adidas Classic W', price: 130, stock: 10 },
    { id: 11, category:"adidas", img:"https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Adidas W&B', price: 150, stock: 10 },
    { id: 12, category:"nike", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Nike FlyFree', price: 130, stock: 10 },
    { id: 13, category:"nike", img:"https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Nike Air Max', price: 130, stock: 10 },
    { id: 14, category:"newbalance", img:"https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", name: 'New Balance', price: 120, stock: 10 },
    { id: 15, category:"vans", img:"https://images.unsplash.com/photo-1485736231968-0c8ad5c9e174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", name: 'Vans Black', price: 120, stock: 10 }
];


export const getFetch = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
    
});