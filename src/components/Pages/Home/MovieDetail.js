import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap'

import '../../../style/MovieDetail.scss';

const MovieDetail = (props) => {

    const [details, setDetails] = useState({});

    console.log('details', details);
    console.log("props.match.params", props.match.params);


    const getSingleMovie = () => {

        console.log(props.match.params);
        // get the 'id' from url via 'props.match.params' object
        const { id } = props.match.params;
        // api call to the server to retrieve a single object

        axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then((responseFromApi) => {
                setDetails(responseFromApi.data);
            })
            .catch((error) => console.error(error));
    };

    useEffect(getSingleMovie, [props.match.params]);

    return (

        <div className="detail"
            style={{
                backgroundImage: `url(${`https://www.themoviedb.org/t/p/w220_and_h330_face/${details.poster_path}`}) `,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}>

            <Container>
                <Row>
                    <Col sm={4}>
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${details.backdrop_path}`} alt="popularMovieImage" />
                    </Col>
                    <Col sm={8}>
                    <div>
                        <p>{details.title}</p>
                        <section>{details.release_date} </section>
                        <p> {details.name}</p>

                        <p style={{ textTransform: 'capitalize' }}>{details.overview}</p>
                        <h2>Overview</h2>
                        <p> {details.overview} </p>
                    </div>
                        
                    </Col>
                </Row>
            </Container>


        </div>


    )
}

export default MovieDetail;