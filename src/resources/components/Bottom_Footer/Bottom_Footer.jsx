import styled from 'styled-components';

// ================ STYLED COMPONENT ============
const BottomFooter = styled.section`
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
align-items: center;
`
const Text = styled.p`
`





// ========== JSX STRUCTURE COMPONENT =================

export const BottomFooterComponent = () => {
  return (
    <BottomFooter>
      <Container>
        <Text> @ 2022 Kingston. All rights reserved.</Text>
      </Container>
    </BottomFooter>
  )
}

