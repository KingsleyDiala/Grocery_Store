import React, { useState } from "react"
import { CategoryData } from "../../Data/data"
import styled from "styled-components"
import { Link } from "react-router-dom"


// ==========  STYLED COMPONENT  ============
const Category = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: grid;
  place-content: center;
  overflow: hidden;
  ` 
const Container = styled.div`
  width: 816px;
  height: fit-content;
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
  flex-wrap: wrap;
  align-items: center;
  column-gap: 1rem;
  row-gap: 2rem;
  `
const ItemContainer = styled.div`
  height: 250px;
  width: 192px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  border-radius: 10px;
  padding: 0 10px;
  text-align: center;
  `
const Image = styled.img`
width: 100%;
height: auto;
&:hover {
  transform: scale(1.1);
  transition: transform 2s ease;
}
`
const ImageContainer = styled.div`
  height: 170px;
  width: 100%;
  background-color: var(--dark-grey-color);
  border-radius: 50%;
  transition: all .5s ease;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 10px 20px 3px rgba(0, 0, 0, .2);
  }
`
const TextContainer = styled.div`
`
const ProductName = styled.a`
  line-height: 1.5rem;
  cursor: pointer;
  font-weight: 700;
  font-size: var(--price-font);
  transition: all .2s ease;
  &:hover {
    color: var(--accent-color);
  }
  `




// JSX STRUCTURE

export const CategoryComponent = () => {


  return (
    <Category>
      <Container>

        {/* ======= TOP CONTAINER ========= */}
        <TopContainer>
          <h5> Shop By Department </h5>
          <a href='#'>
            Show All Department <i class="uil uil-angle-right-b"></i>
            </a>
        </TopContainer>

        {/* ========= BOTTOM CONTAINER ========= */}
        <BottomContainer>

        {CategoryData.map(item => {
          return (
            <ItemContainer id={item.id}>
              <Link to={`/categories/${item.name}`}>
                <ImageContainer>
                <Image alt={item.alt} src={item.url} />
              </ImageContainer>
              </Link>
          <TextContainer>
            <Link to={`/categories/${item.category}`}>
              <ProductName href='#' className='product__name'> {item.name} </ProductName>
            </Link>
          </TextContainer>
        </ItemContainer>
          )
        })}


        </BottomContainer>
      </Container>
      </Category>
  )
}