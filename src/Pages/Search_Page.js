import '../resources/reset.css';
import '../App.css';
import { LinkNavigationComponent } from '../resources/components/Link_Navigation/Link-Navigation';
import Search_Result from '../resources/components/Search_Result_Section/Search_Result';
import { motion } from 'framer-motion';

function SearchPage () {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='search_page'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        path={'/search'}
        name={'Search'} />

        {/* =========== SEARCH RESULT SECTION ========== */}
        <Search_Result text={'Result for ‘’Apple’’ (34 Result)'} />

    </motion.div>
  )
}

export default SearchPage;