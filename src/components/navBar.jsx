import './navBar.css';
import { Link } from "react-router-dom";
import store from '../context/storeContext';
import { useContext } from 'react';


const NavBar = () => {
    const cart = useContext(store).cart;

    const getNumber = () => {
        // sum all the quantity in the array
        let total = 0;
        for(let i=0; i < cart.length; i++){
            let prod = cart[i];

            total += prod.quantity;

        }
        return total;

        //return the total
        return cart.length;

    };

    return (
        <div className='navBar'>
            <h1>The Vacation Outfits</h1>
            
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/admin">Admin</Link>
            
            

            <button><Link to = "/cart"><img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-bag-full.png"/></Link>CART: <span className='badge bg-dark'>{getNumber()}</span></button> 


            <button><Link to = ""><img src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png"/></Link>WISHLIST</button>

            
        </div>

    );

};


export default NavBar;

