import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Help from './pages/Help';
import PaymentSuccess from './pages/PaymentSuccess';


    
    function App() {
      return (
        <div className="App">
          <BrowserRouter>
          <ScrollToTop/>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/ProductDetails/:id" element={<ProductDetails />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path='/Help' element={<Help/>}/>
            <Route path="*" element={<Error />} />
          </Routes>
          
          <Footer/>
          </BrowserRouter>
        </div>

    
    
    

  )
}
export default App
