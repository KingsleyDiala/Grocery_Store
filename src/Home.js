import '../src/resources/reset.css'
import './App.css';
import { NavbarComponent } from './resources/components/Navbar/Navbar';
import { HeroComponent } from './resources/components/Hero/Hero';
import { ShowcaseComponent } from './resources/components/Showcase/Showcase';
import { FeaturedItemsComponent} from './resources/components/Featured_Items/Featured_Items.jsx'
import { BestSellerSection } from './resources/components/Best_Sellers/BestSellers.jsx'
import { FreshVegetableComponent} from './resources/components/Fresh_Vegetable_Section/Fresh_Vegetabe';
import { DiaryAndMilkComponent } from './resources/components/Diary_and_Milk/Diary_and_Milk';
import { DepartmentSection } from './resources/components/Department_Section/Department_Section';
import { TopFooterComponent } from './resources/components/Top_Footer/Footer';
import { BottomFooterComponent } from './resources/components/Bottom_Footer/Bottom_Footer';


function Home() {
  return (
    <div className="Home">
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

          {/* =========== APP BEST SELLER SECTION ========== */}
        { <BestSellerSection /> }

          {/* =========== APP FRESH VEGETABLES SECTION ========== */}
        { <FreshVegetableComponent /> }

        {/* =========== APP DIARY & MILK SECTION ========== */}
        { <DiaryAndMilkComponent /> }

        {/* =========== APP Shop By Department SECTION ========== */}
        { <DepartmentSection /> }

        {/* =========== APP Top Footer SECTION ========== */}
        < TopFooterComponent />

        {/* =========== APP BOTTOM FOOTER SECTION ========== */}
        <BottomFooterComponent />

    </div>
  );
}

export default Home;