import styled from "styled-components";
import React from "react";

// ================  STYLED COMPONENT  ============
const Right = styled.div`
  height: 56px;
  width: 56px;
  color: var(--light-color);
  position: absolute;
  bottom: 55%;
  right: -15px;
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
  &:active {
    transform: scale(.9);
  }
`
const Left = styled.div`
  height: 56px;
  width: 56px;
  color: var(--light-color);
  position: absolute;
  bottom: 55%;
  left: -15px;
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
  &:active {
    transform: scale(.9);
  }
`



// ==============  JSX STRUCTURE =============

// ARROW RIGHT
export const ArrowRight = () => {

  return (
    <Right> <i class="uil uil-angle-right-b"></i> </Right>
  )
}

// ARROW LEFT
export const ArrowLeft = () => {

  return (
    <Left> <i class="uil uil-angle-left"></i> </Left>
  )
}
