// import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Products from './products';
import ProductDetails from './productdetails';

function App() {



  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/id" element={<ProductDetails />}></Route>
        </Routes>
      </div>
    </>

  );
}

export default App;
