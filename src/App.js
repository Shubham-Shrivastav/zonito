import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Home from './components/Home';
import Exclusive from './pages/Exclusive';
import Cart from './pages/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCartItems(cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (itemId) => {
    setCartItems(cartItems.map(item =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/exclusive"
          element={<Exclusive addItemToCart={addItemToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeItemFromCart={removeItemFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              getTotalAmount={getTotalAmount}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
