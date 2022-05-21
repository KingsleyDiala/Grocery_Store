import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Vegetables } from '../../Data/data';
import Widget_2 from '../Widget/Widget_2';
import { useParams } from 'react-router-dom';
import SingleCategory from './Single_Category';
import styled from 'styled-components';

//  ============== STYLED COMPONENT =================
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
const Number = styled.div`
display: grid;
place-content: center;
width: 30px;
height: 30px;
border-radius: 3px;
cursor: pointer;
&:hover {
  color: var(--light-color);
  background-color: var(--accent-color);
}
`;





// ============  PAGINATION COMPONENT ============

const itemsPerPage = 12;

export default function PaginatedItems({ products, setProducts, cart, setCart, wishlist, setWishlist }) {
  const params = useParams();
  const items = products;
  
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
  }, [itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <SearchResult>
      <Container>
        <Widget_2 />
        <ContainerRight>
          <TopContainer>
            <Text>Our {params.category} Catalogue </Text>
          </TopContainer>
          <SingleCategory
            currentItems={currentItems}
            wishlist={wishlist}
            setWishlist={setWishlist}
            cart={cart}
            setCart={setCart}
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
              </PageNumContainer>
          </BottomContainer>
        </ContainerRight>
      </Container>
    </SearchResult>
  );
}