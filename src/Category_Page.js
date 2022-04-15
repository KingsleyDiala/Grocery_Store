import '../src/resources/reset.css'
import './App.css';
import { LinkNavigationComponent } from './resources/components/Link_Navigation/Link-Navigation';
import CategorySection from './resources/components/Category_Section/Category_Section';

function CategoryPage () {
  return (
    <div className='category_page'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        name={'Category'} 
        path={'/category'}
        />

        {/* =========== SEARCH RESULT SECTION ========== */}
        <CategorySection />
    </div>
  )
}

export default CategoryPage;