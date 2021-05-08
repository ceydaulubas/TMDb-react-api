import React from 'react';
import Carousel from 'react-elastic-carousel';
import { Link } from "react-router-dom";

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { IconButton } from '@material-ui/core';

import '../../../style/MovieList.scss';

const MovieList = (props, detailOfMovie) => {

    return (
        <div className="mainLayout">

            {/* POPULAR MOVIE PART */}
            <div className="part1">
                <div className="head">
                    <h2> What's Popular</h2>
                </div>

                <div className="table">
                    <Carousel itemsToShow={6}>
                        {props.popularMovieListResults.map((movie) => (
                            <div key={movie.id}>
                                <div className="body">
                                    <div className="shape"><IconButton><MoreHorizIcon style={{ color: 'white' }} /></IconButton></div>
                                    <Link to={`/movie/${movie.id}`}>
                                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                                            alt="popularMovieImage"
                                        /></Link>
                                    <div className="ratioCircle"><p className="ratioNum">{movie.vote_average}</p></div>
                                    <div className="title">
                                        <h4>{movie.title}</h4>
                                        <p>{movie.release_date}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

            {/* TOP RATED MOVIE PART */}
            <div>
                <div className="head">
                    <h2> Top Rated</h2>
                </div>

                <div className="table">
                    <Carousel itemsToShow={6}>
                        {props.topRatedMovieListResults.map((movie, id) => (
                            <div key={movie.id}>
                                <div className="body">
                                    <div className="shape"><IconButton><MoreHorizIcon style={{ color: 'white' }} /></IconButton></div>
                                    <Link to={`/movie/${movie.id}`}>
                                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="topRatedMovieImage" />
                                    </Link>
                                    <div className="ratioCircle"><p className="ratioNum">{movie.vote_average}</p></div>

                                    <div className="title">
                                        <h4>{movie.title}</h4>
                                        <p>{movie.release_date}</p>
                                    </div>

                                </div>
                            </div>

                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default MovieList;