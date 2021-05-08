import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap'

import '../../../style/MovieDetail.scss';
import { IconButton } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StarIcon from '@material-ui/icons/Star';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
                backgroundImage: `url(${`https://www.themoviedb.org/t/p/w1280/${details.backdrop_path}`}) `,
                backgroundPosition: 'right -20% top',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="transparency">

                <Container>
                    <Row>
                        <Col sm={4} className="leftPart">
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${details.poster_path}`} alt="popularMovieImage" />
                        </Col>
                        <Col sm={8}>
                            <div className="rightPart">
                                <h1>{details.title}</h1>

                                   <p>{details.release_date} • {details.runtime}m</p>
  
                                
                                <div className="circle">
                                    <p className="ratioNum">{details.vote_average}</p>
                                    <p className="voteAverage">Vote Average</p>
                                    <div>
                                        <IconButton className="iconCircle"> <ListIcon style={{ color: 'white' }} /></IconButton>
                                        <IconButton className="iconCircle2"> <FavoriteIcon style={{ color: 'white', fontSize: 'small' }} /></IconButton>
                                        <IconButton className="iconCircle3"> <BookmarkIcon className=" bookMark" style={{ color: 'white', fontSize: 'small' }} /></IconButton>
                                        <IconButton className="iconCircle4"> <StarIcon style={{ color: 'white', fontSize: 'small' }} /></IconButton>
                                        <IconButton className="iconCircle5"> <PlayArrowIcon style={{ color: 'white' }} /> <p className="playTitle">Play Trailer</p> </IconButton>


                                    </div>
                                </div>

                                <p> {details.name}</p>

                                <p style={{ textTransform: 'capitalize' }}><i>{details.tagline}</i></p>
                                <h4>Overview</h4>
                                <p> {details.overview} </p>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>


        </div>


    )
}

export default MovieDetail;