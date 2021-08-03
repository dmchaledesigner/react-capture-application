import React from 'react';
import homeImg1 from '../img/home1.png';

import { Link } from 'react-router-dom';



//import styled comonents = use /macro to get the component name in the class on inspection
import styled from 'styled-components/macro';
//import styles from the reusable stylesheet
import { AboutStyled, DescriptionStyled, HideStyled, ImageStyled } from '../styles/reusableStyles';
// animation and imported animations
import { motion } from 'framer-motion'

import { titleAnimation, titleContainer } from '../animation/animation';




const AboutSection = () => {



  return (
    <AboutStyled>
      <DescriptionStyled>
        <motion.div className="title" variants={titleContainer} initial="hidden" animate="show">
          <HideStyled>
            <motion.h2 variants={titleAnimation} initial="hidden" animate="show">We work to meet</motion.h2>
          </HideStyled>

          <HideStyled>
            <motion.h2 variants={titleAnimation} initial="hidden" animate="show">your <span>dreams</span></motion.h2>
          </HideStyled>

          <HideStyled>
            <motion.h2 variants={titleAnimation} initial="hidden" animate="show"> come true</motion.h2>
          </HideStyled>

          <p>Contact us for any photography or videography ideas that you have. We
            have professionals with amazing skills to help you achieve it.</p>

          <LinkStyled>
            <Link to="/work">Contact us</Link>
          </LinkStyled>
        </motion.div>
      </DescriptionStyled>

      <ImageStyled>
        <img src={homeImg1} alt="some texts" />
      </ImageStyled>
    </AboutStyled>
  )
}






// styled components

const LinkStyled = styled.button`
  a{
    color: white;
    text-decoration: none;
  }
`





export default AboutSection
