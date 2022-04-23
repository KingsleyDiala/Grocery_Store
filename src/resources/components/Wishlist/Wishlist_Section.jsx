import React from 'react'
import styled from 'styled-components';
import { Vegetables } from '../../Data/data'
import SingleCardComponent from './Single_Card_Component';

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
row-gap: 1.5rem;
justify-content: center;
border-top: 1px solid rgba(35, 121, 67, .3);
border-left: 1px solid rgba(35, 121, 67, .3);
padding: 20px;
border-radius: 10px;
`;
const Button = styled.button`
margin-top: 50px;
margin-left: 20px;
width: 300px;

`







// ==================== JSX STRUCTURE  ===============

const WishlistSection = () => {

  return (
    <Wishlist>
      <Container>
        <Text> Your Wishlist</Text>
        <ItemContainer>
          {Vegetables.slice(17, 24).map(item => {
            return (
              <SingleCardComponent
              image={item.image}
              title={item.title.slice(0, 50)}
              price='6.67'
              />
            )
          })}
        </ItemContainer>
      </Container>
      <Button className='white__button__green' >Go to Cart</Button>
    </Wishlist>
  )
}

export default WishlistSection;
