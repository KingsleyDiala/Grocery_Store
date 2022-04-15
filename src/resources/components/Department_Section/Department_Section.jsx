// IMPORT MODULES
import React from 'react';
import styled from 'styled-components'
import { CategoryData } from '../../Data/data';

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
position: relative;
  width: 1260px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
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
  padding: 10px 0;
  width: auto;
  height: fit-content;
  overflow-x: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
  `
const ItemContainer = styled.div`
  flex: 1 1 auto;
  height: 250px;
  min-width: 192px;
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
  overflow: hidden;
  &:active {
    transform: scale(.9);
  }
  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 10px 20px 3px rgba(0, 0, 0, .2);
  }
`
const Image = styled.img`
width: 100%;
height: auto;
`
const TextContainer = styled.div`
`
const ProductName = styled.a`
  line-height: 1.5rem;
  cursor: pointer;
  font-weight: 700;
  font-size: var(--price-font);
  transition: all .2s ease;
  &:active {
    transform: scale(.9);
  }
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

          { CategoryData.map(item => {
            return (
              <ItemContainer key={item.id}>
      <ImageContainer>
        <Image alt={item.alt} src={item.url} />
      </ImageContainer>
          <TextContainer>
            <ProductName href='#' className='product__name'>{item.name}</ProductName>
          </TextContainer>
        </ItemContainer>
            )
          })}

        </BottomContainer>
      </FeaturedItemsContainer>
      </FeaturedItems>
  )
}


