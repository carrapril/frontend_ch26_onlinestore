import "./admin.css";
import { useState } from 'react';
import DataService from "../services/dataService";

const Admin = () => {
    const [prod, setProd] = useState({});
    const [coupon, setCoupon] =useState({});
    const handleInputChange = (e) => {
        var copy = {...prod};
        copy[e.target.name] = e.target.value;
        setProd(copy);
    };
    const handleSumbit = () => {
        console.log(prod);
        let service = new DataService();
        service.saveProduct(prod);  
    };
    const handleCoupon = (e) => {
        var copy = {...coupon};
        copy[e.target.name] = e.target.value;
        setCoupon(copy);

    };
    const saveCoupon =() => {
        console.log(coupon);

        let service = new DataService();
        service.saveCouponCode(coupon);
    }
    return(
       
            
            <div className="admin">
            <section>
            <h3>Register new product</h3>

          <div className="form">

          <div className="my-control">
            <label>Product Title:</label>
            <input onChange={handleInputChange} name="title" type="text"></input>
          </div>

          <div className="my-control">
            <label>Product Image:</label>
            <input onChange={handleInputChange} name="image" type="text"></input>
          </div>

          <div className="my-control">
            <label>Category:</label>
            <input onChange={handleInputChange} name="category" type="text"></input>
          </div>

          <div className="my-control">
            <label>Product Price</label>
            <input onChange={handleInputChange} name="price" type="text"></input>
          </div>

          <div className="my-control">
            <button onClick ={handleSumbit} className="btn btn-dark">Save Product</button>
          </div>
          

        </div>
        </section>
        

         <section>
        <h3>Coupon Codes</h3>
        <div className="form">
            <div className="my-control"><label>Coupon Code:</label>
            <input onChange={handleCoupon} name="coupon-name" type="text"></input>
            </div>
            <div className="my-control"><label>Coupon Discount:</label>
            <input onChange={handleCoupon} name="coupon-discount" type="text"></input>
            </div>

            <div className="my-control">
            <button onClick ={saveCoupon} className="btn btn-dark">Save Product</button>    
            </div>
        </div>
        </section>

    </div>

            
        
    );

};

export default Admin;