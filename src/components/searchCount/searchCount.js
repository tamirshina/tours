import React from 'react';
import textToUse from '../../assets/Text';
import { ResultCount } from './SearchCountStyle';

const SearchCount = ({ resultCount, datalength }) => {

    return (
        <>
            <ResultCount className='result-count'>{textToUse.out + ' ' + resultCount + ' ' + textToUse.show + ' ' + datalength} </ResultCount>
        </>
    );
}
export default SearchCount;