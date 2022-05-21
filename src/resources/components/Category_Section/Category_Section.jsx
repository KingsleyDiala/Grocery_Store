import styled from "styled-components";
import data, { CategoryData, Vegetables } from "../../Data/data";
import FullCard from "../Reusable_Components/Full_Card";
import { CategoryComponent } from "../Single_Components/Single_Components";
import SearchWidget from "../Widget/Search_Widget";
import { motion } from 'framer-motion';


// STYLED COMPONENT

const MiddleContainer = styled(motion.div)`
display: flex;
flex-wrap: wrap;
align-items: center;
column-gap: 1rem;
row-gap: 2rem;
padding-bottom: 2rem;
`;
const ItemContainer = styled.div`
position: relative;
  flex: 1 1 auto;
  height: 457px;
  max-width: 193px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  border-radius: 10px;
  overflow: hidden;
  transition: all .5s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 10px 20px 3px rgba(0, 0, 0, .2);
    & a {
      display: block;
      transition: transform .2s ease;
    }
  }
  `
const ImageContainer = styled.div`
height: 280px;
width: 100%;
background-color: var(--dark-grey-color);
overflow: hidden;
border-bottom: 5px solid var(--accent-color);
border-radius: 10px;
`
const Image = styled.img`
position: relative;
height: 100%;
width: auto;
`
const TextContainer = styled.div`
  padding: 0 1rem;
`
const ProductName = styled.a`
  line-height: 1.5rem;
  cursor: pointer;
  `
const ProductPrice = styled.p`
  color: var(--accent-color);
  font-weight: 700;
`
const Button = styled.a`
  display: grid;
  place-items: center;
  position: relative;
  width: 160px;
  height: 41px;
  margin-top: 2rem;
  cursor: pointer;
  color: var(--light-text-color);
  font-size: var(--button-text);
  font-weight: 600;
  text-align: center;
  line-height: 35px;
`




// JSX STRUCTURE COMPONENT

const CategorySection = ({ currentItems, setCart, setWishlist }) => {
  return (
    <MiddleContainer
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ delay: .5, duration: 1, type:'tween' }}
    >
            {
              currentItems && currentItems.map((item, index) => {
                return (
                  <FullCard item={item} index={index} setCart={setCart} setWishlist={setWishlist} />
                )
              })
            }
          </MiddleContainer>
  )
}


export default CategorySection;