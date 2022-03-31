import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <header>
        <section class="o-header">
          <h1> Welcome to The Vacation Outfits</h1>
          <h5>Outfits designed for your ideal vacation!</h5>
          <Link to="/catalog" className="btn btn-warning home-button">
            Check Our Amazing Catalog!
          </Link>
          <div>
            <img src="/images/home_page.jpg" width="300" height="300"></img>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Home;
