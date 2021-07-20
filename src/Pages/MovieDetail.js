import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

import { MovieState } from '../data/MovieState.js'; // remember to use {} as its a returned xport function


const MovieDetail = () => {

    //movie state
    const [movies, setMovies] = useState(MovieState); // console.log(movies);
    const [movie, setMovie] = useState(null);


    // test use history
    const history = useHistory(); //console.log(history)
    const url = history.location.pathname; // gets the url path



    const getCurrentMovie = (url) => {
        const currentMovie = movies.filter(movie => movie.url === url)
        setMovie(currentMovie[0])

    }


    useEffect(() => {
        getCurrentMovie(url)
    }, [movies, url]) // evoke function once the movies or url changes








    return (
        <div>
            <h1>Movie Detail</h1>
        </div>
    )
}

export default MovieDetail
