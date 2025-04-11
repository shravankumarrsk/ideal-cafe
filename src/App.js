// App.js
import OffersPage from './pages/OffersPage';
import CartPage from './pages/CartPage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
//import CartPage from './pages/CartPage'; // ✅ Import CartPage here

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} /> {/* ✅ Add this inside Routes */}
      </Routes>
    </Router>
  );
}

export default App;
