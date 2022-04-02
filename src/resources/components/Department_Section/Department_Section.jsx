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
  height: 326px;
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
const ItemContainer = styled.div`
  height: 250px;
  width: 192px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  border-radius: 10px;
  padding: 0 10px;
  text-align: center;
  `
const ImageContainer = styled.div`
  height: 170px;
  width: 100%;
  background-color: var(--dark-grey-color);
  border-radius: 50%;
  transition: all .5s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 10px 20px 3px rgba(0, 0, 0, .2);
  }
`
const TextContainer = styled.div`
`
const ProductName = styled.a`
  line-height: 1.5rem;
  cursor: pointer;
  font-weight: 700;
  font-size: var(--price-font);
  transition: all .2s ease;
  &:hover {
    color: var(--accent-color);
  }
  `




// ============ JSX COMPONENT =========

export const DepartmentSection = () => {

  return (
    <FeaturedItems>
      <FeaturedItemsContainer>

        {/* ======= TOP CONTAINER ========= */}
        <TopContainer>
          <h4> Shop By Department </h4>
          <a href='#'>
            Show All Department <i class="uil uil-angle-right-b"></i>
            </a>
        </TopContainer>

        {/* ========= BOTTOM CONTAINER ========= */}
        <BottomContainer>

          {/* ITEM 1 */}
        <ItemContainer>
      <ImageContainer></ImageContainer>
          <TextContainer>
            <ProductName href='#' className='product__name'>New Arrivals</ProductName>
          </TextContainer>
        </ItemContainer>

        {/* ITEM 2 */}
        <ItemContainer>
      <ImageContainer></ImageContainer>
          <TextContainer>
            <ProductName href='#' className='product__name'>Dairy & MIlk</ProductName>
            <a href='#'>
            </a>
          </TextContainer>
        </ItemContainer>

        {/* ITEM 3 */}
        <ItemContainer>
      <ImageContainer></ImageContainer>
          <TextContainer>
            <ProductName href='#' className='product__name'>Fresh Produce</ProductName>
            <a href='#'>
            </a>
          </TextContainer>
        </ItemContainer>

        {/* ITEM 4 */}
        <ItemContainer>
      <ImageContainer></ImageContainer>
          <TextContainer>
            <ProductName href='#' className='product__name'>Snacks</ProductName>
            <a href='#'>
            </a>
          </TextContainer>
        </ItemContainer>

        {/* ITEM 5 */}
        <ItemContainer>
      <ImageContainer></ImageContainer>
          <TextContainer>
            <ProductName href='#' className='product__name'>Frozen</ProductName>
            <a href='#'>
            </a>
          </TextContainer>
        </ItemContainer>

        {/* ITEM 6 */}
        <ItemContainer>
      <ImageContainer></ImageContainer>
          <TextContainer>
            <ProductName href='#' className='product__name'>Cavendish Banana</ProductName>
            <a href='#'>
            </a>
          </TextContainer>
        </ItemContainer>


        </BottomContainer>
      </FeaturedItemsContainer>
      </FeaturedItems>
  )
}


