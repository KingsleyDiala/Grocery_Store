
import React from 'react'
import styled from 'styled-components'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { motion } from 'framer-motion';

const Container = styled.div`
height: fit-content;
display: flex;
flex-direction: column;
row-gap: 2rem;
flex: 1;
border: 1px solid rgba(0,0,0,.3);
border-radius: 10px;
padding: 2rem;
overflow: hidden;
`;
const Category = styled(motion.div)`
padding-bottom: 1rem;
height: fit-content;
display: flex;
flex-direction: column;
justify-content: center;
row-gap: 1rem;
position: relative;
`;
const Title = styled.h5`
margin-bottom: .5rem;
border-bottom: 1px solid rgba(0,0,0,.2);
padding-bottom: 1rem;
border-radius: 10px;
padding-left: 1rem;
`;
const CheckBoxContainer = styled(motion.label)`
display: flex;
align-items: center;
column-gap: 1rem;
cursor: pointer;
`
const Name = styled.span`
height: 20px;
width: 20px;
background-color: var(--accent-color);
display: none;
`
const Option = styled.input`
cursor: pointer;
`;

const SearchWidget = () => {
  return (
    <Container>
      <Category>
            <Title>Departments</Title>

        <FormGroup>
          <CheckBoxContainer
            initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .5, duration: 1, type:'tween' }}
          >
              <FormControlLabel control={<Checkbox size='small' sx={{ '& .MuiSvgIcon-root': { fontSize: 20 },
                  color: 'black',
                  opacity: .3,
                  '&.Mui-checked': {
                    color: 'green',
                    opacity: 1,
              }
            }} />} label='Fruity & Vegetables' />
            </CheckBoxContainer>

          <CheckBoxContainer
            initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .6, duration: 1, type:'tween' }}
          >
            <FormControlLabel control={<Checkbox size='large' sx={{ '& .MuiSvgIcon-root': { fontSize: 20 },
            color: 'black',
            opacity: .3,
            '&.Mui-checked': {
              opacity: 1,
              color: 'green',
              }
            }} />} label='Pantry' />
            </CheckBoxContainer>
        </FormGroup>

        <CheckBoxContainer
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .7, duration: 1, type:'tween' }}
        >
            <Name className='checkmark'></Name>
              <Option type='checkbox' ></Option>
              Organic Shop

            </CheckBoxContainer>
        <CheckBoxContainer
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .8, duration: 1, type:'tween' }}
        >
            <Name className='checkmark'></Name>
              <Option type='checkbox' ></Option>
              Health Snack

            </CheckBoxContainer>
        <CheckBoxContainer
        initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .9, duration: 1, type:'tween' }}>
            <Name className='checkmark'></Name>
              <Option type='checkbox' ></Option>
              Kitchen and FoodStuffs

            </CheckBoxContainer>
        <CheckBoxContainer
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1, type:'tween' }}
            >
            <Name className='checkmark'></Name>
              <Option type='checkbox' ></Option>
              Frozen Food

            </CheckBoxContainer>
          </Category>
          <Category>
            <Title>Brands</Title>
        <CheckBoxContainer
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: .5, duration: 1, type:'tween' }}
        >
            <Name></Name>
              <Option type='checkbox' ></Option>
              Bare

            </CheckBoxContainer>
        <CheckBoxContainer
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: .6, duration: 1, type:'tween' }}
        >
            <Name></Name>
              <Option type='checkbox' ></Option>
              Bake

            </CheckBoxContainer>
        <CheckBoxContainer
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: .7, duration: 1, type:'tween' }}
        >
            <Name></Name>
              <Option type='checkbox' ></Option>
              Gloomy

            </CheckBoxContainer>
        <CheckBoxContainer 
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: .8, duration: 1, type:'tween' }}
        >
            <Name></Name>
              <Option type='checkbox' ></Option>
              Blawd

            </CheckBoxContainer>
        <CheckBoxContainer
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: .9, duration: 1, type:'tween' }}
        >
            <Name></Name>
              <Option type='checkbox' ></Option>
              Berky

            </CheckBoxContainer>
        <CheckBoxContainer
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1, duration: 1, type:'tween' }}
        >
            <Name></Name>
              <Option type='checkbox' ></Option>
              Yurz

            </CheckBoxContainer>
          </Category>
          <Category>
          <Category>
            <Title>Nutrition</Title>
          </Category>
          </Category>
        </Container>
  )
}


export default SearchWidget;