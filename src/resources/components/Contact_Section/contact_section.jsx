import React from 'react'
import styled from 'styled-components'
import ContactForm from './contact_form';
import ContactInfoSection from './contact_info';





// ================= STYLED COMPONENT  ===========
const Contact = styled.section`
position: relative;
width: 100%;
height: fit-content;
display: grid;
place-content: center;
top: 100px;
padding: 100px 0;
`;
const Container = styled.div`
width: 1232px;
height: fit-content;
`;
const TitleText = styled.h4`
margin-bottom: 2rem;
`;
const Button = styled.button`
margin-top: 50px;
margin-left: 20px;
width: 300px;
`




// ============== JSX STRUCTURE ============

const Contact_section = () => {
  return (
    <Contact>
      <Container>
        <TitleText>Contact</TitleText>
        <ContactForm />
        <ContactInfoSection />
      </Container>
    </Contact>
  )
}

export default Contact_section