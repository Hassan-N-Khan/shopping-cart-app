import { Link } from "react-router-dom";
import movieList from "./movieList";
import { useCart } from "./CartProvider.jsx";
import lazyImage from "../assets/lazyImage.jpg";
import shopCartIcon from "../assets/shopping-cart.png";
import homeIcon from "../assets/homeIcon.png";
import '../styles/Shop.css';


function Shop() {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <>  
        <div className="navigation-links">
            <Link to="/"><img src={homeIcon} alt="Home Icon" width="40" height="40" /></Link>
            <br />
            <Link to="/cart"><img src={shopCartIcon} alt="Shop Cart Icon" width="40" height="40" /></Link>
        </div>
        <h1>Movie Catalog</h1>
        <div className="movie-items">
            {movieList.movies.map((movie) => {
                const itemInCart = cart.find((c) => c.id === movie.id);

                return (
                    <div key={movie.id}>
                        <div>
                            <div className="movie-item-card">
                                <img className="movie-poster" src={lazyImage} alt="Movie Poster"/>
                                <p>{movie.title}</p>
                                <p>${movie.price}</p>
                                <p>
                                    {itemInCart ? itemInCart.number : 0} in Cart
                                </p>
                                <div className="movie-item-buttons">
                                    <button onClick={() => addToCart(movie)}>Add to Cart</button>
                                    <button onClick={() => removeFromCart(movie)}>Remove from Cart</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                );
            })}
        </div>
    </>
  );
}

export default Shop;
