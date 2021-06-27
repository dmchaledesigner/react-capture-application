import React from 'react';
import home1 from '../img/home1.png'; // DO NOT use curly braces as iamges are NOT a named export like from an exported function - its only a filetype



// styled import
import styled from "styled-components";




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
                <img src={home1} alt="hero image guy" />
            </ImageStyled>

        </AboutStyled>
    )
}




// styled Components
const AboutStyled = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;

        h2{
            color: white;
        }
`;


const DescriptionStyled = styled.div`
    flex: 1;
    padding-right: 5rem;

        h2{
            font-weight: lighter;
        }
`;


const HideStyled = styled.div`
    overflow: hidden;
`;


const ImageStyled = styled.div`
        flex: 1;
        overflow:hidden;

            img{
                width: 100%;
                height: 80vh;
                object-fit: cover;
            }
`;





export default AboutSection
