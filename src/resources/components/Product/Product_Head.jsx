import styled from "styled-components";



// ============== STYLED COMPONENT ==============
const ProductHead = styled.section`
padding: 100px 0;
position: relative;
top: 100px;
width: 100%;
height: fit-content;
display: grid;
place-content: center;
`
const Container = styled.div`
width: 1232px;
height: 550px;
display: flex;
align-items: center;
justify-content: space-between;
`
const LeftContainer = styled.div`
width: 500px;
height: 100%;
background-color: var(--dark-grey-color);
border-radius: 10px;
box-shadow: 5px 5px 15px 3px rgba(0, 0, 0, .2);
`
const RightContainer = styled.div`
width: 608px;
display: flex;
flex-direction: column;
`
const ProductName = styled.h3`
font-weight: 600;
margin-bottom: 1rem;
`
const ProductPrice = styled.div`
margin-bottom: 3rem;
`
const Price = styled.h4`
color: var(--accent-color);
`
const HorizontalLine = styled.hr`
margin-bottom: 3rem;
opacity: .5;
`
const QuantityContainer = styled.div`
display: flex;
column-gap: 1rem;
align-items: center;
justify-content: space-around;
width: 180px;
height: 62px;
padding: 1rem;
background-color: var(--light-accent-color);
border-radius: 10px;
margin-bottom: 3rem;
& i {
  font-size: 20px;
}
`
const Decrement = styled.div`
background-color: var(--light-grey-color);
height: 40px;
width: 40px;
display: grid;
place-items: center;
border-radius: 5px;
cursor: pointer;
&:hover {
  transform: scale(1.05);
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, .1);
}
`
const Quantity = styled.p`
font-weight: 600;
font-size: 20px;
`
const Increment = styled.div`
background-color: var(--accent-color);
height: 40px;
width: 40px;
display: grid;
place-items: center;
border-radius: 5px;
cursor: pointer;
transition: all .2s ease;
color: var(--light-color);
&:hover {
  transform: scale(1.05);
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, .1);
}
`
const AddToCart = styled.a`
display: grid;
place-items: center;
width: 100%;
height: 60px;
color: var(--light-color);
font-size: var(--normal-text);
font-weight: 600;
`
const Save = styled.a`
font-size: var(--normal-text);
font-weight: 600;
display: grid;
place-items: center;
width: 100%;
height: 60px;
`







// =============== JSX STRUCTURE COMPONENT  =============
export const ProductHeadComponent = () => {
  return (
    <ProductHead>
      <Container>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <ProductName>Product Name</ProductName>
          <ProductPrice>
            <Price>€4.12</Price>
          </ProductPrice>
          <HorizontalLine></HorizontalLine>
          <QuantityContainer>
            <Decrement><i class="uil uil-minus"></i></Decrement>
            <Quantity>1</Quantity>
            <Increment><i class="uil uil-plus"></i></Increment>
          </QuantityContainer>
          <AddToCart className='green__button'>Add to Cart</AddToCart>
          <br />
          <Save className='white__button'>Save</Save>
        </RightContainer>
      </Container>
    </ProductHead>
  )
};