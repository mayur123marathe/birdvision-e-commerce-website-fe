import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import ProductDetail from './pages/ProductDetail';
import NavBar from './components/Navbar';

function App() {
  return (
    <div>
    {<NavBar />}
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
