import '../src/resources/reset.css'
import './App.css';
import { LinkNavigationComponent } from './resources/components/Link_Navigation/Link-Navigation';
import Search_Result from './resources/components/Search_Result_Section/Search_Result';

function Catalogue () {
  return (
    <div className='catalogue'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        name={'Catalogue'}
        path={'/catalogue'}
        />

        {/* =========== SEARCH RESULT SECTION ========== */}
        <Search_Result text={'Explore our Catalogue'} />

    </div>
  )
}

export default Catalogue;