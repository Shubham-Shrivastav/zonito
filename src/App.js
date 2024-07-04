import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./components/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{
        background: 'black',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
