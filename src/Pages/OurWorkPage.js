import React from 'react';
import { Link } from 'react-router-dom';

// styled components
import styled from 'styled-components';



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
                <Link>
                    <img src={athlete} alt="athlete" />
                </Link>
            </MovieStyled>



            <MovieStyled>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link>
                    <img src={theracer} alt="racer" />
                </Link>
            </MovieStyled>



            <MovieStyled>
                <h2>The Good Times</h2>
                <div className="line"></div>
                <Link>
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
    .line{
        margin-bottom: 3rem;
        height: 0.3rem;
        background: #ccc;
    }
`

export default OurWorkPage
