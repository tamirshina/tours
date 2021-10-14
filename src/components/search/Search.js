import React from 'react';
import { SearchBar } from './SearchStyle';

const Search = ({ searchTerm, searchItems }) => {

    return (
        <>
            <SearchBar
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