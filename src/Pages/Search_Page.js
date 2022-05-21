import '../resources/reset.css';
import '../App.css';
import { LinkNavigationComponent } from '../resources/components/Link_Navigation/Link-Navigation';
import Search_Result from '../resources/components/Search_Result_Section/Search_Result';

function SearchPage () {
  return (
    <div className='search_page'>

        {/* =========== LINK NAVIGATION SECTION ========== */}
        <LinkNavigationComponent
        path={'/search'}
        name={'Search'} />

        {/* =========== SEARCH RESULT SECTION ========== */}
        <Search_Result text={'Result for ‘’Apple’’ (34 Result)'} />

    </div>
  )
}

export default SearchPage;