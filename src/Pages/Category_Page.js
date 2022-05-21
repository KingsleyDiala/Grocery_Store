import '../resources/reset.css';
import '../App.css';
import { LinkNavigationComponent } from '../resources/components/Link_Navigation/Link-Navigation';
import AllCategories from '../resources/components/Category_Section/Paginantion_Categ_sec';

function CategoryPage ({ setCart, setWishlist }) {
  return (
    <div className='category_page'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        name={'Category'} 
        path={'/category'}
        />

        {/* =========== SEARCH RESULT SECTION ========== */}
        <AllCategories setCart={setCart} setWishlist={setWishlist} />
    </div>
  )
}

export default CategoryPage;