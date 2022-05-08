import styled from "styled-components"
import React, { useState } from "react"


// =================  STYLED COMPONENT  ========================


const ItemContainer = styled.div`
position: relative;
padding-bottom: 20px;
  flex: 1 1 auto;
  height: 457px;
  width: 193px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  border-radius: 10px;
  overflow: hidden;
  transition: all .5s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 10px 20px 3px rgba(0, 0, 0, .2);
    background-color: var(--light-accent-color);
    & a {
      display: block;
      transition: transform .2s ease;
    }
    & .image__container {
      border: 6px solid var(--light-accent-color);
    }
  }
  `
const ImageContainer = styled.div`
height: 280px;
width: 100%;
background-color: var(--light-color);
overflow: hidden;
border-bottom: 5px solid var(--accent-color);
border-radius: 10px;
border: 4px solid var(--light-grey-color);
display: grid;
place-content: center;
`
const Image = styled.img`
position: relative;
height: auto;
width: 100%;
`
const TextContainer = styled.div`
  padding: 0 1rem;
`
const ProductName = styled.a`
  line-height: 1.5rem;
  cursor: pointer;
  &:active {
    transform: scale(.9);
    transition: all .2s ease;
  }
  `
const ProductPrice = styled.p`
  color: var(--accent-color);
  font-weight: 700;
`
const Button = styled.a`
  display: grid;
  place-items: center;
  position: relative;
  width: 160px;
  height: 41px;
  margin-top: 2rem;
  cursor: pointer;
  color: var(--light-text-color);
  font-size: var(--button-text);
  font-weight: 600;
  text-align: center;
  line-height: 35px;
  transition: all .2s ease;
  &:active {
    transform: scale(.9);
  }
`





// ===================  JSX STRUCTURE  ================================


const FullCard = ({ item, wishlist, setWishlist }) => {

  const [name, setName] = useState('Add to Cart')

  // Add item to wishlist
  const addToWishlist = (item) => {
    setWishlist(prev => [...prev, item])
    setName('Added to Cart')

    setTimeout(() => {
      setWishlist('Add to Cart')
    }, 2000);
  }


  return (
    <ItemContainer key={item.key}>
              <ImageContainer className="image__container">
              <Image alt={item.alt} src={item.image} />
              </ImageContainer>
                  <TextContainer>
                  <ProductPrice className='price'>€4.32</ProductPrice>
                    <ProductName href='#' className='product__name'> {item.title.slice(0, 20)} </ProductName>
                    <Button onClick={() => addToWishlist(item)}className='green__button__white add-to-cart'> {name} </Button>
                  </TextContainer>
                </ItemContainer>
  )
}

export default FullCard;