import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useLocation } from 'react-router-dom';



const Nav = () => {
  const { pathname } = useLocation(); // gets the pathnname directly from the hook
  // console.log(pathname);

  return (
    <StyledNav>
      <h1><Link to="/">Logo</Link></h1>
      <ul>
        <li><Link to="/">1. About</Link>
          <LineStyled
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '50%' : '0%' }}
            transition={{ duration: 0.5 }}
          />
        </li>
        <li><Link to="/work">2. Our Work</Link>
          <LineStyled
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '50%' : '0%' }}
            transition={{ duration: 0.5 }}
          /></li>
        <li><Link to="/contact">3. Contact Us</Link>
          <LineStyled
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
            transition={{ duration: 0.5 }}
          /></li>
      </ul>

    </StyledNav>
  )
}


const LineStyled = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 5%;
  position: absolute;
  bottom: -80%;
  left: 50%;
  @media (max-width: 1500px) {
    right: 0%;
  }
`;



const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  @media screen(max-width: 1500px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

export default Nav
