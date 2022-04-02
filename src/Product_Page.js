import '../src/resources/reset.css'
import './App.css';
import { NavbarComponent } from './resources/components/Navbar/Navbar';
import { DepartmentSection } from './resources/components/Department_Section/Department_Section';
import { TopFooterComponent } from './resources/components/Top_Footer/Footer';
import { BottomFooterComponent } from './resources/components/Bottom_Footer/Bottom_Footer';
import { LinkNavigationComponent } from './resources/components/Link_Navigation/Link-Navigaton';
import { ProductHeadComponent } from './resources/components/Product/Product_Head';


function Product_Page () {
  return (
    <div className='Product_Page'>
      {/* =========== APP HEADER ============== */}
      <header className="App-header">
        { <NavbarComponent /> }
        </header>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent />

        {/* =========== PRODUCT HEAD ============== */}
        <ProductHeadComponent />

        {/* =========== PRODUCT DESCRIPTION ============== */}


        {/* =========== RELATED ITEM ============== */}

        {/* =========== APP SHOP BY DEPARTMENT SECTION ========== */}
        { <DepartmentSection /> }

        {/* =========== APP TOP FOOTER SECTION ========== */}
        < TopFooterComponent />

        {/* =========== APP BOTTOM FOOTER SECTION ========== */}
        <BottomFooterComponent />
    </div>
  )
}

export default Product_Page;