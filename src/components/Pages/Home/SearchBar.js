import React, { useState } from 'react';
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
        return (

<div className="searchpage">
    <div className="welcome">
        <h2>Hoşgeldiniz.</h2>
        <h3>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</h3>
    </div>
    <div >
        <form onSubmit={handleFormSubmit} className="container">
            <input
              type="text"
              name="search"
              placeholder="Film,dizi,kisi ara..."
              value={searchState.userInput}
              onChange={handleInputChange}
            />
            <button type="submit">Search</button>
          </form>
          </div>
</div>

        );
    }

    export default SearchBar;