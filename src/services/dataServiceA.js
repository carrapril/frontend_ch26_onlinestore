var catalog = [
    {
        _id: "random1",
        title: "Two Piece Set",
        price: 39.99,
        total: 69.99,
        stock: 15,
        category: "Clothes",
        discount: 10,
        image: "activewear1.jpg",
    },
    {
        _id: "random2",
        title: "Pink Two Piece Set",
        price: 39.99,
        total: 89.99,
        stock: 1,
        category: "Clothes",
        discount: 10,
        image: "activewear2.jpg",
    },
    {
        _id: "random3",
        title: "Active Shirt",
        price: 39.99,
        total: 49.99,
        stock: 7,
        category: "Clothes",
        discount: 10,
        image: "active3.jpg",
    },
    
   
];



class DataServiceA{
    getCatalog(){
        //this method should retrive the data from the server

        //var catalog = request(); 

        return catalog;
    }
}

export default DataServiceA;