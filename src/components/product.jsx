import "./product.css";
import QuantityPicker from './quantityPicker';
import { useState } from 'react';

const Product = (props) => {
    const [quantity, setQuantity] = useState(1);


    const onQuantityChange = (value) => {
        console.log("Quantity has changed!", value);
        setQuantity(value);


    };
    const getTotal = () => {
        let total = quantity * props.data.price;
        return "$" + total.toFixed(2);
    };
    return (
        <div className="product">
            
            <img src={"/images/"+props.data.image} alt="product img"></img>
            <h3>{props.data.title}</h3>
            <label className="price">${props.data.price}</label>
            <label className="total">Total: {getTotal()}</label>
            
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button className="btn btn-warning">Add</button> 
                
        </div>
        
    );
 
    };

export default Product;