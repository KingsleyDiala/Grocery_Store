import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Vegetables } from '../../Data/data';
import SearchWidget from '../Widget/Search_Widget';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CategorySection from './Category_Section';
import { CategoryComponent } from '../Single_Components/Single_Components';
import { motion } from 'framer-motion'

//  ============== STYLED COMPONENT =================
const Category = styled.section`
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

const ContainerRight = styled(motion.div)`
display: flex;
flex-direction: column;
row-gap: 2rem;
flex: 2.7;
`;
const TopContainer = styled(motion.div)`
`;
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




// ============  PAGINATION COMPONENT ============

const items = Vegetables;
const itemsPerPage = 12;

export default function AllCategories ({ cart, setCart, wishlist, setWishlist }) {
  const params = useParams();
  
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
    <Category>
      <Container>
        <SearchWidget />
        <ContainerRight>
          <CategoryComponent />
          <TopContainer
            initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .1, duration: 1, type:'tween' }}
          >
            <Text>Explore these items</Text>
          </TopContainer>
          <CategorySection
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
    </Category>
  );
}