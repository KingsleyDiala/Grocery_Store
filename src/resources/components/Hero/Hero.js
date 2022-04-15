// IMPORT MODULES
import React from "react";
import styled from 'styled-components';
import img1 from '../../img/hero-img-1.jpg'


// ============  STYLED COMPONENTS  ===========
const Hero = styled.section`
  grid-area: hero;
  overflow: hidden;
  position: relative;
  height: 796px;
  width: 100%;
  display: grid;
  place-items: center;
  top: 104px;
`
const GradientOverlay = styled.div`
  background: linear-gradient(110.05deg, rgba(0, 0, 0, 0.493) -16.93%, rgba(0, 0, 0, 0) 109.91%, rgba(0, 0, 0, 0) 109.92%);
  position: absolute;
  width: 100%;
  height: 100%;
`
const HeroContainer = styled.div`
  transform: translate(-0%);
  white-space: nowrap;
  transition: transform 0.3s;
  `
const HeroItem = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${img1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const TextContainer = styled.div`
  position: absolute;
  width: 1024px;
  height: 154px;
  top: 225px;
  left: 150px;
  row-gap: 3rem;
  & h1 {
    font-weight: 700;
  line-height: 76.8px;
  color: var(--light-text-color);
  margin-bottom: 4rem;
  };
  & a {
    color: var(--light-text-color);
  font-size: var(--normal-size);
  };
`


// =============  JSX STRUCTURE  =============
export const HeroComponent = () => {

  const carouselItem = ( {children }) => {
    return (
      <HeroItem>
          <TextContainer>
            <h1 className="heading__text">
              Looking for Good Quality Ingredient?
            </h1>
            <button className="green__button">
              <a href="#">Find Products</a>
            </button>
          </TextContainer>
      </HeroItem>
    )
  }

  const Carousel = ({ children }) => {
    return (
      <>
      <GradientOverlay></GradientOverlay>
      <HeroContainer>
      { carouselItem }
      </HeroContainer>
    </>
    )
  }

  return (
    <Hero> { Carousel } </Hero>
  )

}

