import React from 'react';
import textToUse from '../assets/Text';
import "../styles/Header.css";

function Header({ searchTerm, handleChange, resultCount, initialResultCount }) {


    const isShowCount = () => {

        if (initialResultCount === resultCount || searchTerm === '') {
            return false;
        } else {
            return true;
        }
    }


    return (
        <>
            <div className='header-container'>
                <h1 className='destination-title-main'>{textToUse.headline}</h1>
                <input
                    className='search-input'
                    type="text"
                    placeholder="חיפוש"
                    value={searchTerm}
                    onChange={(e) => handleChange(e.target.value)}
                />
                {isShowCount() ? <span className='result-count'>{textToUse.out + ' ' + resultCount + ' ' + textToUse.show + ' ' + initialResultCount} </span> : null}
            </div>
        </>
    );
}

export default Header;