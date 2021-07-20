import React from 'react';
import homeImg1 from '../img/home1.png';

//import styled comonents = use /macro to get the component name in the class on inspection
import styled from 'styled-components/macro'; // might use later

//import styles from the reusable stylesheet
import { AboutStyled, DescriptionStyled, HideStyled, ImageStyled } from '../styles/reusableStyles'


import { motion } from 'framer-motion';




const AboutSection = () => {
  return (
    <AboutStyled>
      <DescriptionStyled>
        <div className="title">


          <HideStyled>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1, }}
            >We work to meet</motion.h2>
          </HideStyled>

          <HideStyled>
            <h2>your <span>dreams</span></h2>
          </HideStyled>

          <HideStyled>
            <h2> come true</h2>
          </HideStyled>

          <p>Contact us for any photography or videography ideas that you have. We
            have professionals with amazing skills to help you achieve it.</p>

          <button>Contact us</button>
        </div>
      </DescriptionStyled>

      <ImageStyled>
        <img src={homeImg1} alt="some texts" />
      </ImageStyled>
    </AboutStyled>
  )
}


// styled components





export default AboutSection
