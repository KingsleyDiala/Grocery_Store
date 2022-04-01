// ===========  IMPORT MODULE  ==========

import React from "react";
import styled from 'styled-components';

// ============  STYLED COMPONENTS ============
const Showcase = styled.div`
  overflow: hidden;
  position: relative;
  top: 100px;
  grid-area: showcase;
  height: fit-content;
  width: 1440px;
  display: grid;
  place-content: center;
`;
const ShowcaseContainer = styled.div`
  padding: 100px 10%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 3rem;
`
const Content = styled.div`
  height: 280px;
  width: 400px;
  background-color: var(--dark-grey-color);
  border-radius: 10px;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: center;
  transition: all .2s ease;
  box-shadow: 10px 10px 20px 3px rgba(0, 0, 0, .1);
  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 10px 30px 5px rgba(0, 0, 0, .3);
  }
  & h5 {
    margin-top: 5rem;
  color: var(--light-text-color)
  }
  & a {
    color: var(--light-text-color);
    cursor: pointer;
  };
  & a:hover {
    color: var(--light-accent-color);
  }
`



// =========  JSX STRUCTURE  ==========

export const ShowcaseComponent = () => {
  return (
    <Showcase >
      <ShowcaseContainer>

        {/* ======== SHOWCASE 1 ======== */}
        <Content>
          <h5> Buy 5 or more Save €5</h5>
          <a className="product__link">
            <p> Shop Now <i class="uil uil-angle-right-b"></i> </p>
          </a>
        </Content>

        {/* ======== SHOWCASE 2 ======== */}
        <Content>
          <h5> Collect 10x Point for Free Delivery</h5>
          <a className="product__link">
            <p> Shop Now <i class="uil uil-angle-right-b"></i> </p>
          </a>
        </Content>

        {/* ======== SHOWCASE 2 ======== */}
        <Content>
          <h5> 50% Off for Fresh Vegetables </h5>
          <a className="product__link">
            <p> Shop Now <i class="uil uil-angle-right-b"></i> </p>
          </a>
        </Content>


      </ShowcaseContainer>
    </Showcase>
  )
}