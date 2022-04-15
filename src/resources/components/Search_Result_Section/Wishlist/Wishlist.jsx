import React from 'react'
import styled from 'styled-components';
import { images } from '../../../Data/data';
import SingleWishlistComponent from './Single_Card_Component';

// ================ STYLED COMPONENT  ==================
const Wishlist = styled.section`
position: relative;
width: 100%;
height: fit-content;
display: grid;
place-content: center;
top: 100px;
padding: 100px 0;
`;
const Container = styled.div`
width: 1232px;
height: fit-content;
`;
const Text = styled.h5`
margin-bottom: 2rem;
`;
const ItemContainer = styled.div`
width: 100%;
height: fit-content;
display: flex;
flex-direction: column;
row-gap: 1rem;
justify-content: center;
border-top: 1px solid rgba(35, 121, 67, .3);
border-left: 1px solid rgba(35, 121, 67, .3);
padding: 20px;
border-radius: 10px;
`;







// ==================== JSX STRUCTURE  ===============

const WishlistSection = () => {

  return (
    <Wishlist>
      <Container>
        <Text> Your Wishlist</Text>
        <ItemContainer>
          {images.map(item => {
            return (
              <SingleWishlistComponent />
            )
          })}
        </ItemContainer>
      </Container>
    </Wishlist>
  )
}

export default WishlistSection;
