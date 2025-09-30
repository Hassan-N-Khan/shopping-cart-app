import { Link } from "react-router-dom";
import { useCart } from "./CartProvider.jsx";
import shopIcon from "../assets/shop-icon.png";
import '../styles/Cart.css';
import lazyImage from "../assets/lazyImage.jpg";
import homeIcon from "../assets/homeIcon.png";

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <>
        <div className="navigation-links">
            <Link to="/"><img src={homeIcon} alt="Home Icon" width="40" height="40" /></Link>
            <br />
            <Link to="/shop"><img src={shopIcon} alt="Shop Icon" width="40" height="40" /></Link>
        </div>
        <h1>Welcome to your cart!</h1>
        <div className="cart-items">
            {cart.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                cart.map((movie) => (
                <div key={movie.id} className="cart-item-card">
                    <img className="movie-poster" src={lazyImage} alt="Movie Poster"/>
                    <p>{movie.title}</p>
                    <p>${movie.price}</p>
                    <p>Number of movies in Cart: {movie.number}</p>
                </div>
                ))
            )}
        </div>

    </>
  );
}
export default Cart;
