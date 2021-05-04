import React, {useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

const Home = (props) => {
    const [searchBarInput, setSearchBarInput] = useState("");
    const [trendmovieListResults, setTrendmovieListResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});



    const handleSearchForMovie = () => {

        const API_KEY = "7a4ad99a80b708d7089f9a9a0a0a7ca6";
        // const searchInput = searchBarInput ? searchBarInput : 'love';

        axios
            .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
            .then((trendmovieResults) => setTrendmovieListResults(trendmovieResults.data.results))
            .catch((error) => console.error(`Someting went wrong: ${error} in trend movie part`));

    };

    useEffect(handleSearchForMovie, [searchBarInput]);

    const handleAddSearchBar = (searchInput) =>
    setSearchBarInput(searchInput);

    return (
        <div>
            <SearchBar addSearchInput={handleAddSearchBar} />

        </div>
    )

}

export default Home
