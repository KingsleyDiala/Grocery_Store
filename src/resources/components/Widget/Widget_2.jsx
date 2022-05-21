
import React from 'react'
import styled from 'styled-components';
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
`;
const Category = styled.div`
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

const Widget_2 = () => {
  return (
    <Container>
          <Category>
          <Category>
            <Title>Brands</Title>
          <CheckBoxContainer
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .5, duration: 1, type:'tween' }}
          >
            <Name></Name>
              <Option type='checkbox' ></Option>
              Bare

            </CheckBoxContainer>
          <CheckBoxContainer
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .6, duration: 1, type:'tween' }}
          >
            <Name></Name>
              <Option type='checkbox' ></Option>
              Bake

            </CheckBoxContainer>
          <CheckBoxContainer
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .7, duration: 1, type:'tween' }}
          >
            <Name></Name>
              <Option type='checkbox' ></Option>
              Gloomy

            </CheckBoxContainer>
          <CheckBoxContainer
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .8, duration: 1, type:'tween' }}
          >
            <Name></Name>
              <Option type='checkbox' ></Option>
              Blawd

            </CheckBoxContainer>
          <CheckBoxContainer
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .9, duration: 1, type:'tween' }}
          >
            <Name></Name>
              <Option type='checkbox' ></Option>
              Berky

            </CheckBoxContainer>
          <CheckBoxContainer
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1, type:'tween' }}
          >
            <Name></Name>
              <Option type='checkbox' ></Option>
              Yurz

            </CheckBoxContainer>
          </Category>
          </Category>
          <Category>
          <Category>
            <Title>Nutrition</Title>
          </Category>
          </Category>
        </Container>
  )
}


export default Widget_2;