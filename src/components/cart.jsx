import "./cart.css";
import { useContext } from "react";
import store from "../context/storeContext";
import ProductInCart from "./productincart";

const Cart = () => {
  let { cart, addProdToCart } = useContext(store);

  return (
    <div className="cart-page">
      <h1> CART ITEMS </h1>
      <h5>Ready to Checkout? {cart.length} Items </h5>

      <div className="products">
        {cart.map((prod) => (
          <ProductInCart key={prod._id} data={prod}></ProductInCart>
        ))}
        <h5></h5>
      </div>
    </div>
  );
};

export default Cart;
