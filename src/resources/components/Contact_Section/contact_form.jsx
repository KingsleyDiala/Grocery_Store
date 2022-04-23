import React from 'react'
import styled from 'styled-components';

// ========= STYLED COMPONENTS ==============
const Container = styled.div`
padding: 0 0 100px 0;
width: 800px;
height: fit-content;
`
const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
row-gap: 1rem;
margin-top: 50px;
`
const FormTitle = styled.h5`
font-size: 20px;
margin-bottom: 1rem;
`
const Name = styled.div`
width: 100%;
display: flex;
column-gap: 1rem;
`
const Flex = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  row-gap: .5rem;
`
const Label = styled.label``
const Box = styled.label`
display: flex;
flex-direction: column;
row-gap: .5rem;
`
const FirstName = styled.input`
width: 100%;
height: 35px;
border-radius: 5px;
border: 1px solid rgba(0,0,0,.3);
font-size: 16px;
padding: 0 10px;
transition: border, background-color .2s ease;
&:focus {
  border: 1px solid var(--accent-color);
  background-color: var(--light-accent-color);
}
`
const LastName = styled.input`
width: 100%;
height: 35px;
border-radius: 5px;
border: 1px solid rgba(0,0,0,.3);
font-size: 16px;
padding: 0 10px;
transition: border, background-color .2s ease;
&:focus {
  border: 1px solid var(--accent-color);
  background-color: var(--light-accent-color);
}
`
const Email = styled.input`
width: 100%;
height: 35px;
border-radius: 5px;
border: 1px solid rgba(0,0,0,.3);
font-size: 16px;
padding: 0 10px;
transition: border, background-color .2s ease;
&:focus {
  border: 1px solid var(--accent-color);
  background-color: var(--light-accent-color);
}`
const Phone = styled.input`
width: 100%;
height: 35px;
border-radius: 5px;
border: 1px solid rgba(0,0,0,.3);
font-size: 16px;
padding: 0 10px;
transition: border, background-color .2s ease;
&:focus {
  border: 1px solid var(--accent-color);
  background-color: var(--light-accent-color);
}`
const Message = styled.textarea`
width: 100%;
height: 80px;
border-radius: 5px;
border: 1px solid rgba(0,0,0,.3);
font-size: 16px;
padding: 10px 10px;
transition: border, background-color .2s ease;
&:focus {
  border: 1px solid var(--accent-color);
  background-color: var(--light-accent-color);
}`
const Button = styled.button`
color: var(--light-color);
font-size: 15px;
margin-top: 1rem;
`


// ================= JSX STRUCTURE ================

const ContactForm = () => {
  return (
    <Container>
      <Form>
        <FormTitle> Contact Form </FormTitle>
        <Name>
        <Flex>
        <Label for='first__name' >FirstName</Label>
        <FirstName type='text' id='first__name'></FirstName>
        </Flex>
        
        <Flex>
        <Label for='last__name' >LastName</Label>
        <LastName type='text' id='last__name'></LastName>
        </Flex>
        </Name>

        <Box>
        <Label for='email' >Email Address</Label>
        <Email type='email' id='email'></Email>
        </Box>

        <Box>
        <Label for='phone' >Phone</Label>
        <Phone type='number' id='phone'></Phone>
        </Box>

        <Box>
        <Label for='message' >Message</Label>
        <Message id='message'></Message>
        </Box>

        <Button className='green__button__white'>Send Message</Button>
      </Form>
    </Container>
  )
}

export default ContactForm;