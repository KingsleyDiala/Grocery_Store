import React from "react";
import './App.css';
import Home from "./Home";
import ProductPage from './Product_Page';
import CategoryPage from "./Category_Page";
import SearchPage from './Search_Page';
import { Route, Routes } from "react-router-dom";
import { NavbarComponent } from "./resources/components/Navbar/Navbar";
import { TopFooterComponent } from "./resources/components/Top_Footer/Footer";
import { BottomFooterComponent } from "./resources/components/Bottom_Footer/Bottom_Footer";
import Category from "./Category";
import Catalogue from "./Catalogue";
import Wishlist from "./Wishlist";
import Contact from "./Contact";


const App = () => {
  return (
      <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" exact element={ <Home /> } />
        <Route path="/search" exact element={ <SearchPage /> } />
        <Route path="/category" element={ <CategoryPage /> } />
        <Route path="/product" element={ <ProductPage /> } />
        <Route path="/single-category" element={ <Category />} />
        <Route path="/catalogue" element={ <Catalogue /> } />
        <Route path="/wishlist" element={ <Wishlist /> } />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
      <TopFooterComponent />
      <BottomFooterComponent />
      </div>
  )
}

export default App