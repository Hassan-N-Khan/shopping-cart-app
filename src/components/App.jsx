import '../styles/App.css';
import { Link } from "react-router-dom";
import shopCartIcon from "../assets/shopping-cart.png";
import shopIcon from "../assets/shop-icon.png";
import "../styles/App.css";

function App() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>🎬 Movie Shopping Cart</h1>
        <h2>Welcome! Pick your favorite movies and start shopping 🍿</h2>
      </header>

      <div className="home-actions">
        <Link to="/shop" className="home-button">
          <img src={shopIcon} alt="Shop Icon" />
          <span>Go to Shop</span>
        </Link>

        <Link to="/cart" className="home-button">
          <img src={shopCartIcon} alt="Cart Icon" />
          <span>View Cart</span>
        </Link>
      </div>
    </div>
  );
}

export default App;
