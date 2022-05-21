import '../resources/reset.css'
import '../App.css';
import { LinkNavigationComponent } from '../resources/components/Link_Navigation/Link-Navigation';
import WishlistSection from '../resources/components/Wishlist/Wishlist_Section';
import React from 'react';
import { motion } from 'framer-motion';



// ================================================================================

// THIS IS PRESENTATIONAL COMPONENT 
// Passed the wishlist array as prop
const Wishlist = ({ setCart, setWishlist, wishlist }) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='catalogue'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent name={'Wishlist'} path={'/wishlist'} />

        {/* =========== WISHLIST SECTION ========== */}
        <WishlistSection setCart={setCart} setWishlist={setWishlist} wishlist={wishlist} />

    </motion.div>
  )
}

export default Wishlist;



