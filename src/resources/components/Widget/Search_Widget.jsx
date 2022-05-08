
import React from 'react'
import styled from 'styled-components'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
const CheckBoxContainer = styled.label`
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
              <FormControlLabel control={<Checkbox size='small' sx={{ '& .MuiSvgIcon-root': { fontSize: 20 },
                  color: 'black',
                  opacity: .3,
                  '&.Mui-checked': {
                    color: 'green',
                    opacity: 1,
                  } }} />} label='Fruity & Vegetables' />

            <FormControlLabel control={<Checkbox size='large' sx={{ '& .MuiSvgIcon-root': { fontSize: 20 },
            color: 'black',
            opacity: .3,
            '&.Mui-checked': {
              opacity: 1,
              color: 'green',
            } }} />} label='Pantry' />
                    </FormGroup>

            <CheckBoxContainer>
            <Name className='checkmark'></Name>
              <Option type='checkbox' ></Option>
              Organic Shop

            </CheckBoxContainer>
            <CheckBoxContainer>
            <Name className='checkmark'></Name>
              <Option type='checkbox' ></Option>
              Health Snack

            </CheckBoxContainer>
            <CheckBoxContainer>
            <Name className='checkmark'></Name>
              <Option type='checkbox' ></Option>
              Kitchen and FoodStuffs

            </CheckBoxContainer>
            <CheckBoxContainer>
            <Name className='checkmark'></Name>
              <Option type='checkbox' ></Option>
              Frozen Food

            </CheckBoxContainer>
          </Category>
          <Category>
          <Category>
            <Title>Brands</Title>
            <CheckBoxContainer>
            <Name></Name>
              <Option type='checkbox' ></Option>
              Bare

            </CheckBoxContainer>
            <CheckBoxContainer>
            <Name></Name>
              <Option type='checkbox' ></Option>
              Bake

            </CheckBoxContainer>
            <CheckBoxContainer>
            <Name></Name>
              <Option type='checkbox' ></Option>
              Gloomy

            </CheckBoxContainer>
            <CheckBoxContainer>
            <Name></Name>
              <Option type='checkbox' ></Option>
              Blawd

            </CheckBoxContainer>
            <CheckBoxContainer>
            <Name></Name>
              <Option type='checkbox' ></Option>
              Berky

            </CheckBoxContainer>
            <CheckBoxContainer>
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


export default SearchWidget;