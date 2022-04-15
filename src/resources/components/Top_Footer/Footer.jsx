import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

//  ===============  STYLED COMPONENT  ============
const TopFooter = styled.section`
  background-color: var(--light-color);
  padding: 100px 0;
  width: 100%;
  height: fit-content;
  top: 80px;
  position: relative;
  display: grid;
  place-content: center;
`
const FooterContainer = styled.div`
  width: 1232px;
  height: 320px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 2rem;
`
const ContactContainer = styled.div`
display: flex;
flex-direction: column;
row-gap: .7rem;
flex: 2;
`
const Logo = styled.a`
font-size: 50px;
margin-bottom: 3rem;
color: var(--accent-color);
`
const Location = styled.p`
opacity: .8;
font-size: var(--link-font);
& i {
  font-size: 20px;
  padding-right: 1rem;
  color: var(--accent-color);
}
`
const Telephone = styled.a`
opacity: .8;
font-size: var(--link-font);
transition: all .2s ease;
&:active {
    transform: scale(.9);
  }
&:hover {
    color: var(--accent-color);
  }
& i {
  font-size: 20px;
  padding-right: 1rem;
  color: var(--accent-color);
}
`
const Email = styled.a`
opacity: .8;
font-size: var(--link-font);
transition: all .2s ease;
&:active {
    transform: scale(.9);
  }
&:hover {
    color: var(--accent-color);
  }
& i {
  font-size: 20px;
  padding-right: 1rem;
  color: var(--accent-color);
}
`

// =======================================
const CategoryContainer = styled.div`
display: flex;
flex-direction: column;
row-gap: 1rem;
flex: 1;
`
const Title = styled.h5`
margin-bottom:1rem;
font-size: 20px;
`
const Diary = styled.a`
opacity: .8;
font-size: var(--link-font);
transition: all .2s ease;
&:active {
    transform: scale(.9);
  }
&:hover {
  color: var(--accent-color);
}
`
const FreshProduce = styled.a`
opacity: .8;
font-size: var(--link-font);
transition: all .2s ease;
&:active {
    transform: scale(.9);
  }
&:hover {
  color: var(--accent-color);
}
`
const Meat = styled.a`
opacity: .8;
font-size: var(--link-font);
transition: all .2s ease;
&:active {
    transform: scale(.9);
  }
&:hover {
  color: var(--accent-color);
}
`
const Snacks = styled.a`
opacity: .8;
font-size: var(--link-font);
transition: all .2s ease;
&:active {
    transform: scale(.9);
  }
&:hover {
  color: var(--accent-color);
}
`
const Frozen = styled.a`
opacity: .8;
font-size: var(--link-font);
transition: all .2s ease;
&:active {
    transform: scale(.9);
  }
&:hover {
  color: var(--accent-color);
}
`

// ==========================================
const CompanyContainer = styled.div`
display: flex;
flex-direction: column;
row-gap: 1rem;
flex: 1;
`
const AboutUs = styled.a`
opacity: .8;
font-size: var(--link-font);
transition: all .2s ease;
&:active {
    transform: scale(.9);
  }
&:hover {
  color: var(--accent-color);
  }
`
const Contact = styled.a`
opacity: .8;
font-size: var(--link-font);
transition: all .2s ease;
&:active {
    transform: scale(.9);
  }
&:hover {
  color: var(--accent-color);
}
`
const PrivacyPolicy = styled.a`
opacity: .8;
font-size: var(--link-font);
transition: all .2s ease;
&:active {
    transform: scale(.9);
  }
&:hover {
  color: var(--accent-color);
}
`
const Catalogue = styled.div`
opacity: .8;
font-size: var(--link-font);
transition: all .2s ease;
&:active {
    transform: scale(.9);
  }
&:hover {
  color: var(--accent-color);
}
`

// ==========================================
const NewsletterContainer = styled.div`
display: flex;
flex-direction: column;
row-gap: 2rem;
flex: 2;
`
const Form = styled.form`
`
const Label = styled.label`
opacity: .8;
`
const EmailInput = styled.input`
margin: .5rem 0 2rem;
width: 376px;
height: 50px;
border: 1px solid rgba(0, 0, 0, .2);
border-radius: 8px;
font-size: 14px;
padding-left: 1rem;
transition: all .2s ease;
&:active {
    transform: scale(.9);
  }
&:focus {
  background-color: var(--light-accent-color);
}
`
const Submit = styled.button`
color: var(--light-color);
width: 147px;
font-size: 16px;
&:active {
    transform: scale(.9);
  }
`










//  ===============  JSX COMPONENT  ============

export const TopFooterComponent = () => {
  return (
    <TopFooter>
      <FooterContainer>

        {/* ===========  CONTACT CONTAINER  =============== */}
        <ContactContainer>
        <Logo href='#'> <i class="uil uil-bitcoin"></i></Logo>
        <Location><i class="uil uil-map-marker"></i> Stotternheimer Str. 6 / 7, 99086 Erfurt</Location>
        <Telephone href='tel:0361-78988101'  ><i class="uil uil-phone"></i> 0361 78988101</Telephone>
        <Email href='mailto:service@ba-bildungsakademie.de'><i class="uil uil-envelope-edit"></i> service@ba-bildungsakademie.de</Email>
        </ContactContainer>

        {/* ===========  CATEGORY CONTAINER  =============== */}
        <CategoryContainer>
          <Title>Category</Title>
          <Diary href='#'>Diary</Diary>
          <FreshProduce href='#'>Fresh Produce</FreshProduce>
          <Meat href='#'>Meat</Meat>
          <Snacks href='#'>Snacks</Snacks>
          <Frozen href='#'>Frozen</Frozen>
        </CategoryContainer>

        {/* ===========  COMPANY CONTANER  =============== */}
        <CompanyContainer>
          <Title>Company</Title>
          <AboutUs href='#'>About Us</AboutUs>
          <Contact href='#'>Contact</Contact>
          <Link to={'/catalogue'}> <Catalogue>Catalogue</Catalogue> </Link>
          <PrivacyPolicy href='#'>Policy & Privacy</PrivacyPolicy>
        </CompanyContainer>

        {/* ===========  NEWSLETTER CONTAINER  =============== */}
        <NewsletterContainer>
          <Title>Join Our Newsletter</Title>
          <Form action='Post'>
            <Label for='email'> Your Email</Label>
            <br />
            <EmailInput placeholder='Enter Your Email...' id='email' name='Email Address' required />
            <br />
            <Submit className='green__button' type='submit' value='Subscribe'>Subscribe</Submit>
          </Form>
        </NewsletterContainer>

      </FooterContainer>
    </TopFooter>
  )
}
