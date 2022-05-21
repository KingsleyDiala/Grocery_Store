import '../resources/reset.css';
import '../App.css';
import { LinkNavigationComponent } from '../resources/components/Link_Navigation/Link-Navigation';
import { useParams } from 'react-router-dom';
import PaginatedItems from '../resources/components/Single_Category_Section/pagi_single_category';
import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';

function Category ({ setCart, setWishlist }) {
  // get the parameter from url
  const params = useParams();
  const [products, setProducts] = useState([]);

  const apiKey = '75351bfa2a8944ad9366abcbb4a6a8c4';
  const number = '50';
  const query = `${params.category}`;
  const filterMapping = 'searchResults';

    React.useEffect( () => {
    getItems();
  },[])


  const getItems = async () => {
    // Fetch product information
    const fetchItem = await fetch(`https://api.spoonacular.com/food/products/search?apiKey=${apiKey}&query=${query}&number=1000`)

    const response = await fetchItem.json().catch(err => console.error(err));
    // Add the data to state
    setProducts(response.products)
    

  }



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='search_page'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        name={`Category > ${params.category}`}
        path={'/categories'}
        />

        {/* =========== SEARCH RESULT SECTION ========== */}
        <PaginatedItems products={products} setProducts={setProducts} setCart={setCart} setWishlist={setWishlist} />
    </motion.div>
  )
}

export default Category;