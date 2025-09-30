import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (cart.find((c) => c.id === item.id)) {
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...c, number: c.number + 1 } : c
        )
      );  
    }else{
        setCart([...cart, { ...item, number: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    if (cart.find((c) => c.id === item.id)) {
      setCart(
        cart.map((c) =>
          c.id === item.id ? { ...c, number: Math.max(c.number - 1, 0) } : c
        )
      );  
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}