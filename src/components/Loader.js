import React from 'react';
import logo from '../assets/loader.gif';
import "../styles/FrontPage.css";

function Loader() {

    return (
        <>
            <div className='loading-container'>
                <img src={logo} alt="loading..." className='loading-image' />
            </div>

        </>
    );
}

export default Loader;