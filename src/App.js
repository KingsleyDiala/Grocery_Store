import '../src/resources/reset.css'
import './App.css';
import { NavbarComponent } from './resources/components/Navbar/Navbar';
import { HeroComponent } from '../src/resources/components/Hero/Hero';
import { ShowcaseComponent } from './resources/components/Showcase/Showcase';
import { FeaturedItemsComponent} from './resources/components/Featured_Items/Featured_Items.jsx'
import { BestSellerSection } from './resources/components/Best_Sellers/BestSellers.jsx'


function App() {
  return (
    <div className="App">
      {/* =========== APP HEADER ============== */}
      <header className="App-header">
        { <NavbarComponent /> }
        </header>

        {/* =========== APP HERO ========== */}
      <section className='app-hero'>
      { <HeroComponent /> }
      </section>

         {/* =========== APP SHOWCASE ========== */}
      <section className='app-showcase'>
      { <ShowcaseComponent /> } 
      </section>

           {/* =========== APP FEATURED ITEMS ========== */}
        <section className='featured_items'>
          { <FeaturedItemsComponent />}
        </section>

          {/* =========== APP FEATURED ITEMS ========== */}
        { <BestSellerSection /> }

    </div>
  );
}

export default App;
