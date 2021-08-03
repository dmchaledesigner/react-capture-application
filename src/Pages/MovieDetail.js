import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

import { MovieState } from '../data/MovieState.js'; // remember to use {} as its a returned xport function
import Award from '../components/Award.js';



const MovieDetail = () => {

    //movie state
    const [movies, setMovies] = useState(MovieState); // console.log(movies);
    const [movie, setMovie] = useState([]);



    // test use history
    const history = useHistory(); //console.log(history)
    const url = history.location.pathname; // gets the url path


    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
    }, [movies, url]);




    return (
        <>

            {movie &&
                <DetailsStyled>


                    <HeadlineStyled>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="main-img" />
                    </HeadlineStyled>


                    <AwardsStyled>
                        {movie.awards && movie.awards.map((award, index) =>
                            <Award award={award} key={index} />
                        )}
                    </AwardsStyled>


                    <SecondaryImageStyled>
                        <img src={movie.secondaryImg} alt="secondary" />
                    </SecondaryImageStyled>


                </DetailsStyled>
            }

        </>
    )
}


const DetailsStyled = styled.div`
    color: white;
`;


const HeadlineStyled = styled.div`
min-height: 90vh;
padding-top: 20vh;
position: relative;
    h2{
        position: absolute;
        transform: translate(-50%, -10%);
        top: 10%;
        left: 50%;
    }

    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;

    }
`;


const AwardsStyled = styled.div`
    min-height: 30vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    justify-content: space-around;
    align-items: center;
    grid-gap: 4rem;
    max-width: 1170px;
    margin: 0 auto;
    margin-top: 5rem;
`


const SecondaryImageStyled = styled.div`
    min-height: 50vh;

    img{
        width: 100%;
        object-fit: cover;

    }
`

export default MovieDetail
