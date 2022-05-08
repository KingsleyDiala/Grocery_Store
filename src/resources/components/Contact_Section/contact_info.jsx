import React from 'react'
import styled from 'styled-components';

// ========= STYLED COMPONENTS ==============
const Container = styled.div`
width: 100%;
height: fit-content;
padding: 100px 0;
display: flex;
align-items: center;
justify-content: space-around;
`
const InfoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 320px;
height: 313px;
background-color: #F6F6F6;
padding: 20px;
border-radius: 10px;
border: 2px solid rgba(0,0,0,.2);
transition: all .3s ease;
&:hover {
  transform: scale(1.02);
  box-shadow: 10px 10px 20px 5px rgba(0,0,0,.1);
  border: 2px solid var(--accent-color);
}
`
const IconContainer = styled.div`
background-color: var(--light-color);
font-size: 3.5rem;
color: var(--accent-color);
height: 100px;
width: 100px;
display: grid;
place-items: center;
border-radius: 10px;
border: 2px solid rgba(0,0,0, .1);
`
const TextContainer = styled.div`
display: flex;
flex-direction: column;
row-gap: 10px;
text-align: center;
`
const Title = styled.h5``
const Description = styled.p`
opacity: .6;
`
const Info = styled.p`
font-size: 16px;
font-weight: 800;
color: var(--accent-color);
`



// ================= JSX STRUCTURE ================

const ContactInfoSection = () => {
  return (
    <Container>

      {/* ===============  EMAIL ============== */}
      <InfoContainer>
        <IconContainer>
          <i class="uil uil-envelope-upload"></i>
        </IconContainer>
        <TextContainer>
          <Title>Email us</Title>
          <Description>
            Email us for general enquiries
including other business afairs.
          </Description>
          <Info>service@ba-bildungsakademie.de</Info>
        </TextContainer>
      </InfoContainer>

      {/* ===============  CALL US ============== */}
      <InfoContainer>
        <IconContainer>
          <i class="uil uil-phone"></i>
        </IconContainer>
        <TextContainer>
          <Title>Call us</Title>
          <Description>
            Call us for general enquiries
including other business afairs.
          </Description>
          <Info>+49 176 4177 5052</Info>
        </TextContainer>
      </InfoContainer>


      {/* ===============  VISIT US ============== */}
      <InfoContainer>
        <IconContainer>
          <i class="uil uil-location-point"></i>
        </IconContainer>
        <TextContainer>
          <Title>Visit us</Title>
          <Description>
            Visit us for general enquiries
including other business afairs.
          </Description>
          <Info>Stotternheimer Str. 6 / 7,<br /> 99086 Erfurt</Info>
        </TextContainer>
      </InfoContainer>
    </Container>
  )
}

export default ContactInfoSection;