import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import './index.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-black min-h-screen text-white">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
