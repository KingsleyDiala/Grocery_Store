import styled from "styled-components";
import { useState } from 'react'
import * as React from 'react';
import { Divider, ListItem, Skeleton } from "@mui/material";
import { motion } from 'framer-motion'



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
const LeftContainer = styled(motion.div)`
width: 500px;
height: 100%;
background-color: var(--light-color);
box-shadow: 5px 5px 15px 3px rgba(0, 0, 0, .1);
border-radius: 10px;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
transition: .5s all ease;
&:hover {
  box-shadow: 5px 5px 15px 3px rgba(0, 0, 0, .2);
}
`
const Image = styled.img`
width: auto;
height: 100%;
transition: .5s transform ease;
&:hover {
  transform: scale(1.05);
}
`
const RightContainer = styled(motion.div)`
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
const ProductInfoContainer = styled.div`
font-size: 20px;
font-weight: 700;
display: flex;
align-items: center;
`
const Brand = styled.p `
font-weight: 500;
margin-left: .5rem;
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
margin-bottom: 1rem;
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

  // Add to Cart
  const addToCart = () => {
    setCart(prev => {
      if (prev.includes(product)) {
        return prev;
      } else {
        return [...prev, product]
      }
    })
  }

  // Save to wishlist
  const addToWishlist = () => {
    setWishlist(prev => {
      if (prev.includes(product)) {
        return prev;
      } else {
        return [...prev, product];
      }
    })
  };


  return (
    <ProductHead key={product.id}>
      <Container>
        <LeftContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: .1, duration: 1, type:'tween' }}
        >
          { product.image ? <Image src={product.image} alt={product.name} /> : <Skeleton animation='wave' variant="rect" width={500} height={600} /> }
        </LeftContainer>
        <RightContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: .5, duration: 1, type:'tween' }}
        >
            { product ? <ProductName>{product.title}</ProductName> : <Skeleton width='80%' height={60} animation='wave' />}
            <ProductPrice>
              { product ? <Price>€{product.price}</Price> : <Skeleton animation='wave' height={60} width='20%' /> }
            </ProductPrice>
            <Divider sx={{ width: '100%', marginBottom: 1.5}} />
            <ProductInfoContainer> Brand: 
              { product ? <Brand> {product.brand} </Brand> : <Skeleton animation='wave' width='30%' height={40} sx={{ marginLeft: 1}} />}
            </ProductInfoContainer>
            <ProductInfoContainer> Aisle: 
              { product ? <Brand> {product.aisle} </Brand> : <Skeleton animation='wave' width='30%' height={40} sx={{ marginLeft: 1}} /> }
            </ProductInfoContainer>
            <Divider sx={{ width: '100%', marginTop: 1.5, marginBottom: 3}} />
            { product ? <QuantityContainer>
              <Decrement onClick={decrement}><i class="uil uil-minus"></i></Decrement>
            <Quantity>{quantity}</Quantity>
              <Increment onClick={increment}><i class="uil uil-plus"></i></Increment>
            </QuantityContainer> : <Skeleton animation='wave' sx={{ marginBottom: 4, width:'30%', height: 90 }} /> }
            { product ? <AddToCart onClick={addToCart} className='green__button'>Add to Cart</AddToCart> : <Skeleton animation='wave' height={80} />}
            { product ? <Save onClick={addToWishlist} className='white__button'>Save to Wishlist</Save> : <Skeleton animation='wave' height={80} />}
        </RightContainer>
      </Container>
    </ProductHead>
  )
};