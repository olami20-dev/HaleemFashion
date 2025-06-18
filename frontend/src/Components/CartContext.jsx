import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (shoe) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.name === shoe.name);
      if (itemIndex !== -1) {
        const updated = [...prevItems];
        updated[itemIndex].quantity += 1;
        return updated;
      }
      return [...prevItems, { ...shoe, quantity: 1 }];
    });
  };

  const updateQuantity = (index, quantity) => {
    setCartItems((prevItems) => {
      const updated = [...prevItems];
      updated[index].quantity = Math.max(1, quantity);
      return updated;
    });
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
