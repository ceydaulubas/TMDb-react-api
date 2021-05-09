import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";

import '../../../style/SearchMovieList.scss';
import SearchBar from './SearchBar';


const SearchedMovieList = ({searchedMovieResult}) => {

    // const [searchBarInput, setSearchBarInput] = useState("");
    // const [searchedMovieResult, setSearchedMovieResult] = useState([]);


    // const handleSearchForMovie = () => {
    //     const searchInput = searchBarInput
    //         ? searchBarInput : 'love';


    //     axios
    //         .get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchInput}`)
    //         .then((searchedMovie) => setSearchedMovieResult(searchedMovie.data.results))
    //         .catch((error) => console.error(`Someting went wrong: ${error} in searchbar part`));
    // };


    // useEffect(handleSearchForMovie, [searchBarInput]);

    // const handleAddSearchBar = (searchInput) =>
    //     setSearchBarInput(searchInput);

    return (


        <div className="layout">
            {/* <SearchBar addSearchInput={handleAddSearchBar} /> */}

            {searchedMovieResult.map((item, id) => (
                <div key={item.id}>
                    <Container className="table">
                        <Row>
                            <Col>
                            <Link to={`/movie/${item.id}`}>
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.backdrop_path}`} alt="selectedMoviemage" /> 
                            </Link>
                            </Col>
                            <Col xs={10}>
                                <h5>{item.title}</h5>
                                <h6>{item.release_date}</h6>
                                <p> {item.overview}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            ))}

        </div>

    );
};

export default SearchedMovieList;
