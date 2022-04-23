import '../src/resources/reset.css'
import './App.css';
import { LinkNavigationComponent } from './resources/components/Link_Navigation/Link-Navigation';
import WishlistSection from './resources/components/Wishlist/Wishlist_Section';

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