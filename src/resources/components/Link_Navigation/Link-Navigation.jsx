import styled from "styled-components";



// ============== STYLED COMPONENT ==============
const LinkNavigation = styled.section`
top: 100px;
position: relative;
width: 100%;
height: fit-content;
display: grid;
place-content: center;
background-color: var(--light-accent-color);
`
const Container = styled.div`
width: 1232px;
height: 80px;
display: flex;
align-items: center;`
const Link = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: var(--accent-color);
font-weight: 700;
& i {
  font-size: 20px;
}
`
const Home = styled.a`
color: var(--accent-color);
`
const Product = styled.a``






// =============== JSX STRUCTURE COMPONENT  =============
export const LinkNavigationComponent = () => {
  return (
    <LinkNavigation>
      <Container>
        <Link> <Home href="#">Home</Home><i class="uil uil-angle-right-b"></i><Product href="#">Product</Product></Link>
      </Container>
    </LinkNavigation>
  )
};