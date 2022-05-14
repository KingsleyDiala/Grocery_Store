import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';


//  =============== STYLED COMPONENTS =============
const Item = styled.div`
padding: 10px;
width: 700px;
height: 140px;
border: 1px solid rgba(35, 121, 67, .5);
border-radius: 10px;
display: flex;
column-gap: 2rem;
align-items: center;
padding: 5px;
transition: all .2s ease;
&:hover {
  background-color: var(--light-accent-color);
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, .1);
  transform: scale(1.02);
}
`;
const ImageContainer = styled.div`
height: 130px;
width: 110px;
background-color: var(--light-color);
border-radius: 5px;
overflow: hidden;
display: grid;
place-content: center;
border: 3px solid var(--light-grey-color);
`;
const Image = styled.img`
width: 100%;
height: auto;
`;
const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
row-gap: 10px;
`;
const ProductName = styled.p`
font-size: 18px;
font-weight: 600;
`;
const ProductPrice = styled.p`
color: var(--accent-color);
font-weight: 700;
font-size: 16px;
margin-left: 3px;
`;
const ButtonContainer =styled.div`
display: flex;
column-gap: 1rem;
`
const AddToCart = styled.button`
width: 130px;
height: 35px;
`;
const Remove =styled.button`
width: 130px;
height: 35px;
color: var(--light-color);
transition: color, transform .3s ease;
font-weight: 500;
&:hover {
  color: var(--light-color);
  background-color: rgba(235, 88, 88, .8);
  transform: scale(1);
  border: 1px solid rgba(235, 88, 88, 1);
}
&:active {
  transform: scale(.9);
}
`




// ============= JSX STRUCTURE ==================

const SingleCardComponent = ({ setCart, setWishlist, wishlist, item }) => {
  const [inCart, setInCart] = React.useState(false);


  // Remove item from wishlist
  const removeFromWishlist = () => {
    setWishlist(prev => prev.filter(element => element.id !== item.id))
  }

  // Add to cart
  const addToCart = () => {
    setCart(prev => {
      if (prev.includes(item)) {
        return prev;
      } else {
        return [...prev, item];
      }
    })
    setInCart(() => !inCart)
  }

  return (
      <Item key={item.id}>
              <ImageContainer>
                <Image src={item.image} alt={item.title} />
              </ImageContainer>
              <DetailsContainer>
                <ProductName> {item.title.slice(0, 50)} </ProductName>
                <ProductPrice> €6.65 </ProductPrice>
                <ButtonContainer>
                  {/* ========== ADD TO CART BUTTON ========== */}
                  { !inCart ? <AddToCart onClick={addToCart} className='white__button__green'>Add to Cart</AddToCart> : <AddToCart className='white__button__green'>Added To Cart</AddToCart> }
                  <Remove onClick={removeFromWishlist} className='green__button__white'>Remove</Remove>
                </ButtonContainer>
              </DetailsContainer>
            </Item>
  )
}

SingleCardComponent.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
}

export default SingleCardComponent;