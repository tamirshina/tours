import React from 'react';
import textToUse from '../../assets/Text';
import { ResultCount } from './SearchCountStyle';

const SearchCount = ({ resultCount, dataLength }) => {

    return (
        <>
            <ResultCount>{textToUse.out + ' ' + resultCount + ' ' + textToUse.show + ' ' + dataLength} </ResultCount>
        </>
    );
}
export default SearchCount;