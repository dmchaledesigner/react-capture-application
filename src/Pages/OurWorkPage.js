import React from 'react';
import { Link } from 'react-router-dom';

// styled components
import styled from "styled-components/macro";



// images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';



const OurWorkPage = () => {
    return (
        <WorkStyled>
            <MovieStyled>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="athlete" />
                </Link>
            </MovieStyled>



            <MovieStyled>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="racer" />
                </Link>
            </MovieStyled>



            <MovieStyled>
                <h2>The Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="Good Times" />
                </Link>
            </MovieStyled>
        </WorkStyled>
    )
}


const WorkStyled = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
`

const MovieStyled = styled.div`
    padding-bottom: 10rem;

    h2{
        font-size: 3rem;
        color: #fff;
        font-weight: bold;
    }
    .line{
        width: 100%;
        background: #23d597;
        height: 0.3rem;
        margin: 2rem 0rem;
    }

    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default OurWorkPage
