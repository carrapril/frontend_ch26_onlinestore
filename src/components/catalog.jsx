import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
import QuantityPicker from './quantityPicker';

import { useEffect, useState } from 'react';

const Catalog = () => {
    let[products, setProducts] = useState([]);
    const loadCatalog = () => {
        console.log("Data Retrieved");
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    };

    useEffect( () => {
        loadCatalog();
    }

    );
    

    return (
        <div className="catalog">
            
            <div className="contentBanner">
                <h4>Take an Extra 30% Off</h4>
                <h6>Code:SpringFever</h6>
                <button>Shop Now</button>
            </div>
            <div>
            <h2>Vacation Outfits</h2>
            {products.map((prod) => (<Product key={prod._id}
            data={prod}
            
            
            /> )
            )
            
            }

            </div>
         
            
          
        
        
        </div>
    );
 
    };

export default Catalog;
