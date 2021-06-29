import React from 'react';

//import images
import home1 from '../img/home1.png'; // DO NOT use curly braces as iamges are NOT a named export like from an exported function - its only a filetype



// get the global styled compontent exports from the styles.js file
// note: after we use inline styled components we can delete the styled import line from here
import { AboutStyled, DescriptionStyled, HideStyled, ImageStyled } from '../styles';



const AboutSection = () => {

    return (
        <AboutStyled>
            <DescriptionStyled>
                <div className="title">

                    <HideStyled>
                        <h2>We work to make</h2>
                    </HideStyled>

                    <HideStyled>
                        <h2>your <span>dreams</span> come</h2>
                    </HideStyled>

                    <HideStyled>
                        <h2>true</h2>
                    </HideStyled>

                </div>

                <p>Contact us for any photography or any videography ideas that you have</p>
                <button>Contact Us</button>
            </DescriptionStyled>

            <ImageStyled>
                <img src={home1} alt="hero" />
            </ImageStyled>

        </AboutStyled>
    )
};







export default AboutSection
