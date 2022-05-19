// IMPORT MODULES
import React from 'react';
import styled from 'styled-components'
import { Vegetables } from '../../Data/data';
import { HalfCard } from '../Reusable_Components/Card';
import { ArrowLeft, ArrowRight } from '../Reusable_Components/Arrow';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../Reusable_Components/Responsive';


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
  `




// ============ JSX COMPONENT =========

export const FeaturedItemsComponent = ({ Cart, setCart, wishlist, setWishlist }) => {

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

          <Carousel
              customRightArrow={<ArrowRight />}
              customLeftArrow={ <ArrowLeft />}
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={4000}
              partialVisible={true}
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
              { Vegetables.slice(10, 25).map(item => {
                        return (
                          <HalfCard
                          Cart={Cart}
                          setCart={setCart}
                          wishlist={wishlist}
                          setWishlist={setWishlist}
                          item={item}
                          />
                        )
                      })}
          </Carousel>

        </BottomContainer>
      </FeaturedItemsContainer>
      </FeaturedItems>
  )
}

