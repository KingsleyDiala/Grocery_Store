import React from "react";
import { UilListUiAlt, UilBitcoin, UilSearch, UilUser, UilTimes } from '@iconscout/react-unicons';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Favorite from '@mui/icons-material/Favorite';


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
        <ul>

          {/* ===========  TOGGLE OPEN  ========== */}
          <li>
            <a href="#">
            <MenuToggleOpen>
                { <UilListUiAlt size='2rem' className='open__icon' />}
            </MenuToggleOpen>
            </a>
          </li>

          {/* =========  TOGGLE CLOSE  ============ */}
          <li>
            <a href="#">
              <MenuToggleClose>
                { <UilTimes size='2rem' className='close__icon' />}
              </MenuToggleClose>
            </a>
          </li>
        
        {/* ======== LOGO  ========== */}
        <li>
            <Link to='/'>
              <div className="logo">
                  { <UilBitcoin color='var(--accent-color)' size='3rem' className='icon' /> }
              </div>
              </Link>
        </li>


      {/* =========  Search Bar  ========= */}
      <li>
          <NavSearchBar>
              { <UilSearch size='1.2rem' className='icon search_icon' /> }
              <SearchInput placeholder="Search food..." />
          </NavSearchBar>
      </li>

      {/* ====== Navigation Links ========== */}

        {/* ===========  USER ACCOUNT  ============ */}
        <li>
          <a href="#">
            <UserContainer>
              { <UilUser size='1.5rem' className='user icon' /> }
              <p>Sign in</p>
            </UserContainer>
          </a>
        </li>

        {/* ===========  Wishlist  ============ */}
        <li>
          <Link className="wishlist" to='/wishlist'>
            { wishlistBadge() } Wishlist
          </Link>
        </li>
      {/* ============  Shopping cart  ============= */}
      <li className="wishlist"> { cartBadge() } €34.00</li>
      </ul>
    </NavContainer>
    </Navbar>
  )
}
