import React, { useState, useEffect } from "react";
import './App.css';
import Home from "../src/Pages/Home";
import ProductPage from '../src/Pages/Product_Page';
import CategoryPage from "../src/Pages/Categories";
import SearchPage from '../src/Pages/Search_Page';
import { Route, Routes } from "react-router-dom";
import { NavbarComponent } from "./resources/components/Navbar/Navbar";
import { TopFooterComponent } from "./resources/components/Top_Footer/Footer";
import { BottomFooterComponent } from "./resources/components/Bottom_Footer/Bottom_Footer";
import Category from "../src/Pages/Category";
import Catalogue from "../src/Pages/Catalogue";
import Wishlist from "../src/Pages/Wishlist";
import Contact from "../src/Pages/Contact";


const App = () => {
  // Wishlist State 
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // const apiFetch = async () => {
  //   const apiKey = '9c0bb3a2e3b94200a61a781b4d3df3ea'
  //   const secretKey = '70edf14fd0bc4f08b5e6b5954097dae0'
  //   const url = `https://platform.fatsecret.com/js?key=${apiKey}&auto_load=true`

  //   // Data fetch
  //   const response = await fetch(url).json().catch(err => console.error(err));
  //   console.log(response);
  // }


  return (
      <div>
      <NavbarComponent cart={cart} wishlist={wishlist} />
      <Routes>
        <Route path="/" exact element={ <Home cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} /> } />
        <Route path="/search" exact element={ <SearchPage setCart={setCart} setWishlist={setWishlist} /> } />
        <Route path="/categories" element={ <CategoryPage setCart={setCart} setWishlist={setWishlist} /> } />
        <Route path="/product/:id" element={ <ProductPage setCart={setCart} setWishlist={setWishlist} /> } />
        <Route path="/categories/:category" element={ <Category setCart={setCart} setWishlist={setWishlist} />} />
        <Route path="/catalogue" element={ <Catalogue cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} /> } />
        <Route path="/wishlist" element={ <Wishlist setCart={setCart} setWishlist={setWishlist} wishlist={wishlist} /> } />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
      <TopFooterComponent />
      <BottomFooterComponent />
      </div>
  )
}

export default App