import '../src/resources/reset.css'
import './App.css';
import { LinkNavigationComponent } from './resources/components/Link_Navigation/Link-Navigation';
import Search_Result from './resources/components/Search_Result_Section/Search_Result';
import SingleCategory from './resources/components/Single_Category_Section/Single_Category';
import { useParams } from 'react-router-dom';

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
        <SingleCategory setCart={setCart} setWishlist={setWishlist} />
    </div>
  )
}

export default Category;