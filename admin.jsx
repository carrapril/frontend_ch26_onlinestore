import "./admin.css";
import { useState } from "react";
import DataService from "../services/dataService";

const Admin = () => {
  const [prod, setProd] = useState({});
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProd, setAllProd] = useState([]);

  //allCoupons []
  const handleInputChange = (e) => {
    var copy = { ...prod };
    copy[e.target.name] = e.target.value;
    setProd(copy);

    
  };
  const handleSumbit = () => {
    console.log(prod);
    let service = new DataService();
    service.saveProduct(prod);
    
    let copy = [...allProd];
    copy.push(prod);
    setAllProd(copy);
  };
  const handleCoupon = (e) => {
    var copy = { ...coupon };
    copy[e.target.name] = e.target.value;
    setCoupon(copy);

    
  };


  const saveCoupon = () => {
    console.log(coupon);

    let service = new DataService();
    service.saveCouponCode(coupon);

    //add it to the allCoupons NEVER USE allCoupons.push(coupon);

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);

  };

  return (
    <div className="admin">
      <section>
        <h3>Register new product</h3>

        <div className="form">
          <div className="my-control">
            <label>Product Title:</label>
            <input
              onChange={handleInputChange}
              name="title"
              type="text"
            ></input>
          </div>

          <div className="my-control">
            <label>Product Image:</label>
            <input
              onChange={handleInputChange}
              name="image"
              type="text"
            ></input>
          </div>

          <div className="my-control">
            <label>Category:</label>
            <input
              onChange={handleInputChange}
              name="category"
              type="text"
            ></input>
          </div>

          <div className="my-control">
            <label>Product Price</label>
            <input
              onChange={handleInputChange}
              name="price"
              type="text"
            ></input>
          </div>

          <div className="my-control">
            <button onClick={handleSumbit} className="btn btn-dark">
              Save Product
            </button>
          </div>
          {allProd.map((prod, index) => (
              <div key={index}>
                {prod.title} -{prod.price}
              </div>
            ))}
        </div>
      </section>

      <section>
        <h3>Coupon Codes</h3>
        <div className="form">
          <div className="my-control">
            <label>Coupon Code:</label>
            <input
              onChange={handleCoupon}
              name="couponCode"
              type="text"
            ></input>
          </div>
          <div className="my-control">
            <label>Coupon Discount:</label>
            <input
              onChange={handleCoupon}
              name="couponDiscount"
              type="text"
            ></input>
          </div>

          <div className="my-control">
            <button onClick={saveCoupon} className="btn btn-dark">
              Save Product
            </button>
          </div>
          <div className="coupon-list">
            {allCoupons.map((coupon, index) => (
              <div key={index}>
                
                <label>{coupon.couponCode}</label> -<label>{coupon.couponDiscount}</label>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
