// IMPORT MODULES
import React from 'react';
import styled from 'styled-components'
import data, { Milk } from '../../Data/data';
import { ArrowLeft, ArrowRight } from '../Reusable_Components/Arrow';
import { HalfCard } from '../Reusable_Components/Card';

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

export const DiaryAndMilkComponent = ({ items }) => {

  const data = Milk.filter(item => {return item.title.length <= 45}).slice(0, 6);


  return (
    <FeaturedItems>
      <FeaturedItemsContainer>

        {/* ======= TOP CONTAINER ========= */}
        <TopContainer>
          <h4> Dairy & Milk </h4>
          <a href='#'>
            Show All <i class="uil uil-angle-right-b"></i>
            </a>
        </TopContainer>

        {/* ========= BOTTOM CONTAINER ========= */}
        <BottomContainer>

          {/* ARROW RIGHT AND LEFT */}
          <ArrowRight />
          <ArrowLeft />

          { data.map(item => {
            return (
              <HalfCard key={item.id} price={32.32} alt={item.title} src={item.image} title={item.title.slice(0, 20)} />
            )
          })}


        </BottomContainer>
      </FeaturedItemsContainer>
      </FeaturedItems>
  )
}


