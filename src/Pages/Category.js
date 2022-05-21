import '../resources/reset.css';
import '../App.css';
import { LinkNavigationComponent } from '../resources/components/Link_Navigation/Link-Navigation';
import { useParams } from 'react-router-dom';
import PaginatedItems from '../resources/components/Single_Category_Section/pagi_single_category';
import { motion } from 'framer-motion';

function Category ({ setCart, setWishlist }) {
  // get the parameter from url
  const params = useParams();

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
        <PaginatedItems setCart={setCart} setWishlist={setWishlist} />
    </motion.div>
  )
}

export default Category;