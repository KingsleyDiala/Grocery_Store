import styled from "styled-components";
import { useState } from 'react'
import * as React from 'react';
import { ListItem, Skeleton } from "@mui/material";



// ============== STYLED COMPONENT ==============
const ProductHead = styled.section`
padding: 100px 0;
position: relative;
top: 100px;
width: 100%;
height: fit-content;
display: grid;
place-content: center;
`
const Container = styled.div`
width: 1232px;
height: 550px;
display: flex;
align-items: center;
justify-content: space-between;
`
const LeftContainer = styled.div`
width: 500px;
height: 100%;
background-color: var(--light-grey-color);
border-radius: 10px;
box-shadow: 5px 5px 15px 3px rgba(0, 0, 0, .2);
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`
const Image = styled.img`
width: auto;
height: 100%;

`
const RightContainer = styled.div`
width: 608px;
display: flex;
flex-direction: column;
`
const ProductName = styled.h3`
font-weight: 600;
margin-bottom: 1rem;
font-size: 35px;
`
const ProductPrice = styled.div`
margin-bottom: 2rem;
`
const Price = styled.h4`
color: var(--accent-color);
`
const BrandContainer = styled.div`
font-size: 20px;
font-weight: 700;
display: flex;
align-items: center;
`
const Brand = styled.p `
font-weight: 500;
margin-left: .5rem;
`
const HorizontalLine = styled.hr`
margin-bottom: 3rem;
margin-top: 1.5rem;
opacity: .5;
`
const QuantityContainer = styled.div`
display: flex;
column-gap: 1rem;
align-items: center;
justify-content: space-around;
width: 180px;
height: 62px;
padding: 1rem;
background-color: var(--light-accent-color);
border-radius: 10px;
margin-bottom: 3rem;
& i {
  font-size: 20px;
}
`
const Decrement = styled.div`
background-color: var(--light-grey-color);
height: 40px;
width: 40px;
display: grid;
place-items: center;
border-radius: 5px;
cursor: pointer;
&:hover {
  transform: scale(1.05);
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, .1);
}
`
const Quantity = styled.p`
font-weight: 600;
font-size: 20px;
`
const Increment = styled.div`
background-color: var(--accent-color);
height: 40px;
width: 40px;
display: grid;
place-items: center;
border-radius: 5px;
cursor: pointer;
transition: all .2s ease;
color: var(--light-color);
&:hover {
  transform: scale(1.05);
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, .1);
}
`
const AddToCart = styled.a`
display: grid;
place-items: center;
width: 100%;
height: 60px;
color: var(--light-color);
font-size: var(--normal-text);
font-weight: 600;
`
const Save = styled.a`
font-size: var(--normal-text);
font-weight: 600;
display: grid;
place-items: center;
width: 100%;
height: 60px;
`







// =============== JSX STRUCTURE COMPONENT  =============
export const ProductHeadComponent = ({ setCart, setWishlist, product }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prev => prev + 1)
  }
  
  // Decrement Quantity
  const decrement = () => {
    setQuantity(prev => {
      if (prev === 1) {
        return prev
      }
      return prev - 1;
    })
  }

  return (
    <ProductHead>
      <Container>
        <LeftContainer>
          { product.image ? <Image src={product.image} alt={product.name} /> : <Skeleton variant="rect" width={500} height={600} /> }
        </LeftContainer>
        <RightContainer>
          <ProductName>{product.title}</ProductName>
          <ProductPrice>
            <Price>€{product.price}</Price>
          </ProductPrice>
          <BrandContainer> Brand: 
          <Brand> {product.brand} </Brand>
          </BrandContainer>
          <HorizontalLine></HorizontalLine>
          <QuantityContainer>
            <Decrement onClick={decrement}><i class="uil uil-minus"></i></Decrement>
            <Quantity>{quantity}</Quantity>
            <Increment onClick={increment}><i class="uil uil-plus"></i></Increment>
          </QuantityContainer>
          <AddToCart href="#" className='green__button'>Add to Cart</AddToCart>
          <br />
          <Save href="#" className='white__button'>Save</Save>
        </RightContainer>
      </Container>
    </ProductHead>
  )
};