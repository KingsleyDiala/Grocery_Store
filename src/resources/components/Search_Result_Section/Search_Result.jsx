import data, { Vegetables } from '../../Data/data'
import * as React from 'react';
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import styled from 'styled-components'
import SearchWidget from '../Widget/Search_Widget';
import FullCard from '../Reusable_Components/Full_Card';


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
const MiddleContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
column-gap: 1rem;
row-gap: 2rem;
padding-bottom: 2rem;
`;

const BottomContainer = styled.div`
display: flex;
align-items: center;
`;
const PageNumContainer = styled.div`
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
`;

const Number = styled.div`
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
`;



// =====================  JSX COMPONENT  ========================


const SearchResultContainer = ({ cart, setCart, wishlist, setWishlist, text }) => {

  // check if product is in cart
const checkIfInCart = (product) => {
  if (cart.includes(product)) {
    return true
  } else {
    return false
  }
}

  return (
    <SearchResult>
      <Container>
        <SearchWidget />
        <ContainerRight>
          <TopContainer>
            <Text>{text}</Text>
          </TopContainer>
          <MiddleContainer>
            { Vegetables.slice(26).map((item, index) => { return (
              <FullCard
              key={index}
              checkIfInCart={checkIfInCart}
              cart={cart}
              setCart={setCart}
              wishlist={wishlist}
              setWishlist={setWishlist}
              item={item}
              />
            )})}
          </MiddleContainer>
          <BottomContainer>
            <PageNumContainer>
            <i class="uil uil-angle-left"></i>
            <Number>1</Number>
            <Number>2</Number>
            <Number>3</Number>
            <Number>4</Number>
            <Number>5</Number>
            <i class="uil uil-angle-right"></i>
            </PageNumContainer>
          </BottomContainer>
        </ContainerRight>
      </Container>
    </SearchResult>
  )
}

export default SearchResultContainer;