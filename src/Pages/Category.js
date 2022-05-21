import '../resources/reset.css';
import '../App.css';
import { LinkNavigationComponent } from '../resources/components/Link_Navigation/Link-Navigation';
import { useParams } from 'react-router-dom';
import PaginatedItems from '../resources/components/Single_Category_Section/pagi_single_category';

function Category ({ setCart, setWishlist }) {
  // get the parameter from url
  const params = useParams();

  return (
    <div className='search_page'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        name={`Category > ${params.category}`}
        path={'/categories'}
        />

        {/* =========== SEARCH RESULT SECTION ========== */}
        <PaginatedItems setCart={setCart} setWishlist={setWishlist} />
    </div>
  )
}

export default Category;