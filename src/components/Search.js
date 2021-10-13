import React from 'react';

const Search = ({ searchTerm, searchItems }) => {

    return (
        <>
            <input
                className='search-input'
                type="text"
                placeholder="חיפוש"
                value={searchTerm}
                onChange={(e) => searchItems(e.target.value)}
            />
        </>
    );
}
export default Search;