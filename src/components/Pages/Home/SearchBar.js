import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../../../style/SearchBar.scss'

const initialState = { userInput: "" };

const SearchBar = ({ addSearchInput }) => {

    const [searchState, setSearchState] = useState(initialState);

    // Function handler that checks for the changes in the input fields
    const handleInputChange = (event) => {
        setSearchState(event.target.value);
    };

    // Function handler that handles submitting the form
    const handleFormSubmit = (event) => {
        event.preventDefault();
        addSearchInput(searchState);
        setSearchState(initialState);

    };

    const history = useHistory();


    return (
        <div className="coverimage">
            <div className="searchpage">
                <div className="welcome">
                    <h2>Welcome.</h2>
                    <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                </div>
                <div >
                    <form onSubmit={handleFormSubmit} className="container">

                        <input
                            type="text"
                            name="search"
                            placeholder="Search for a movie, tv show, person......"
                            value={searchState.userInput}
                            onChange={handleInputChange}
                        />
                        <button onClick={()=> history.push("/search?query=event.target.value")} type="submit">Search</button>


                    </form>

                </div>
            </div>
        </div>


    );
}

export default SearchBar;