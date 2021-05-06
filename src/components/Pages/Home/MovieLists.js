import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';

import '../../../style/PopularMoviePart.scss';
// import { Card } from 'react-bootstrap'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { IconButton } from '@material-ui/core';



const PopularMovie = (props) => {

    return (
        <div className="mainLayout">

            <div className="title">
                <h2> Popüler Olanlar</h2>
            </div>

            <div>
                <Carousel itemsToShow={5}>
                    {props.popularMovieListResults.map((movie, id) => (
                        <div key={movie.id}>
                            <div className="body">
                                <div><IconButton><MoreHorizIcon /></IconButton></div>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="popularMovie-image" />
                                <div>89% </div>

                                <div className="con">
                                    <h4>{movie.title}</h4>
                                    <h6>{movie.release_date}</h6>
                                </div>

                            </div>
                        </div>

                    ))}
                </Carousel>
            </div>


            <div className="title">
                <h2> En cok Oy alanlar</h2>
            </div>

            <div>
                <Carousel itemsToShow={5}>
                    {props.topRatedMovieListResults.map((movie, id) => (
                        <div key={movie.id}>
                            <div className="body">
                                <div><IconButton><MoreHorizIcon /></IconButton></div>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="popularMovie-image" />
                                <div>89% </div>

                                <div className="con">
                                    <h4>{movie.title}</h4>
                                    <h6>{movie.release_date}</h6>
                                </div>

                            </div>
                        </div>

                    ))}
                </Carousel>
            </div>


        </div>
    )
}

export default PopularMovie;