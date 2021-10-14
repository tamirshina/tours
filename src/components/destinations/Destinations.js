import React, { useState } from 'react';
import DestinationsList from '../DestinationsList';
import Search from '../search/Search';
import SearchCount from '../searchCount/searchCount';
import { DestinationsContainer } from './DestinationsStyle';

function Destinations({ data }) {

    const [filteredResults, setFilteredResults] = useState([]);
    const [resultCount, setResultCount] = useState('');
    const [searchTerm, setSearchTerm] = useState('');


    const searchItems = (searchValue) => {

        setSearchTerm(searchValue);

        if (searchTerm !== '') {

            const filteredData = data.filter((item) => {
                return item.Title.toLowerCase().includes(searchValue.toLowerCase())
            })
            setFilteredResults(filteredData);
            setResultCount(filteredData.length);
        } else {
            setFilteredResults(data);
        }
    }

    const dataToUse = () => {

        return searchTerm.length > 1 ? filteredResults : data;
    }


    const isShowCount = () => {

        return searchTerm === '' ? false : true;

    }

    const destinationsList = () => {
        return (
            <DestinationsList filteredResults={dataToUse()} />
        );
    }

    return (
        <>
            <Search searchTerm={searchTerm} searchItems={searchItems} />

            {isShowCount() && <SearchCount resultCount={resultCount} dataLength={data.length} />}

            <DestinationsContainer>
                {destinationsList()}
            </DestinationsContainer>
        </>
    );
}

export default Destinations;