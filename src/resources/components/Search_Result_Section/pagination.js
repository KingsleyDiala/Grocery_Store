import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Vegetables } from '../../Data/data';
import SearchResultContainer from './Search_Result';
import styled from 'styled-components';
import SearchWidget from '../Widget/Search_Widget';



// =====================  STYLED COMPONENT  ========================

const SearchResult = styled.section`
width: 100%;
height: fit-content;
top: 100px;
position: relative;
display: grid;
place-content: center;
padding: 100px 0;
`;
const Container = styled.div`
height: fit-content;
width: 1232px;
display: flex;
column-gap: 1rem;
`;

const ContainerRight = styled.div`
display: flex;
flex-direction: column;
row-gap: 2rem;
flex: 2.7;
`;
const TopContainer = styled.div``;
const Text = styled.h5``;
const BottomContainer = styled.div`
display: flex;
align-items: center;
`;

const PageNumContainer = styled.div`
& .number__container {
display: flex;
align-items: center;
column-gap: .5rem;
& i {
font-size: 25px;
color: var(--accent-color);
display: grid;
place-content: center;
width: 30px;
height: 30px;
border-radius: 3px;
cursor: pointer;
transition: all .2s ease;
&:hover {
  color: var(--light-color);
  background-color: var(--accent-color);
}
&:active {
  transform: scale(.9);
}
}
}

// ========   NUMBER  ========
& .number {
  display: grid;
  place-content: center;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  cursor: pointer;
  transition: all .2s ease;
  &:hover {
    color: var(--light-color);
    background-color: var(--accent-color);
  }
  &:active {
    transform: scale(.9);
  }
  }

  // ============ ACTIVE LINK ========
  & .active__link {
    height: 30px;
    width: 30px;
    background-color: var(--accent-color);
    color: var(--light-color);
  }

`;





//  ==================  JAVASCRIPT LOGIC  =================


// passing vegetable as a variable of items
const items = Vegetables;
const itemsPerPage = 12

function PaginatedItems({ text, cart, setCart, wishlist, setWishlist }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <SearchResult>
      <Container>
        <SearchWidget />
        <ContainerRight>
          <TopContainer>
            <Text>{text}</Text>
          </TopContainer>
          <SearchResultContainer
            currentItems={currentItems}
            cart={cart}
            setCart={setCart}
            wishlist={wishlist}
            setWishlist={setWishlist}
          />
          <BottomContainer>
            <PageNumContainer>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<i class="uil uil-angle-right"></i>}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<i class="uil uil-angle-left"></i>}
                renderOnZeroPageCount={null}
                containerClassName='number__container'
                pageLinkClassName='number'
                activeLinkClassName='active__link'
          />
            {/* <i class="uil uil-angle-left"></i>
            <Number>1</Number>
            <Number>2</Number>
            <Number>3</Number>
            <Number>4</Number>
            <Number>5</Number>
            <i class="uil uil-angle-right"></i> */}
            </PageNumContainer>
          </BottomContainer>
        </ContainerRight>
      </Container>
    </SearchResult>
  );
}

export default PaginatedItems;