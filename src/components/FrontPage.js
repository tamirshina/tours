import React from 'react';
import useFetch from '../utilities/useFetch';
import Header from './Header';
import Loader from './loader/Loader';
import "../styles/FrontPage.css";
import Destinations from './Destinations';

function FrontPage() {



    const { data } = useFetch('https://api.eshet.com/LandingPage/GetPromotions?pathname=/organized')

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