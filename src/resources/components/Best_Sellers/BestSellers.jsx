// IMPORT MODULES
import React from 'react';
import styled from 'styled-components'
import  { bestSellers } from '../../Data/data'
import { HalfCard } from '../Reusable_Components/Card';
import { ArrowLeft, ArrowRight } from '../Reusable_Components/Arrow';


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
    transition: all color 1s ease;
    &:active {
    transform: scale(.9);
  }
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



// ============ JSX COMPONENT =========

export const BestSellerSection = ({ setCart, setWishlist }) => {

  return (
    <FeaturedItems>
      <FeaturedItemsContainer>

        {/* ======= TOP CONTAINER ========= */}
        <TopContainer>
          <h4> Best Seller in Your Area </h4>
          <a href='#'>
            Show All <i class="uil uil-angle-right-b"></i>
            </a>
        </TopContainer>

        {/* ========= BOTTOM CONTAINER ========= */}
        <BottomContainer>
          <ArrowRight />
          <ArrowLeft />

          {bestSellers.slice(0, 6).map((item, index) => {
            return (
              <HalfCard
              setCart={setCart}
              setWishlist={setWishlist}
              index={index}
              item={item}
              />
            )
          })}


        </BottomContainer>
      </FeaturedItemsContainer>
      </FeaturedItems>
  )
}


