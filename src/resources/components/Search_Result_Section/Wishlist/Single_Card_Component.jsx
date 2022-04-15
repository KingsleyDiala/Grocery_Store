import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';


//  =============== STYLED COMPONENTS =============
const Item = styled.div`
padding: 10px;
width: 700px;
height: 140px;
border: 1px solid rgba(35, 121, 67, .5);
border-radius: 10px;
display: flex;
column-gap: 2rem;
align-items: center;
padding: 5px;
transition: all .2s ease;
&:hover {
  background-color: var(--light-accent-color);
}
`;
const ImageContainer = styled.div`
height: 130px;
width: 110px;
background-color: var(--light-grey-color);
border-radius: 5px;
overflow: hidden;
`;
const Image = styled.img`
width: 100%;
height: auto;
`;
const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
row-gap: 10px;
`;
const ProductName = styled.p`
font-size: 18px;
font-weight: 600;
`;
const ProductPrice = styled.p`
color: var(--accent-color);
font-weight: 700;
font-size: 16px;
margin-left: 3px;
`;
const ButtonContainer =styled.div`
display: flex;
column-gap: 1rem;
`
const AddToCart = styled.button`
width: 130px;
height: 35px;
`;
const Remove =styled.button`
width: 130px;
height: 35px;
color: var(--light-color);
transition: color .3s ease;
font-weight: 500;
&:hover {
  color: rgba(235, 88, 88, 1);
  background-color: rgba(235, 88, 88, .8);
  transform: scale(1);
  border: 1px solid rgba(235, 88, 88, 1);
}
`




// ============= JSX STRUCTURE ==================

const SingleWishlistComponent = (title, price, image) => {
  return (
    <Item>
            <ImageContainer>
              <Image />
            </ImageContainer>
            <DetailsContainer>
              <ProductName> Chiitos Crunch Chocolate Chips </ProductName>
              <ProductPrice> €6.67 </ProductPrice>
              <ButtonContainer>
                <AddToCart className='white__button__green'>Add to Cart</AddToCart>
                <Remove className='green__button__white'>Remove</Remove>
              </ButtonContainer>
            </DetailsContainer>
          </Item>
  )
}

SingleWishlistComponent.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
}

export default SingleWishlistComponent