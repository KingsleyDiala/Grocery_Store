import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'



// ============== STYLED COMPONENT ==============
const LinkNavigation = styled.section`
top: 100px;
position: relative;
width: 100%;
height: fit-content;
display: grid;
place-content: center;
background-color: var(--light-accent-color);
overflow: hidden;
`
const Container = styled.div`
width: 1232px;
height: 80px;
display: flex;
align-items: center;`

const Breadcrumb = styled(motion.div)`
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






// =============== JSX STRUCTURE COMPONENT  =============
export const LinkNavigationComponent = ({name, path}) => {

  return (
    <LinkNavigation>
      <Container>
        <Breadcrumb
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: .1, duration: 1, type:'tween' }}
        > 
          <Link style={{ color: 'var(--accent-color)' }} to={'/'}>
            Home
          </Link>
          <i class="uil uil-angle-right-b"></i>
          <Link to={path}> {name} </Link>
          </Breadcrumb>
      </Container>
    </LinkNavigation>
  )
};