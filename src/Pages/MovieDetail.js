import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';


//import Data
import { MovieState } from '../movieState.js';


import Award from '../components/Award.js';



const MovieDetail = () => {

    const history = useHistory();
    //console.log(history);

    const url = history.location.pathname;
    //console.log(url);


    const [movies, setMovies] = useState(MovieState); // get all movies from data
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter(item => item.url === url); // if iteration url matches the const url
        // console.log(currentMovie);
        setMovie(currentMovie[0]); // check MovieDetail component to see result when url is typed into browser with url values


    }, [movies, url]) // when the movies are loaded and the url is input into the path, then load


    //console.log(movie);


    return (
        <>
            {movie && ( // we are saying here, wait til the movie loads and then display it
                <DetailStyled>
                    <HeadlineStyled>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt={movie.awards[0].title} />
                    </HeadlineStyled>

                    <AwardsWrapperStyled>
                        {movie.awards.map((awardsData, index) => (
                            <Award key={index} awardsData={awardsData} />

                        ))}
                    </AwardsWrapperStyled>

                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="" />
                    </ImageDisplay>
                </DetailStyled>
            )}
        </>
    )
};


const DetailStyled = styled.div`
color: #fff;
`;


const HeadlineStyled = styled.div`
height: 90vh;
padding-top: 20vh;
position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
        font-family: inherit;
        font-weight: bold;
    }

    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }

`;


const AwardsWrapperStyled = styled.div`
min-height: 30vh;
display: flex;
margin: 5rem 7rem;
align-items: flex-start;
justify-content: space-around;
`;

const ImageDisplay = styled.div`
width: 100%;
min-height: 50vh;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;


export default MovieDetail
