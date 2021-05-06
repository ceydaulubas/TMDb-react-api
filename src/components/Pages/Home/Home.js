import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import MovieLists from './MovieLists';

require('dotenv').config()

const Home = (props) => {
    const [searchBarInput, setSearchBarInput] = useState("");
    const [popularMovieListResults, setPopularMovieListResults] = useState([]);
    const [topRatedMovieListResults, setTopRatedMovieListResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});



    const handleSearchForMovie = () => {
        // const searchInput = searchBarInput ? searchBarInput : 'love';

        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then((popularMovieResults) => setPopularMovieListResults(popularMovieResults.data.results))
            .catch((error) => console.error(`Someting went wrong: ${error} in popular movie part`));

        axios
            .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then((topRatedMovieListResults) => setTopRatedMovieListResults(topRatedMovieListResults.data.results))
            .catch((error) => console.error(`Someting went wrong: ${error} in top rated movie part`));

    };

    useEffect(handleSearchForMovie, [searchBarInput],);

    const handleAddSearchBar = (searchInput) =>
        setSearchBarInput(searchInput);

    return (
        <div>
            <SearchBar addSearchInput={handleAddSearchBar} />
            {(popularMovieListResults.length === 0) || (topRatedMovieListResults.length === 0) ? (
                null
            ) :
                <MovieLists
                    popularMovieListResults={popularMovieListResults}
                    topRatedMovieListResults={topRatedMovieListResults} />

            }

        </div>
    )

}

export default Home
