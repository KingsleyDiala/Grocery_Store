import React from "react";
import { UilListUiAlt, UilBitcoin, UilSearch, UilUser, UilHeart, UilShoppingCart, UilTimes } from '@iconscout/react-unicons';
import styled from 'styled-components'
import { Link } from "react-router-dom";


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
  & ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  height: 80%;
  };
`
const MenuToggleOpen = styled.div`
  display: block;
  flex: 1;
`
const MenuToggleClose = styled.div`
  display: none;
  flex: 1;
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
  `
const WishlistContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  flex: 1;
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

export const NavbarComponent = () => {
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
          <a href="#">
            <WishlistContainer>
              { <UilHeart size='1.5rem' className='icon' /> }
              <p>wishlist</p>
            </WishlistContainer>
          </a>
        </li>
      {/* ============  Shopping cart  ============= */}
      <li>
        <a href="#">
          <CartContainer>
            { <UilShoppingCart size='1.5rem' className='icon' /> }
            <p>€0.00</p>
          </CartContainer>
        </a>
      </li>
      </ul>
    </NavContainer>
    </Navbar>
  )
}
