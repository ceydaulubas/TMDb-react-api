import React from 'react';

import '../../../style/PopularMoviePart.scss';
import {Card} from 'react-bootstrap'

const PopularMovie = (props) => {

    return (
        <div className="row">
         {props.popularMovieListResults.map((movie, id) => (


  

             
                <div className="col-lg-4" key={movie.id}>
                    <div className="card mb-4 shadow-sm">
                        <div className="card-body">
                        <img src= {`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt="popularMovie-image"/>
                            <h5 className="card-title">{movie.title}</h5>
                            <div className="d-flex justify-content-between align-items-center">
                                <h2><span className="badge badge-info">{movie.vote_average}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

         ))}

        </div>
    )
}

export default PopularMovie;