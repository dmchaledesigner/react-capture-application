import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { MovieState } from '../data/MovieState.js'; // remember to use {} as its a returned xport function


const MovieDetail = () => {

    //movie state
    const [movies, setMovies] = useState(MovieState); // console.log(movies);
    const [movie, setMovie] = useState([]);


    // test use history
    const history = useHistory(); //console.log(history)
    const url = history.location.pathname; // gets the url path


    const currentMovie = (url) => {
        const getUrl = movies.filter(item => item.url === url);
        setMovie(getUrl[0]);
        console.log(movie);
    }



    useEffect(() => {
        currentMovie(url)
    }, [url])





    return (
        <div>
            <h1>Movie Detail</h1>

            {movie && <div>{movie.title}</div>}

        </div>
    )
}

export default MovieDetail
