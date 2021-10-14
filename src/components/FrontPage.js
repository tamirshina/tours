import React from 'react';
import useFetch from '../utilities/useFetch';
import Header from './header/Header';
import Loader from './loader/Loader';
import "../styles/FrontPage.css";
import Destinations from './destinations/Destinations';
import config from '../config';

function FrontPage() {

    const { data } = useFetch(config.api.baseUrl)

    return (
        <>
            <div className='discover-block'>

                <Header />
                {
                    !data ?
                        <Loader />
                        :
                        <Destinations data={data} />
                }
            </div>
        </>
    );
}

export default FrontPage;