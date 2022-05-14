import styled from "styled-components";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { fontWeight } from "@mui/system";



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
const Text = {
  textAlign: 'justify',
  fontWeight: '400',
}



// ================ DESCRIPTION ================
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs({ product }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Nutritional Facts" {...a11yProps(1)} />
          <Tab label="Features" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p style={Text}>{product.generatedText}</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}



//   =============== JSX STRUCTURE COMPONENT ==================

export const ProductDescriptionComponent = ({ product }) => {
  console.log(product);
  return (
    <ProductDescription>
      <Container>
        <BasicTabs product={product} />
        {/* <LeftContainer>
          <Description>Description</Description>
          <NutritionFacts>Nutrition Facts</NutritionFacts>
          <Features>Features</Features>
          <ProducesOf>Produces of</ProducesOf>
        </LeftContainer>
        <RightContainer>
          <Text>
          {product.generatedText}
          </Text>
        </RightContainer> */}
      </Container>
    </ProductDescription>
  )
}
