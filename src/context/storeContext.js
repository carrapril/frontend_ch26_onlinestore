import { createContext } from "react";

//The promise the descript of data btw components

const store = createContext({
    cart:[],
    user:{},



    addProdToCart: () => {},
    removeProdFromCart: () => {}
});

export default store;