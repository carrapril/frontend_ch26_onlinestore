import "./admin.css";
import { useState, useEffect } from "react";
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


  const saveCoupon = async () => {
    console.log(coupon);

    let fixed = {...coupon};
    fixed.discount = parseInt(coupon.discount); //change the discount to an integer 

    let service = new DataService();
    let resp = await service.saveCouponCode(fixed);

    //add it to the allCoupons NEVER USE allCoupons.push(coupon);

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);

  };

  const loadCoupons = async() => {
    let service = new DataService();  
    let all = await service.getCoupons();
    setAllCoupons(all);

  };

// when cmp loads 

  useEffect(() => {
    loadCoupons();

  }, []);



  return (
    <div className="admin">
      <section>
        <h3>Register new product</h3>

        <div className="form">
          <div className="my-control">
            
            <input
              onChange={handleInputChange}
              name="title"
              type="text"
              placeholder="Product Title"
            ></input>
          </div>

          <div className="my-control">
            
            <input
              onChange={handleInputChange}
              name="image"
              type="text"
              placeholder="Product Image"
            ></input>
          </div>

          <div className="my-control">
            
            <input
              onChange={handleInputChange}
              name="category"
              type="text"
              placeholder="Category"
            ></input>
          </div>

          <div className="my-control">
            
            <input
              onChange={handleInputChange}
              name="price"
              type="text"
              placeholder="Product Price"
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
            
            <input
              onChange={handleCoupon}
              name="couponCode"
              type="text"
              placeholder="Coupon Code"
            ></input>
          </div>
          <div className="my-control">
            
            <input
              onChange={handleCoupon}
              name="couponDiscount"
              type="text"
              placeholder="Coupon Discount"
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
