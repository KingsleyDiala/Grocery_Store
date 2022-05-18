// IMPORT MODULES
import React from 'react';
import styled from 'styled-components'
import { HalfCard } from '../Reusable_Components/Card';
import { Vegetables } from '../../Data/data';
import { ArrowLeft, ArrowRight } from '../Reusable_Components/Arrow';
import { responsive } from '../Reusable_Components/Responsive';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

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
  & .carousel {
    height: fit-content;
    padding-bottom: 40px;
    padding-top: 10px;
    padding-right: 20px;
  }
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

export const FreshVegetableComponent = (props, { setCart, setWishlist }) => {

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

          <Carousel
              customRightArrow={<ArrowRight />}
              customLeftArrow={ <ArrowLeft />}
              additionalTransfrom={0}
              arrows
              autoPlay={props.deviceType === "mobile" ? true : false}
              autoPlaySpeed={4000}
              deviceType={props.deviceType}
              centerMode={true}
              className="carousel"
              containerClass='container-padding-bottom'
              dotListClass="dots"
              draggable
              focusOnSelect={false}
              infinite={true}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              showDots={true}
              sliderClass=""
              slidesToSlide={3}
              swipeable
              customTransition=''
            >
              {Vegetables.slice(0, 15).map((item, index) => {
            return (
              <HalfCard setCart={setCart} setWishlist={setWishlist} index={index} item={item} />
            )
          })}
          </Carousel>


        </BottomContainer>
      </FeaturedItemsContainer>
      </FeaturedItems>
  )
}


