import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieDetail = (props) => {

    const [details, setDetails] = useState({});

    console.log('details', details);
    console.log("props.match.params", props.match.params);

    const getSingleMovie = () => {

        console.log(props.match.params);
        // get the 'id' from url via 'props.match.params' object
        const {id} = props.match.params;
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
        <div>
      <p>{details.title}</p>

    </div>

    )
}

export default MovieDetail;