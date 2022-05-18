import '../src/resources/reset.css'
import './App.css';
import { DepartmentSection } from './resources/components/Department_Section/Department_Section';
import { LinkNavigationComponent } from './resources/components/Link_Navigation/Link-Navigation';
import { ProductHeadComponent } from './resources/components/Product/Product_Head';
import { ProductDescriptionComponent } from './resources/components/Product/Product_Desc';
import { RelatedItemsComponent } from './resources/components/Related_Items/Related_Items_Section';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'


const ProductPage = ({ setCart, setWishlist }) => {
  const params = useParams();

  const apiKey = '75351bfa2a8944ad9366abcbb4a6a8c4';
  const number = '50';
  const query = 'best';
  const filterMapping = 'searchResults';


  const [product, setProduct] = useState({});

  React.useEffect( () => {
    getItems();
  },[])


  const getItems = async () => {
    // Fetch product information
    const fetchItem = await fetch(`https://api.spoonacular.com/food/products/${params.id}/?apiKey=${apiKey}`)

    const response = await fetchItem.json().catch(err => console.error(err));
    // Add the data to state
    setProduct(response)
  

  }

  return (
    <div className='Product_Page'>
        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        name={'Product'}
        path={`/product:id`}
        />

        {/* =========== PRODUCT HEAD ============== */}
        <ProductHeadComponent product={product} setCart={setCart} setWishlist={setWishlist} />

        {/* =========== PRODUCT DESCRIPTION ============== */}
        <ProductDescriptionComponent product={product} />

        {/* =========== RELATED ITEMS ============== */}
        <RelatedItemsComponent setCart={setCart} setWishlist={setWishlist} />

        {/* =========== APP SHOP BY DEPARTMENT SECTION ========== */}
        { <DepartmentSection /> }
    </div>
  )
}

export default ProductPage;