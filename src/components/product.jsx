import "./product.css";
import QuantityPicker from './quantityPicker';
import { useState, useContext } from 'react';
import store from "../context/storeContext";

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);

    const addProdToCart = useContext(store).addProdToCart;


    const onQuantityChange = (value) => {
        console.log("Quantity has changed!", value);
        setQuantity(value);


    };
    const getTotal = () => {
        let total = quantity * props.data.price;
        return "$" + total.toFixed(2);
    };
    const addProduct = () => {

        //create obj
        let cartProd = {...props.data};
        cartProd.quantity =quantity;
        addProdToCart(cartProd);

    }
    return (
        <div className="product">
            
            <img src={"/images/"+props.data.image} alt="product img"></img>
            <h3>{props.data.title}</h3>
            <label className="price">${props.data.price}</label>
            <label className="total">Total: {getTotal()}</label>
            
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button onClick={addProduct} className="btn btn-warning">Add</button> 
                
        </div>
        
    );
 
    };

export default Product;