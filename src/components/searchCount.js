import React from 'react';
import textToUse from '../assets/Text';

const SearchCount = ({ resultCount, datalength }) => {

    return (
        <>
            <span className='result-count'>{textToUse.out + ' ' + resultCount + ' ' + textToUse.show + ' ' + datalength} </span>
        </>
    );
}
export default SearchCount;