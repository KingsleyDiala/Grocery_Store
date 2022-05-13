import styled from "styled-components";
import React, { useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

// STYLED COMPONENTS
const ItemContainer = styled.div`
  height: 457px;
  width: 192px;
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
      border: 5px solid var(--light-accent-color);
      transition: all .3s ease;
    }
  }
  `
const ImageContainer = styled.div`
  position: relative;
  height: 280px;
  width: 100%;
  background-color: var(--light-color);
  position: relative;
  display: grid;
  place-content: center;
  overflow: hidden;
  border: 4px solid var(--light-grey-color);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
const WishlistContainer = styled.div`
position: absolute;
`
const Image = styled.img`
position: relative;
height: auto;
width: 100%;
`
const TextContainer = styled.div`
  padding: 0 1rem;
`
const ProductName = styled.a`
  line-height: 1.5rem;
  cursor: pointer;
  `
const ProductPrice = styled.p`
  color: var(--accent-color);
  font-weight: 700;
`
const Button = styled.a`
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
  display: none;
  &:active {
    transform: scale(.9);
  }
`







// JSX STRUCTURE

export const HalfCard = ({ Cart, setCart, index, setWishlist, item}) => {

  const [inCart, setInCart] = useState(true)

    // Add item to Cart
  const addToCart = () => {
    setCart(prev => [...prev, item])
    setInCart(() => !inCart)
  }


  // Remove item from cart on second click
  const removeFromCart = () => {
    setCart(prev => prev.filter(product => product.id !== item.id))
    setInCart(() => !inCart)
  }



  // ================= WISHLIST CHECK ICON ============
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  function IconCheckboxes(product) {
  return (
    <div>
      <Checkbox 
      onClick={(e) => handleWishlistClick(e)}
      {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}
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



  return (
    <ItemContainer key={index}>
      <ImageContainer className="image__container">
        <Link to={`/product/${item.id}`}>
          { item.image ? <Image alt={item.title} src={item.image} /> : <Skeleton
          animation='wave'
          variant="rectangular"
          width={300}
          height={400}
      /> }
      </Link>
        <WishlistContainer> { IconCheckboxes(item) } </WishlistContainer>
      </ImageContainer >
          <TextContainer>
            { item ? <ProductPrice className='price'>€9.32</ProductPrice> : <Skeleton width={60} height={30} /> }
            {item ? <Link to={`/product/${item.id}`}><ProductName className='product__name'>{item.title.slice(0, 15)}</ProductName> </Link> : <Skeleton height={30} />}
            { item ? <> { inCart ? <Button onClick={() => addToCart() } className='green__button__white add-to-cart'> Add to Cart </Button> : <Button onClick={() => removeFromCart() } className='green__button__white add-to-cart'> Remove </Button> } </> : <Skeleton height={50} width={100} />}
          </TextContainer>
        </ItemContainer>
  )
}


