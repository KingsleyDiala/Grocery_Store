import styled from "styled-components"
import React from "react"


// =================  STYLED COMPONENT  ========================


const ItemContainer = styled.div`
position: relative;
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
    & a {
      display: block;
      transition: transform .2s ease;
    }
  }
  `
const ImageContainer = styled.div`
height: 280px;
width: 100%;
background-color: var(--dark-grey-color);
overflow: hidden;
border-bottom: 5px solid var(--accent-color);
border-radius: 10px;
`
const Image = styled.img`
position: relative;
height: 100%;
width: auto;
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


const FullCard = ({ key, src, alt, price, title }) => {
  return (
    <ItemContainer key={key}>
              <ImageContainer>
              <Image alt={alt} src={src} />
              </ImageContainer>
                  <TextContainer>
                  <ProductPrice className='price'>€{price}</ProductPrice>
                    <ProductName href='#' className='product__name'> {title} </ProductName>
                    <Button href='#' className='green__button__white add-to-cart'> Add to Cart </Button>
                  </TextContainer>
                </ItemContainer>
  )
}

export default FullCard;