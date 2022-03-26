import "./footer.css";

const Footer = () => (
  <div className="footer">
    <h3>Vacation Outfits</h3>
    <div className="border">
    <h6>Would You Like 20% Off?</h6>
    <p>Be the first to know about the latest deals, styels updates and more!</p>
    <input type="email" placeholder="Email Address"></input>
    <p>Who are you shopping for?</p>
    <button>Women</button>
    <button>Men</button>
    <button className="percentOff">Get 20% OFF</button>
    </div>
    
    <div className="grid-container">
    
    <div className="item1">
    <ul>
    <h6>Company Info</h6>
    <li><a href="">About Us</a></li>
    <li><a href="">Careers</a></li>
    <li><a href="">Find A Store</a></li>
    <li><a href="">Site Map</a></li>
    </ul>
    </div>

   

    <div className="item2">
      <ul>
      <h6>Help</h6>

      <li><a href="">Contact Us</a></li>
      <li><a href="">Order Status</a></li>
      <li><a href="">Size Guide</a></li>
      <li><a href="">Online Returns</a></li>
      </ul>
    </div>
    <div className="item3">
      <ul>
      <h6>Bonus Links</h6>
        <li><a href="">Special Offers</a></li>
        <li><a href="">Gift Cards</a></li>
        <li><a href="">Student Discount</a></li>
        <li><a href="">Privacy Policy</a></li>
      </ul>
    </div>

    </div>
    

    <div>
    <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"/>
    <img src="https://img.icons8.com/color/48/000000/twitter--v2.png"/>
    <img src="https://img.icons8.com/fluency/48/000000/apple-app-store.png"/>
   

    <h5>© 2022 The Developer: April Carr  </h5>
    </div>
    
  </div>
);

export default Footer;