import { useState } from "react";
import styled from "styled-components";
import { NutritionTable } from "./Virtualized_Table";
import { motion } from 'framer-motion'




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
align-items: flex-start;
justify-content: space-between;
column-gap: 3rem;
padding: 60px 20px;
`
const LeftContainer = styled(motion.div)`
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
const RightContainer = styled(motion.div)`
flex: 2.5;
padding-right: 2rem;
height: fit-content;
`
const Text = styled.p`
text-align: justify;
`






//   =============== JSX STRUCTURE COMPONENT ==================

export const ProductDescriptionComponent = ({ product }) => {
  const [index, setIndex] = useState(1)

  const textToDisplay = () => {
    if (index === 1) {
      return <Text key={1}>{product.generatedText}</Text>;
    }
    if (index === 2) {
      return <Text key={1}>{ <NutritionTable product={product.nutrition.nutrients} /> }</Text>;
    }
    if (index === 3) {
      return <Text key={3}> Features </Text>;
    }
    if (index === 4) {
      return <Text key={4}>Produces of</Text>;
    }
  }

  const handleClick = (index) => {
    setIndex(() => index)
  }

  return (
    <ProductDescription>
      <Container>
        <LeftContainer
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: .1, duration: 1, type:'tween' }}
        >
          <Description onClick={() => handleClick(1)} >Description</Description>
          <NutritionFacts onClick={() => handleClick(2)} >Nutrition Facts</NutritionFacts>
          <Features onClick={() => handleClick(3)} >Features</Features>
          <ProducesOf onClick={() => handleClick(4)} >Produces of</ProducesOf>
        </LeftContainer>
        <RightContainer
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: .5, duration: 1, type:'tween' }}
        >
            { textToDisplay() }
        </RightContainer>
      </Container>
    </ProductDescription>
  )
}
