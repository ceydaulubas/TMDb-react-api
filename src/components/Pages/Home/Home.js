import React, {useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import PopularMovie from './PopularMovie';

require('dotenv').config()

const Home = (props) => {
    const [searchBarInput, setSearchBarInput] = useState("");
    const [popularMovieListResults, setPopularMovieListResults] = useState([]);
    const [freeToWatchmovieListResults, setFreeToWatchmovieListResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});



    const handleSearchForMovie = () => {
        // const searchInput = searchBarInput ? searchBarInput : 'love';

        axios
            .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then((popularMovieResults) => setPopularMovieListResults(popularMovieResults.data.results))
            .catch((error) => console.error(`Someting went wrong: ${error} in popular movie part`));

    };

    useEffect(handleSearchForMovie, [searchBarInput],);

    const handleAddSearchBar = (searchInput) =>
    setSearchBarInput(searchInput);

    return (
        <div>
            <SearchBar addSearchInput={handleAddSearchBar} />
            {(popularMovieListResults.length === 0) ? (
                    null
                ) :
            <PopularMovie popularMovieListResults={popularMovieListResults}/>
            
            }
        </div>
    )

}

export default Home
