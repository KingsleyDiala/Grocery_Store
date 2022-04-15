import '../src/resources/reset.css'
import './App.css';
import { DepartmentSection } from './resources/components/Department_Section/Department_Section';
import { LinkNavigationComponent } from './resources/components/Link_Navigation/Link-Navigation';
import { ProductHeadComponent } from './resources/components/Product/Product_Head';
import { ProductDescriptionComponent } from './resources/components/Product/Product_Desc';
import { RelatedItemsComponent } from './resources/components/Related_Items/Related_Items_Section';

function ProductPage () {
  return (
    <div className='Product_Page'>
        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        name={'Product'}
        path={'/product'}
        />

        {/* =========== PRODUCT HEAD ============== */}
        <ProductHeadComponent />

        {/* =========== PRODUCT DESCRIPTION ============== */}
        <ProductDescriptionComponent />

        {/* =========== RELATED ITEMS ============== */}
        <RelatedItemsComponent />

        {/* =========== APP SHOP BY DEPARTMENT SECTION ========== */}
        { <DepartmentSection /> }
    </div>
  )
}

export default ProductPage;