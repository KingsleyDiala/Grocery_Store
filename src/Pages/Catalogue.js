import '../resources/reset.css'
import '../App.css';
import { LinkNavigationComponent } from '../resources/components/Link_Navigation/Link-Navigation';
import PaginatedItems from '../resources/components/Search_Result_Section/pagination';
import { motion } from 'framer-motion';


function Catalogue ({ cart, setCart, wishlist, setWishlist }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='catalogue'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        name={'Catalogue'}
        path={'/catalogue'}
        />

        {/* =========== SEARCH RESULT SECTION ========== */}
        <PaginatedItems cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} text={'Explore our Catalogue'} />

    </motion.div>
  )
}

export default Catalogue;