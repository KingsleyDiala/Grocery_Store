// IMPORT MODULES
import React, { useState } from "react";
import styled from 'styled-components';
import img1 from '../../img/hero-img-1.jpg'
import { images } from "../../Data/data";
import { ArrowLeft, ArrowRight } from "../Reusable_Components/Arrow";
import file from '../../img/paper-bag-and-different-food-isolated.jpg'


// ============  STYLED COMPONENTS  ===========
const Hero = styled.section`
  grid-area: hero;
  overflow: hidden;
  position: relative;
  height: 796px;
  width: 100%;
  top: 104px;
`
const GradientOverlay = styled.div`
  background: linear-gradient(110.05deg, rgba(0, 0, 0, 0.493) -16.93%, rgba(0, 0, 0, 0) 109.91%, rgba(0, 0, 0, 0) 109.92%);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`
const HeroContainer = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
  transform: translateX(-100%);
  `
const HeroItem = styled.div`
  width: 100%;
  height: 100%;
`
const Image = styled.img`
position: relative;
width: 100%;
height: 100%;
`
const TextContainer = styled.div`
  position: absolute;
  width: 1024px;
  height: 154px;
  top: 255px;
  left: 150px;
  row-gap: 3rem;
  z-index: 2;
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
const Right = styled.div`
  height: 56px;
  width: 56px;
  color: var(--light-color);
  position: absolute;
  bottom: 50%;
  right: 15px;
  display: grid;
  place-items: center;
  font-size: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--accent-color);
  cursor: pointer;
  user-select: none;
  z-index: 2;
  transition: all .2s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, .2);
  }
  &:active {
    transform: scale(.9);
  }
`
const Left = styled.div`
  height: 56px;
  width: 56px;
  color: var(--light-color);
  position: absolute;
  bottom: 50%;
  left: 15px;
  display: grid;
  place-items: center;
  font-size: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--accent-color);
  cursor: pointer;
  user-select: none;
  z-index: 2;
  transition: all .2s ease;
    &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 10px 3px rgba(0, 0, 0, .2);
  }
  &:active {
    transform: scale(.9);
  }
`
const Button = styled.button`
&:active {
  transform: scale(.99);
}
`




const Slider = styled.section`
top: 100px;
overflow: hidden;
position: relative;
height: 796px;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`



const slider = {
opacity: '1',
transition: 'all 1s ease',
}
const active = {
opacity: '0',
transitionDuration: '1s',
transform: 'scale(0.9)'
}

// =============  JSX STRUCTURE  =============
export const HeroComponent = () => {

  // state of current index
  const [current, setCurrent] = useState(0)
  // length of image array.
  const length = images.length;

  // checks if index is equal to 0 if true, set index to array's length else decrement
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1 )
  }

  // checks if index equal the last item in array. If true, reset else increment
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <Hero>

      {/* Right and left Arrows */}
      <Left onClick={prevSlide}> <i class="uil uil-angle-left"></i> </Left>
      <Right onClick={nextSlide}> <i class="uil uil-angle-right-b"></i> </Right>

      <GradientOverlay></GradientOverlay>

      {/* Map all items of images array */}
    {images.map((image, index) => {
      return (
        <div style={index === current ? slider : active } key={index}>
          {index === current &&
          <>
          <Image src={image.url} alt={image.alt}></Image>
          <HeroItem >
          <TextContainer>
            <h1 className="heading__text">
              { image.heading}
            </h1>
            <Button className="green__button">
              <a href="#">Find Products</a>
            </Button>
          </TextContainer>
        </HeroItem>
        </>
        }
        </div>
      )
    })}
    </Hero>
  )

}

