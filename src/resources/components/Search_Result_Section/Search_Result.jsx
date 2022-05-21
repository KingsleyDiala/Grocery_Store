
import React from 'react';
import styled from 'styled-components'
import FullCard from '../Reusable_Components/Full_Card';


// =====================  STYLED COMPONENT  ========================


const MiddleContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
column-gap: 1rem;
row-gap: 2rem;
padding-bottom: 2rem;
`;



// =====================  JSX COMPONENT  ========================


const SearchResultContainer = ({  currentItems, cart, setCart, wishlist, setWishlist }) => {

  // check if product is in cart
const checkIfInCart = (product) => {
  if (cart.includes(product)) {
    return true
  } else {
    return false
  }
}

  return (
          <MiddleContainer>
            {currentItems &&
              currentItems.map((item, index) => {
                return (
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
  )
}

export default SearchResultContainer;