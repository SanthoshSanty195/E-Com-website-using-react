import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Products from './products';
import ProductDetails from './productdetails';
import Cart from './cart';
import Login from './loginpage';
import Register from './registerpage';
import Checkout from './checkout';
import About from './about';
import Contact from './contact';
import { useState } from 'react';
import Confirm from './confirmation';

function App() {

  const [registeredData, setRegisteredData] = useState([]);
  const [details, setDetails ] = useState([]);


  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout details={details} setDetails={setDetails} />}></Route>
          <Route path="/login" element={<Login registeredData={registeredData} />}></Route>
          <Route path="/register" element={<Register registeredData={registeredData} setRegisteredData={setRegisteredData} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/confirm" element={<Confirm details={details}/>}></Route>
        </Routes>
      </div>
    </>

  );
}

export default App;
