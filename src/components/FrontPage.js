import React, { useEffect, useState } from 'react';
import DestinationItem from './DestentionItem';
import fetchData from '../api/FetchData';
import Header from './Header';
import Loader from './Loader';
import "../styles/FrontPage.css";

function FrontPage() {

    const [dataToShow, setDataToShow] = useState([]);
    const [isDataReady, setIsDataReady] = useState(false);
    const [filteredResults, setFilteredResults] = useState([]);
    const [resultCount, setResultCount] = useState('');
    const [searchTerm, setSearchTerm] = React.useState('');

    useEffect(() => {
        getAllData();
    }, []);

    async function getAllData() {

        const allData = await fetchData()

        setDataToShow(allData[0].Promotions);
        setIsDataReady(true);
    }

    const searchItems = (searchValue) => {

        setSearchTerm(searchValue);

        if (searchTerm !== '') {

            const filteredData = dataToShow.filter((item) => {
                return item.Title.toLowerCase().includes(searchValue.toLowerCase())
            })
            setFilteredResults(filteredData);
            setResultCount(filteredData.length);
        } else {
            setFilteredResults(dataToShow);
        }
    }

    const dataToUse = () => {

        return searchTerm.length > 1 ? filteredResults : dataToShow;
    }

    return (
        <>
            <div className='discover-block'>

                <Header searchTerm={searchTerm} handleChange={searchItems} resultCount={resultCount} initialResultCount={dataToShow.length} />

                <div className='destinations-container'>

                    {!isDataReady ?
                        <Loader />
                        :
                        (dataToUse().map((item) => {

                            let imageUrl = item.Img.replace('{0}', 'Maximal')

                            return (
                                <DestinationItem
                                    key={item.Id}
                                    titleToInsert={item.Title}
                                    id={item.Id}
                                    imageUrl={imageUrl}
                                />
                            )
                        }))
                    }

                </div>
            </div>
        </>
    );
}

export default FrontPage;