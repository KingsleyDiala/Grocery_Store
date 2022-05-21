import '../src/resources/reset.css'
import './App.css';
import { LinkNavigationComponent } from './resources/components/Link_Navigation/Link-Navigation';
import PaginatedItems from './resources/components/Search_Result_Section/pagination';


function Catalogue ({ cart, setCart, wishlist, setWishlist }) {
  return (
    <div className='catalogue'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        name={'Catalogue'}
        path={'/catalogue'}
        />

        {/* =========== SEARCH RESULT SECTION ========== */}
        <PaginatedItems cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} text={'Explore our Catalogue'} />

    </div>
  )
}

export default Catalogue;