import React from "react";
import { UilListUiAlt, UilBitcoin, UilSearch, UilUser, UilTimes } from '@iconscout/react-unicons';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Favorite from '@mui/icons-material/Favorite';
import { motion } from 'framer-motion'


// =============  STYLED COMPONENT  ============
const Navbar = styled.nav`
  grid-area: 'nav';
  position: fixed;
  display: none;
  width: 100%;
  height: 104px;
  background-color: var(--light-color);
  display: grid;
  place-items: center;
  z-index: 5;
  overflow: hidden;
`
const NavContainer = styled.div`
  position: relative;
  height: 100%;
  width: 1232px;
  display: grid;
  place-items: center;
  & .logo {
    &:active {
    transform: scale(.9);
    transition: all .2s ease;
  }
  }
  & ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  height: 80%;
  & .wishlist {
    &:hover {
      color: var(--accent-color);
    }
  }
  };
`
const MenuToggleOpen = styled.div`
  display: block;
  flex: 1;
  &:active {
    transform: scale(.8);
    transition: all .2s ease;
  }
`
const MenuToggleClose = styled.div`
  display: none;
  flex: 1;
  &:active {
    transform: scale(.9);
  }
`
const NavSearchBar = styled.div`
  position: relative;
  width: 450px;
  height: 43px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--light-fill);
  overflow: hidden;
  border-radius: 10px;
  flex: 4;
  transition: all .4s ease;
  &:active {
    transform: scale(.9);
  }
  &:hover {
    color: var(--accent-color);
    background-color: var(--light-accent-color);
  }
`
const SearchInput = styled.input `
  position: relative;
  height: 100%;
  width: 90%;
  background-color: transparent;
  border: none;
  font-size: var(--text-font);
  color: var(--dark-text-color);
`
const UserContainer = styled.div `
  display: inline-flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  flex: 1;
  &:hover {
    color: var(--accent-color);
  }
  &:active {
    transform: scale(.8);
    transition: all .5s ease;
  }
`
const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  column-gap: 1rem;
  flex: 1;
  &:hover {
    color: var(--accent-color);
  }
  & p {
    font-size: var(--text-font);
    cursor: pointer;
  }
  &:active {
    transform: scale(.8);
    transition: all .5s ease;
  }
  `
const WishlistContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  flex: 1;
  &:active {
    transform: scale(.8);
    transition: all .5s ease;
  }
  &:hover {
    color: var(--accent-color);
  }
  & p {
    cursor: pointer;
    column-gap: 1rem;
  }
  & .icon {
    color: var(--dark-text-color);
  size: 39px;
  &:hover {
    color: var(--accent-color);
  }
  }

`






// ============  JSX COMPONENT =============

export const NavbarComponent = ({ cart, wishlist }) => {


// Handles the Logic
  function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}


// Returns the cart button
const cartBadge = () => {
  return (
    <IconButton className="wishlist" aria-label={notificationsLabel(100)}>
      <Badge badgeContent={ cart.length } color='primary'>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}



  // ======================  START WISHLIST =====================

  
  const wishlistBadge = () => {
  return (
    <IconButton className="wishlist" aria-label={notificationsLabel(100)}>
      <Badge badgeContent={ wishlist.length } color="primary">
        <Favorite />
      </Badge>
    </IconButton>
  );
}

// ==================== END WISHLIST ================

  return (
    <Navbar>
      <NavContainer>
        <ul
        >

          {/* ===========  TOGGLE OPEN  ========== */}
          <motion.li
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: .5, duration: 1.5, type: "spring", bounce: .5 }}
          >
            <a href="#">
            <MenuToggleOpen>
                { <UilListUiAlt size='2rem' className='open__icon' />}
            </MenuToggleOpen>
            </a>
          </motion.li>

          {/* =========  TOGGLE CLOSE  ============ */}
          <motion.li
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: .6, duration: 1.5, type: "spring", bounce: .5 }}
          >
            <a href="#">
              <MenuToggleClose>
                { <UilTimes size='2rem' className='close__icon' />}
              </MenuToggleClose>
            </a>
          </motion.li>
        
        {/* ======== LOGO  ========== */}
          <motion.li
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: .7, duration: 1.5, type: "spring", bounce: .5 }}
          >
            <Link to='/'>
              <div className="logo">
                  { <UilBitcoin color='var(--accent-color)' size='3rem' className='icon' /> }
              </div>
              </Link>
        </motion.li>


      {/* =========  Search Bar  ========= */}
          <motion.li
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: .8, duration: 1.5, type: "spring", bounce: .5 }}
          >
          <NavSearchBar>
              { <UilSearch size='1.2rem' className='icon search_icon' /> }
              <SearchInput placeholder="Search food..." />
          </NavSearchBar>
      </motion.li>

      {/* ====== Navigation Links ========== */}

        {/* ===========  USER ACCOUNT  ============ */}
          <motion.li
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: .9, duration: 1.5, type: "spring", bounce: .5 }}
          >
          <a href="#">
            <UserContainer>
              { <UilUser size='1.5rem' className='user icon' /> }
              <p>Sign in</p>
            </UserContainer>
          </a>
        </motion.li>

        {/* ===========  Wishlist  ============ */}
          <motion.li
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1, duration: 1.5, type: "spring", bounce: .5 }}
          >
          <Link className="wishlist" to='/wishlist'>
            { wishlistBadge() } Wishlist
          </Link>
        </motion.li>
      {/* ============  Shopping cart  ============= */}
          <motion.li
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.1, duration: 1.5, type: "spring", bounce: .5 }}
            className="wishlist">
            {cartBadge()} €34.00
          </motion.li>
      </ul>
    </NavContainer>
    </Navbar>
  )
}
