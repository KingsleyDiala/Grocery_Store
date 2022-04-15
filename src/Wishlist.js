import '../src/resources/reset.css'
import './App.css';
import { LinkNavigationComponent } from './resources/components/Link_Navigation/Link-Navigation';
import Search_Result from './resources/components/Search_Result_Section/Search_Result';
import WishlistSection from './resources/components/Search_Result_Section/Wishlist/Wishlist';

function Wishlist () {
  return (
    <div className='catalogue'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        name={'Wishlist'}
        path={'/wishlist'}
        />

        {/* =========== WISHLIST SECTION ========== */}
        <WishlistSection />

    </div>
  )
}

export default Wishlist;