import { useState, useEffect } from 'react';
import '../src/resources/reset.css'
import './App.css';
import { HeroComponent } from './resources/components/Hero/Hero';
import { ShowcaseComponent } from './resources/components/Showcase/Showcase';
import { FeaturedItemsComponent} from './resources/components/Featured_Items/Featured_Items.jsx'
import { BestSellerSection } from './resources/components/Best_Sellers/BestSellers.jsx'
import { FreshVegetableComponent} from './resources/components/Fresh_Vegetable_Section/Fresh_Vegetable';
import { DiaryAndMilkComponent } from './resources/components/Diary_and_Milk/Diary_and_Milk';
import { DepartmentSection } from './resources/components/Department_Section/Department_Section';


function Home({ wishlist, setWishlist }) {

  const apiKey = '75351bfa2a8944ad9366abcbb4a6a8c4';
  const number = '50';
  const query = 'best';
  const filterMapping = 'searchResults';


  const [groceries, setGroceries] = useState([]);

  // useEffect( () => {
  //   getItems();
  // },[])


  // const getItems = async () => {

  //   const items = await fetch(`https://api.spoonacular.com/food/products/search?apiKey=${number}&query=${query}&number=${number}`)

  //   const response = await items.json().catch(err => console.error(err));
  
  //   setGroceries(response)
  // }



  return (
    <div className="Home">
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
          { <FeaturedItemsComponent wishlist={wishlist} setWishlist={setWishlist} />}
        </section>

          {/* =========== APP BEST SELLER SECTION ========== */}
        { <BestSellerSection /> }

          {/* =========== APP FRESH VEGETABLES SECTION ========== */}
        { <FreshVegetableComponent /> }

        {/* =========== APP DIARY & MILK SECTION ========== */}
        { <DiaryAndMilkComponent items={groceries} /> }

        {/* =========== APP Shop By Department SECTION ========== */}
        { <DepartmentSection /> }

    </div>
  );
}

export default Home;
