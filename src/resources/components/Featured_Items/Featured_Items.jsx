// IMPORT MODULES
import React from 'react';
import styled from 'styled-components'

// ==========  STYLED COMPONENT  ============
const FeaturedItems = styled.div`
  position: relative;
  top: 100px;
  width: 100%;
  height: fit-content;
  padding: 100px 10%;
  display: grid;
  place-content: center;
  overflow: hidden;
  ` 
const FeaturedItemsContainer = styled.div`
  width: 1260px;
  height: 526px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  `
const TopContainer = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & a {
    color: var(--dark-text-color);
    transition: transform color 1s ease;
  }
  & a:hover {
    color: var(--accent-color);
    transform: scale(1.04);
  }
  `
const BottomContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  `
const ArrowRight = styled.div`
  height: 56px;
  width: 56px;
  color: var(--light-color);
  position: absolute;
  bottom: 55%;
  right: -15px;
  display: grid;
  place-items: center;
  font-size: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--accent-color);
  cursor: pointer;
  z-index: 1;
  transition: all .2s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, .2);
  }
`
const ArrowLeft = styled.div`
  height: 56px;
  width: 56px;
  color: var(--light-color);
  position: absolute;
  bottom: 55%;
  left: -15px;
  display: grid;
  place-items: center;
  font-size: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--accent-color);
  cursor: pointer;
  z-index: 1;
  transition: all .2s ease;
    &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, .2);
  }
`
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
display: none;
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
`




// ============ JSX COMPONENT =========

export const FeaturedItemsComponent = () => {

  return (
    <FeaturedItems>
      <FeaturedItemsContainer>

        {/* ======= TOP CONTAINER ========= */}
        <TopContainer>
          <h4> Featured Items </h4>
          <a href='#'>
            Show All <i class="uil uil-angle-right-b"></i>
            </a>
        </TopContainer>

        {/* ========= BOTTOM CONTAINER ========= */}
        <BottomContainer>

          {/* ARROW RIGHT AND LEFT */}
          <ArrowRight> <i class="uil uil-angle-right-b"></i> </ArrowRight>
          <ArrowLeft><i class="uil uil-angle-left"></i></ArrowLeft>

          {/* ITEM 1 */}
        <ItemContainer>
      <ImageContainer></ImageContainer>
          <TextContainer>
          <ProductPrice className='price'>€4.06</ProductPrice>
            <ProductName href='#' className='product__name'>Cavendish Banana</ProductName>
            <Button href='#' className='green__button__white add-to-cart'> Add to Cart </Button>
          </TextContainer>
        </ItemContainer>

        {/* ITEM 2 */}
        <ItemContainer>
      <ImageContainer></ImageContainer>
          <TextContainer>
          <ProductPrice className='price'>€4.06</ProductPrice>
            <ProductName href='#' className='product__name'>Cavendish Banana</ProductName>
            <a href='#'>
              <Button className='green__button__white add-to-cart'> Add to Cart</Button>
            </a>
          </TextContainer>
        </ItemContainer>

        {/* ITEM 3 */}
        <ItemContainer>
      <ImageContainer></ImageContainer>
          <TextContainer>
          <ProductPrice className='price'>€4.06</ProductPrice>
            <ProductName href='#' className='product__name'>Cavendish Banana</ProductName>
            <a href='#'>
              <Button className='green__button__white add-to-cart'> Add to Cart</Button>
            </a>
          </TextContainer>
        </ItemContainer>

        {/* ITEM 4 */}
        <ItemContainer>
      <ImageContainer></ImageContainer>
          <TextContainer>
          <ProductPrice className='price'>€4.06</ProductPrice>
            <ProductName href='#' className='product__name'>Cavendish Banana</ProductName>
            <a href='#'>
              <Button className='green__button__white add-to-cart'> Add to Cart</Button>
            </a>
          </TextContainer>
        </ItemContainer>

        {/* ITEM 5 */}
        <ItemContainer>
      <ImageContainer></ImageContainer>
          <TextContainer>
          <ProductPrice className='price'>€4.06</ProductPrice>
            <ProductName href='#' className='product__name'>Cavendish Banana</ProductName>
            <a href='#'>
              <Button className='green__button__white add-to-cart'> Add to Cart</Button>
            </a>
          </TextContainer>
        </ItemContainer>

        {/* ITEM 6 */}
        <ItemContainer>
      <ImageContainer></ImageContainer>
          <TextContainer>
          <ProductPrice className='price'>€4.06</ProductPrice>
            <ProductName href='#' className='product__name'>Cavendish Banana</ProductName>
            <a href='#'>
              <Button className='green__button__white add-to-cart'> Add to Cart</Button>
            </a>
          </TextContainer>
        </ItemContainer>


        </BottomContainer>
      </FeaturedItemsContainer>
      </FeaturedItems>
  )
}

