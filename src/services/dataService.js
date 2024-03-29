import axios from 'axios';

var catalog = [
    {
        _id: "random1",
        title: "Canada Outfit",
        price: 59.99,
        total: 69.99,
        stock: 15,
        category: "Clothes",
        discount: 10,
        image: "Canada.jpg",
    },
    {
        _id: "random2",
        title: "Dubai Outfit",
        price: 79.99,
        total: 89.99,
        stock: 1,
        category: "Clothes",
        discount: 10,
        image: "DubaiOutfit.jpg",
    },
    {
        _id: "random3",
        title: "Hollywood Outfit",
        price: 39.99,
        total: 49.99,
        stock: 7,
        category: "Clothes",
        discount: 10,
        image: "California.jpg",
    },
    {
        _id: "random4",
        title: "Greece Outfit",
        price: 89.99,
        total: 100,
        stock: 10,
        category: "Clothes",
        discount: 10,
        image: "Greece.jpg",
    },
    {
        _id: "random5",
        title: "New York Outfit",
        price: 59.99,
        total: 79.99,
        stock: 12,
        category: "Clothes",
        discount: 10,
        image: "NewYork.jpg",
    },
    {
        _id: "random6",
        title: "Utah Outfit",
        price: 69.99,
        total: 89.99,
        stock: 15,
        category: "Clothes",
        discount: 10,
        image: "Utah.jpg",
    },
    {
        _id: "random7",
        title: "Two Piece Set",
        price: 39.99,
        total: 69.99,
        stock: 15,
        category: "Clothes",
        discount: 10,
        image: "activewear1.jpg",
    },
    {
        _id: "random8",
        title: "Pink Two Piece Set",
        price: 39.99,
        total: 89.99,
        stock: 1,
        category: "Clothes",
        discount: 10,
        image: "activewear2.jpg",
    },
    
    {
        _id: "random10",
            title: "Gold Layered Necklace",
            price: 29.99,
            total: 49.99,
            stock: 7,
            category: "Jewerly",
            discount: 10,
            image: "necklace1.jpg",    
    },
    {
        _id: "random11",
            title: "Mix and Match Set",
            price: 39.99,
            total: 49.99,
            stock: 7,
            category: "Jewerly",
            discount: 10,
            image: "necklace2.jpg",
    },
    {
        _id: "random12",
            title: "Silver Layered Necklace",
            price: 19.99,
            total: 49.99,
            stock: 7,
            category: "Clothes",
            discount: 10,
            image: "necklace3.jpg",
    },
    {
        _id: "random13",
            title: "Men Casual Shoes",
            price: 39.99,
            total: 49.99,
            stock: 7,
            category: "shoes",
            discount: 10,
            image: "shoes1.jpg",
    },
    {
        _id: "random14",
            title: "Unisex Active Shoes",
            price: 59.99,
            total: 49.99,
            stock: 7,
            category: "shoes",
            discount: 10,
            image: "shoes2.jpg",

    },
    {
        _id: "random15",
            title: "Women Shoe Boots",
            price: 69.99,
            total: 49.99,
            stock: 7,
            category: "shoes",
            discount: 10,
            image: "shoes3.jpg",

    },
    {
        _id: "random16",
            title: "Hollywood Sunglasses",
            price: 19.99,
            total: 49.99,
            stock: 7,
            category: "glasses",
            discount: 10,
            image: "sunglass2.jpg",
    },
    {   _id: "random17",
            title: "Men Sunglasses",
            price: 29.99,
            total: 49.99,
            stock: 7,
            category: "glasses",
            discount: 10,
            image: "sunglass3.jpg",
    },
];



class DataService{
    async getCatalog(){  //async and await goes together

        //this method should retrive the data from the server

        let resp = await axios.get("http://127.0.0.1:5000/api/catalog");
        return resp.data;

        //local data 
        //return catalog;
    }

    async getCoupons(){
        console.log("setp 2");
        let resp = await axios.get("http://127.0.0.1:5000/api/couponCode");
        return resp.data;
    }

    saveProduct(prod){
        console.log("Sending prod to server,,,,,Not");
    }
    async saveCouponCode(code){
        let resp = await axios.post("http://127.0.0.1:5000/api/couponCode", code);
        return resp.data;
    }
}

export default DataService;