import '../src/resources/reset.css'
import './App.css';
import { LinkNavigationComponent } from './resources/components/Link_Navigation/Link-Navigation';
import Search_Result from './resources/components/Search_Result_Section/Search_Result';
import SingleCategory from './resources/components/Single_Category_Section/Single_Category';

function Category () {
  return (
    <div className='search_page'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent />

        {/* =========== SEARCH RESULT SECTION ========== */}
        <SingleCategory />
    </div>
  )
}

export default Category;