import styled from "styled-components";


//   =============== STYLED COMPONENT ==================
const ProductDescription = styled.section`
padding: 100px 0;
width: 100%;
height: fit-content;
display: grid;
place-content: center;
top: 100px;
position: relative;
`
const Container = styled.div`
border-top: 1px solid rgba(0,0,0,0.2);
border-right: 1px solid rgba(0,0,0,0.2);
width: 1232px;
display: flex;
align-items: center;
justify-content: space-between;
column-gap: 5rem;
padding: 60px 20px;
`
const LeftContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
height: 300px;
border: 1px solid rgba(0,0,0,0.2);
border-radius: 5px;
font-weight: 600;
font-size: 20px;
padding: 5px 10px;
`
const Description = styled.div`
opacity: .5;
display: flex;
align-items: center;
padding: 0rem 2rem;
flex: 1;
border-bottom: 1px solid rgba(0,0,0,0.2);
cursor: pointer;
transition: all .3s ease;
border-radius: 10px;
&:hover {
  background-color: var(--light-accent-color);
  transform: scale(1.03);
  opacity: .8;
  box-shadow: 0px 10px 10px 1px rgba(0, 0, 0, .1);
}
`
const NutritionFacts = styled.div`
opacity: .5;
display: flex;
align-items: center;
padding: 0rem 2rem;
flex: 1;
border-bottom: 1px solid rgba(0,0,0,0.2);
cursor: pointer;
transition: all .3s ease;
border-radius: 10px;
&:hover {
  background-color: var(--light-accent-color);
  transform: scale(1.03);
  opacity: .8;
  box-shadow: 0px 10px 10px 1px rgba(0, 0, 0, .1);
}
`
const Features = styled.div`
opacity: .5;
display: flex;
align-items: center;
padding: 0rem 2rem;
flex: 1;
border-bottom: 1px solid rgba(0,0,0,0.2);
cursor: pointer;
transition: all .3s ease;
border-radius: 10px;
&:hover {
  background-color: var(--light-accent-color);
  transform: scale(1.03);
  opacity: .8;
  box-shadow: 0px 10px 10px 1px rgba(0, 0, 0, .1);
}
`
const ProducesOf = styled.div`
opacity: .5;
display: flex;
align-items: center;
padding: 0rem 2rem;
flex: 1;
cursor: pointer;
transition: all .3s ease;
border-radius: 10px;
&:hover {
  background-color: var(--light-accent-color);
  transform: scale(1.03);
  opacity: .8;
  box-shadow: 0px 10px 10px 1px rgba(0, 0, 0, .1);
}
`
const RightContainer = styled.div`
flex: 2.5;
`
const Text = styled.p`
text-align: justify;
`






//   =============== JSX STRUCTURE COMPONENT ==================

export const ProductDescriptionComponent = ({ product }) => {
  return (
    <ProductDescription>
      <Container>
        <LeftContainer>
          <Description>Description</Description>
          <NutritionFacts>Nutrition Facts</NutritionFacts>
          <Features>Features</Features>
          <ProducesOf>Produces of</ProducesOf>
        </LeftContainer>
        <RightContainer>
          <Text>
          {product.generatedText}
          </Text>
        </RightContainer>
      </Container>
    </ProductDescription>
  )
}
