import '../src/resources/reset.css'
import './App.css';
import { NavbarComponent } from './resources/components/Navbar/Navbar';
import { DepartmentSection } from './resources/components/Department_Section/Department_Section';
import { TopFooterComponent } from './resources/components/Top_Footer/Footer';
import { BottomFooterComponent } from './resources/components/Bottom_Footer/Bottom_Footer';
import { LinkNavigationComponent } from './resources/components/Link_Navigation/Link-Navigation';
import Search_Result from './resources/components/Search_Result_Section/Search_Result';

function Search_Page () {
  return (
    <div className='search_page'>
      {/* =========== APP HEADER ============== */}
      <header className="App-header">
        { <NavbarComponent /> }
        </header>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent />

        {/* =========== SEARCH RESULT SECTION ========== */}
        <Search_Result />

        {/* =========== APP TOP FOOTER SECTION ========== */}
        < TopFooterComponent />

        {/* =========== APP BOTTOM FOOTER SECTION ========== */}
        <BottomFooterComponent />
    </div>
  )
}

export default Search_Page;