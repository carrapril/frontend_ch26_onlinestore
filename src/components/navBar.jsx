import './navBar.css';
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className='navBar'>
            <h1>The Vacation Outfits</h1>
            
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/admin">Admin</Link>
            
            

            <button><Link to = "/cart"><img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-bag-full.png"/></Link></button> 
            <button><Link to = ""><img src="https://img.icons8.com/ios-glyphs/30/000000/like--v1.png"/></Link></button>
        </div>

    );

};


export default NavBar;

