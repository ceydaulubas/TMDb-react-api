import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

import '../../../style/SearchMovieList.scss';

const SearchedMovieList = ({searchedMovieResult}) => {

    return (
        <div className="layout">

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
