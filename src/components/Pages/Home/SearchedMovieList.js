import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

import '../../../style/SearchMovieList.scss';

const SearchedMovieList = (props) => {
    return (
        <div className="layout">

            {props.searchedMovieResult.map((item, id) => (
                <div key={item.id}>
                    <Container className="table">
                        <Row>
                            <Col><img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.backdrop_path}`} alt="selectedMoviemage" /> </Col>
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
