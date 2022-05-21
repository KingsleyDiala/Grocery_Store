import '../resources/reset.css';
import '../App.css';
import { LinkNavigationComponent } from '../resources/components/Link_Navigation/Link-Navigation';
import AllCategories from '../resources/components/Category_Section/Paginantion_Categ_sec';
import { motion } from 'framer-motion'

function CategoryPage ({ setCart, setWishlist }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='category_page'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        name={'Category'} 
        path={'/category'}
        />

        {/* =========== SEARCH RESULT SECTION ========== */}
        <AllCategories setCart={setCart} setWishlist={setWishlist} />
    </motion.div>
  )
}

export default CategoryPage;