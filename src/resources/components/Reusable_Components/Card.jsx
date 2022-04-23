import styled from "styled-components";
import React from 'react'

// STYLED COMPONENTS
const ItemContainer = styled.div`
  height: 457px;
  width: 192px;
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
      border: 5px solid var(--light-accent-color);
      transition: all .3s ease;
    }
  }
  `
const ImageContainer = styled.div`
  height: 280px;
  width: 100%;
  background-color: var(--light-color);
  position: relative;
  display: grid;
  place-content: center;
  overflow: hidden;
  border: 4px solid var(--light-grey-color);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  `
const ProductPrice = styled.p`
  color: var(--accent-color);
  font-weight: 700;
`
const Button = styled.a`
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
  display: none;
  &:active {
    transform: scale(.9);
  }
`







// JSX STRUCTURE

export const HalfCard = ({ key, src, alt, price, title }) => {
  return (
    <ItemContainer key={key}>
      <ImageContainer className="image__container">
        <Image alt={alt} src={src} />
      </ImageContainer >
          <TextContainer>
          <ProductPrice className='price'>€{price}</ProductPrice>
            <ProductName href='#' className='product__name'>{title}</ProductName>
            <Button href='#' className='green__button__white add-to-cart'> Add to Cart </Button>
          </TextContainer>
        </ItemContainer>
  )
}


