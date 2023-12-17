import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductFilter from './components/ProductFilter';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/produto/:id" element={<ProductDetails />} />
        </Routes>
        <ProductFilter />
      </div>
    </Router>
  );
};

export default App;
