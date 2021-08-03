import React, { useState } from 'react';
import styled from 'styled-components/macro';


import { motion } from 'framer-motion';


const Toggle = ({ children, title }) => {


  const [toggle, setToggle] = useState(false);


  return (

    <StyledToggle
      className="question"
      layout
      onClick={() => setToggle(!toggle)}>

      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ''}

      <div className="faq-line"></div>

    </StyledToggle>
  );
};

const StyledToggle = styled(motion.div)`
  cursor: pointer;
    &::focus {
    outline: none;
    &::focus-visible {
    outline: none;
    }
 
}
  h4 {
    padding: 0rem 0rem;
    &::focus {
    outline: none;
    &::focus-visible {
    outline: none;
    }
  }
`;

export default Toggle;
