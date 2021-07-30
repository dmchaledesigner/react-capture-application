import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { HideStyled } from '../styles/reusableStyles'
//Images
import athelete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';



const OurWork = () => {
    return (
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to='/work/the-athelete'>
                    <HideStyled>
                        <img src={athelete} alt="athelete" />
                    </HideStyled>
                </Link>
            </Movie>

            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to='/work/the-racer'>
                    <HideStyled>
                        <img src={theracer} alt="the racer" />
                    </HideStyled>
                </Link>
            </Movie>

            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to='/work/good-times'>
                    <HideStyled>
                        <img src={goodtimes} alt="goodtimes" />
                    </HideStyled>
                </Link>
            </Movie>



        </Work>
    )
}


const Work = styled.div`
            min-height: 100vh;
            overflow: hidden;
            padding: 5rem 10rem;
            h2 {
                padding: 1rem 0rem;
                }
            @media screen(max-width: 1500px) {
                padding: 2rem 2rem;
             }
}`;

const Movie = styled.div`
            padding-bottom: 10rem;

            h2{
            color: #fff;
            }
            .line {
            height: 0.5rem;
            background: #23d997;
            margin-bottom: 3rem;
  }
            img {
            width: 100%;
            height: 70vh;
            object-fit: cover;
  }
  `;


//Frame Animation
// const Frame1 = styled.div`
//             position: fixed;
//             left: 0;
//             top: 10%;
//             width: 100%;
//             height: 100vh;
//             background: #fffebf;
//             z-index: 2;
//             `;
// const Frame2 = styled.div`
//             background: #ff8efb;
//             `;
// const Frame3 = styled.div`
//             background: #8ed2ff;
//             `;
// const Frame4 = styled.div`
//             background: #8effa0;
//             `;



export default OurWork
