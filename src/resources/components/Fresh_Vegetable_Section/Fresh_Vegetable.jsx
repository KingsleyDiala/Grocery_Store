// IMPORT MODULES
import React from 'react';
import styled from 'styled-components'
import { HalfCard } from '../Reusable_Components/Card';
import { Vegetables } from '../../Data/data';
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




// ============ JSX COMPONENT =========

export const FreshVegetableComponent = () => {

  return (
    <FeaturedItems>
      <FeaturedItemsContainer>

        {/* ======= TOP CONTAINER ========= */}
        <TopContainer>
          <h4> Fresh Vegetables </h4>
          <a href='#'>
            Show All <i class="uil uil-angle-right-b"></i>
            </a>
        </TopContainer>

        {/* ========= BOTTOM CONTAINER ========= */}
        <BottomContainer>

          {/* ARROW RIGHT AND LEFT */}
          <ArrowLeft />
          <ArrowRight />

          {Vegetables.slice(0, 6).map(item => {
            return (
              <HalfCard key={item.id} src={item.image} alt={item.title} title={item.title.slice(0, 17)} price={7.89} />
            )
          })}


        </BottomContainer>
      </FeaturedItemsContainer>
      </FeaturedItems>
  )
}


