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

function App() {

  const [registeredData, setRegisteredData] = useState([
    {
      name: "Santhosh Kumar",
      username: "santy",
      password: "12345"
    },
    {
      name: "Monkey D Luffy",
      username: "meat",
      password: "67890"
    }
  ]);


  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login registeredData={registeredData} />}></Route>
          <Route path="/register" element={<Register registeredData={registeredData} setRegisteredData={setRegisteredData} />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>

  );
}

export default App;
