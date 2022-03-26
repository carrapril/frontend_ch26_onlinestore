import "./quantityPicker.css";
import {useState} from 'react';

const QuantityPicker = (props) => {
  let [quantity, setQuantity] = useState(1);
  const handleDecrease = () => {
    let value = quantity;
    if(value>1)
      value = value -1;
        
    setQuantity(value);
    props.onChange(value);
  }
  const handleIncrease = () => {
    let value = quantity+1;
      setQuantity(value);
      props.onChange(value);
  }


 

  return (<div className="quantityPicker">
    <label>Qty </label>
      
      <button className="btn btn-outline-warning btn-sm" onClick = {handleDecrease}>-</button>
      <label> {quantity} </label>
      <button className="btn btn-outline-warning btn-sm" onClick = {handleIncrease}> +</button>
    
  </div>);
};

export default QuantityPicker;