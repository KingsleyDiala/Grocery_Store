// ===========  IMPORT MODULE  ==========

import React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';

// ============  STYLED COMPONENTS ============
const Showcase = styled.div`
  position: relative;
  top: 100px;
  grid-area: showcase;
  height: fit-content;
  display: grid;
  place-content: center;
`;
const ShowcaseContainer = styled.div`
  width: 1440px;
  padding: 100px 10%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 3rem;
`
const Content = styled(motion.div)`
  position: relative;
  overflow: hidden;
  height: 280px;
  width: 400px;
  background-color: var(--dark-grey-color);
  border-radius: 10px;
  transition: all .5s ease;
  box-shadow: 10px 10px 20px 3px rgba(0, 0, 0, .1);
  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 10px 30px 5px rgba(0, 0, 0, .3);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(7,38,10,1) 46%, rgba(32,60,60,0) 100%);
    opacity: .7;
  }
`
const Image = styled.img`
  width: auto;
  height: 100%;
`
const TextContainer = styled.div`
  position: absolute;
  bottom: 40px;
  left: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  & h5 {
    margin-top: 5rem;
  color: var(--light-text-color)
  }
  & a {
    color: var(--light-text-color);
    cursor: pointer;
    &:active {
    transform: scale(.9);
    transition: all .2s ease;
  }
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
        <Content
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: .5, type: "spring", bounce: 1 }}
        >
          <Image className="img" src="https://envato-shoebox-0.imgix.net/5e55/6f66-4f47-4a43-852c-eb9fdab71d7c/at+the+grocery+store+2.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=6029bab067c11a6a27d1d4d969206928" />
          <TextContainer>
            <h5> Buy 5 or more Save €5</h5>
          <a className="product__link">
            <p> Shop Now <i class="uil uil-angle-right-b"></i> </p>
          </a>
          </TextContainer>
        </Content>

        {/* ======== SHOWCASE 2 ======== */}
        <Content
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: .1, duration: .5, type: "spring", bounce: 1 }}
        >
          <Image src="https://envato-shoebox-0.imgix.net/63d9/0cf0-8b05-4e40-91a9-93e39b614786/ADM_9491.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=7f948643054087c3011e7ee717cba0c7" />
          <TextContainer>
            <h5> Collect 10x Point for Free Delivery</h5>
          <a className="product__link">
            <p> Shop Now <i class="uil uil-angle-right-b"></i> </p>
          </a>
          </TextContainer>
        </Content>

        {/* ======== SHOWCASE 2 ======== */}
        <Content
          initial={{ y: 300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: .2, duration: .5, type: "spring", bounce: 1 }}
        >
          <Image src="https://elements-twenty20-photos-0.imgix.net/production/uploads/items/28a775f3-f295-4833-a6f1-58511c012d3e/source?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=3c6da9fcfe210946a37b657e775a3d09" />
          <TextContainer>
            <h5> 50% Off for Fresh Vegetables </h5>
          <a className="product__link">
            <p> Shop Now <i class="uil uil-angle-right-b"></i> </p>
          </a>
          </TextContainer>
        </Content>


      </ShowcaseContainer>
    </Showcase>
  )
}