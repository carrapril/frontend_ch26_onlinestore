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
            <div className="storeDiv1"><img src="/images/store-div1.JPG" width="800"></img></div>
            <div className="storeDiv2"><img src="/images/store-div2.JPG"width="900" ></img></div>
            {products.map((prod) => (<Product key={prod._id}
            data={prod}
            
            /> )
            )
            
            }

            <div className="storeDiv3"><img src="/images/store-div3.JPG" width="800"></img></div>

            </div>
         
            
          
        
        
        </div>
    );
 
    };

export default Catalog;
