import React from 'react';
import './App.css';
import ProductsPage from "./products/ProductsPage";
import ProductComponent from "./products/ProductComponent"

function App() {
  return (
    <div className="container">
      <ProductComponent id="1234" name="Lime Time" count={5} cost="1.25" price="5.00"/>
      <ProductsPage />
    </div>
  );
}

export default App;
