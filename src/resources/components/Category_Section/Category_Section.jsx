import styled from "styled-components";
import data, { CategoryData, Vegetables } from "../../Data/data";
import FullCard from "../Reusable_Components/Full_Card";
import { CategoryComponent } from "../Single_Components/Single_Components";
import SearchWidget from "../Widget/Search_Widget";


// STYLED COMPONENT
const Category = styled.section`
width: 100%;
height: fit-content;
top: 100px;
position: relative;
display: grid;
place-content: center;
padding: 100px 0;
`;
const Container = styled.div`
height: fit-content;
width: 1232px;
display: flex;
column-gap: 1rem;
`;

const ContainerRight = styled.div`
display: flex;
flex-direction: column;
row-gap: 2rem;
flex: 2.7;
`;
const TopContainer = styled.div``;
const Text = styled.h5``;
const MiddleContainer = styled.div`
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
const BottomContainer = styled.div`
display: flex;
align-items: center;
`;
const PageNumContainer = styled.div`
display: flex;
align-items: center;
column-gap: .5rem;
& i {
  font-size: 25px;
  color: var(--accent-color);
  cursor: pointer;
}
`;
const Number = styled.div`
display: grid;
place-content: center;
width: 30px;
height: 30px;
border-radius: 3px;
cursor: pointer;
&:hover {
  color: var(--light-color);
  background-color: var(--accent-color);
}
`;




// JSX STRUCTURE COMPONENT

const CategorySection = ({ setCart, setWishlist }) => {
  return (
    <Category>
      <Container>
        <SearchWidget />
        <ContainerRight>
          <CategoryComponent />
          <TopContainer>
            <Text>Explore these items</Text>
          </TopContainer>
          <MiddleContainer>
            {
              Vegetables.map((item, index) => {
                return (
                  <FullCard item={item} index={index} setCart={setCart} setWishlist={setWishlist} />
                )
              })
            }
          </MiddleContainer>
          <BottomContainer>
            <PageNumContainer>
            <i class="uil uil-angle-left"></i>
            <Number>1</Number>
            <Number>2</Number>
            <Number>3</Number>
            <Number>4</Number>
            <Number>5</Number>
            <i class="uil uil-angle-right"></i>
            </PageNumContainer>
          </BottomContainer>
        </ContainerRight>
      </Container>
    </Category>
  )
}


export default CategorySection;