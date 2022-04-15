// IMPORT MODULES
import React from 'react';
import styled from 'styled-components'
import { StyleSheetConsumer } from 'styled-components';
import '../../containers/Product_Carousel/Product_Carousel'
import data from '../../Data/data';
import FullCard from '../Reusable_Components/Full_Card';

// ==========  STYLED COMPONENT  ============
const RelatedItems = styled.div`
  position: relative;
  top: 100px;
  width: 100%;
  height: fit-content;
  padding: 100px 10%;
  display: grid;
  place-content: center;
  ` 
const RelatedItemsContainer = styled.div`
  position: relative;
  width: 1260px;
  height: fit-content;
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
  height: fit-content;
  width: auto;
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  column-gap: 1rem;
  overflow-x: auto;
  border-radius: 10px;
  padding: 40px 0;
  &::-webkit-scrollbar {
    display: none;
  }
  `
const ArrowRight = styled.div`
  flex: 1;
  height: 56px;
  width: 56px;
  color: var(--light-color);
  position: absolute;
  bottom: 50%;
  right: -1.5rem;
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
  left: -1.5rem;
  bottom: 50%;
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
  flex: 1 1 auto;
  height: 457px;
  min-width: 16%;
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
  overflow: hidden;
  position: relative;
  height: 280px;
  width: 100%;
  background-color: var(--dark-grey-color);
`
const Image = styled.img`
position: relative;
width: auto;
height: 100%;
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
`




// ============ JSX COMPONENT =========

export const RelatedItemsComponent = () => {


  return (
    <RelatedItems>
      <RelatedItemsContainer>

          {/* ARROW RIGHT AND LEFT */}
          <ArrowRight> <i class="uil uil-angle-right-b"></i> </ArrowRight>
          <ArrowLeft className='arrow__left'><i class="uil uil-angle-left"></i></ArrowLeft>

        {/* ======= TOP CONTAINER ========= */}
        <TopContainer>
          <h4> Related Items </h4>
          <a href='#'>
            Show All <i class="uil uil-angle-right-b"></i>
            </a>
        </TopContainer>

        {/* ========= BOTTOM CONTAINER ========= */}
        <BottomContainer className='bottom__container'>

          { data.map(item => {
            return (
              <FullCard />
            )
          })}


        </BottomContainer>
      </RelatedItemsContainer>
      </RelatedItems>
  )
}

