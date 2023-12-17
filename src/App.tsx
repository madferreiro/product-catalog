import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Store';
import ProductDetails from './components/ProductDetails';
import ProductFilter from './components/ProductFilter';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/produto/:id" element={<ProductDetails />} />
          </Routes>
          <ProductFilter />
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
