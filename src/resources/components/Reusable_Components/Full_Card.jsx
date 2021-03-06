import styled from "styled-components"
import React, { useRef, useState } from "react"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Link, useLocation } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { motion } from 'framer-motion';





// =================  STYLED COMPONENT  ========================


const ItemContainer = styled(motion.div)`
  position: relative;
  padding-bottom: 20px;
  flex: 1 1 auto;
  height: 457px;
  max-width: 193px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  border-radius: 10px;
  overflow: hidden;
  transition: all .5s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 10px 20px 3px rgba(0, 0, 0, .2);
    background-color: var(--light-accent-color);
    & a {
      display: block;
      transition: transform .2s ease;
    }
    & .image__container {
      border: 6px solid var(--light-accent-color);
    }
  }
  `
const ImageContainer = styled.div`
height: 280px;
width: 100%;
background-color: var(--light-color);
overflow: hidden;
border-bottom: 5px solid var(--accent-color);
border-radius: 10px;
border: 4px solid var(--light-grey-color);
display: grid;
place-content: center;
`
const Image = styled.img`
position: relative;
height: auto;
width: 100%;
transition: transform 2s ease;
&:hover {
  transform: scale(1.1);
}
`
const TextContainer = styled.div`
  padding: 0 1rem;
`
const ProductName = styled.a`
  line-height: 1.5rem;
  cursor: pointer;
  &:active {
    transform: scale(.9);
    transition: all .2s ease;
  }
  `
const ProductPrice = styled.p`
  color: var(--accent-color);
  font-weight: 700;
`
const Button = styled.a`
  display: grid;
  place-items: center;
  position: relative;
  width: 160px;
  height: 41px;
  margin-top: 2rem;
  cursor: pointer;
  color: var(--light-text-color);
  font-size: var(--button-text);
  font-weight: 600;
  text-align: center;
  line-height: 35px;
  transition: all .2s ease;
  &:active {
    transform: scale(.9);
  }
`
const WishlistContainer = styled.div`
position: absolute;
`


// ===================  JSX STRUCTURE  ================================


const FullCard = ({ index, cart, setCart, item, wishlist, setWishlist }) => {

  const [inCart, setInCart] = useState(true);
  const ref = useRef();
  const location = useLocation();
  
  // =========== Wishlist Component rendered by WishlistContainer ===========
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  function wishlistIcon() {
  return (
    <div>
      <Checkbox onClick={(e) => handleWishlistClick(e) } className="wishlist--icon"  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}
      sx={{
    color: 'green',
    '&.Mui-checked': {
      color: 'green',
    },
  }}
      />
    </div>
  );
}

  
  //  ============= Remove from wishlist  ==================
  const handleWishlistClick = (e) => {
    if (e.target.checked) {
      setWishlist(prev => [...prev, prev.id === item.id ? null : item])
    } else {
      setWishlist(prev => prev.filter(element => element.id !== item.id))
    }
  }

  // Add item to Cart
  const addToCart = () => {
    setCart(prev => {
      // check if item is already in cart
      if (prev.includes(item)) {
        return prev;
      } else {
        return [...prev, item]
      }
    });
    setInCart(() => !inCart);
  }

  // Remove item from Cart
  const removeFromCart = () => {
    setCart(prev => prev.filter(element => element.id !== item.id));
    setInCart(() => !inCart);
  }


  return (
    <ItemContainer
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: .1 , duration: 1, type:'tween' }}
      key={index}>
              <ImageContainer className="image__container">
                <Link to={`/product/${item.id}`}>
                  { item.image ? <Image src={item.image} alt={item.name} /> : <Skeleton animation='wave'
        variant="rectangular"
        width={300}
        height={400}
      />
      }
                </Link>
              <WishlistContainer> { wishlistIcon() } </WishlistContainer>
              </ImageContainer>
                  <TextContainer>

                    {/* =============== Product Price  =============== */}

                    { item ? <ProductPrice className='price'>???4.32</ProductPrice> : <Skeleton animation='wave' sx={{ width: 50}} /> }

                    {/* ============ PRODUCT NAME ============ */}

                    { item ? <ProductName href='#' className='product__name'> {item.title.slice(0, 20)} </ProductName> : <Skeleton animation='wave' sx={{ height: 30}}/> }

                    {/* ============ ADD TO CART BUTTON ============ */}
                    { item ? <> { inCart ? <Button onClick={() => addToCart() } className='green__button__white add-to-cart'> Add to Cart </Button> : <Button onClick={() => removeFromCart() } className='green__button__white add-to-cart'> Remove </Button> } </> : <Skeleton animation='wave' sx={{ width: 100, height: 50}} />}

                  </TextContainer>
                </ItemContainer>
  )
}

export default FullCard;