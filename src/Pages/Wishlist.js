import '../resources/reset.css'
import '../App.css';
import { LinkNavigationComponent } from '../resources/components/Link_Navigation/Link-Navigation';
import WishlistSection from '../resources/components/Wishlist/Wishlist_Section';
import React from 'react';



// ================================================================================

// THIS IS PRESENTATIONAL COMPONENT 
// Passed the wishlist array as prop
const Wishlist = ({ setCart, setWishlist, wishlist }) => {

  return (
    <div className='catalogue'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent name={'Wishlist'} path={'/wishlist'} />

        {/* =========== WISHLIST SECTION ========== */}
        <WishlistSection setCart={setCart} setWishlist={setWishlist} wishlist={wishlist} />

    </div>
  )
}

export default Wishlist;



