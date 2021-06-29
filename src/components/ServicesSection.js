import React from 'react';


import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

// styled components imports 
import { AboutStyled, DescriptionStyled, ImageStyled } from '../styles';
// we need this line to add to the AboutStyled as a para for modifying this styled import
import styled from 'styled-components/macro';



const ServicesSection = () => {
    return (
        <ServicesStyled>
            <DescriptionStyled>
                <h2>High <span>QUALITY</span> services</h2>
                <CardWrapStyled>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Dolore aliquyam amet et labore.</p>
                    </Card>


                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon" />
                            <h3>TeamWork</h3>
                        </div>
                        <p>Dolore aliquyam amet et labore.</p>
                    </Card>


                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Dolore aliquyam amet et labore.</p>
                    </Card>


                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="icon" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Dolore aliquyam amet et labore.</p>
                    </Card>

                </CardWrapStyled>

            </DescriptionStyled>

            <ImageStyled>
                <img src={home2} alt="home2" />
            </ImageStyled>
        </ServicesStyled>
    )
};



// add new modified styles

// pass in the parameter here of the aboutstyled to get existing styles,
// then use the ServiceStyled function in the JSX as a tag
const ServicesStyled = styled(AboutStyled)` 

        h2{
            margin-bottom: 5rem;
            font-size: 3rem;
            padding: 2rem 0rem 4rem 0rem;
        }
`;



const CardWrapStyled = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
`;


const Card = styled.div`
    flex-basis: 15rem;
        .icon{
            display: flex;
            align-items: center;

            h3{
                margin-left: 1rem;
            }
        }

        p{
            padding-top: 0;
            margin-top: 1rem;
            font-size: 1rem;
        }
`

export default ServicesSection
