import React from 'react';
import textToUse from '../assets/Text';
import "../styles/Header.css";

function Header() {


    return (
        <>
            <div className='header-container'>
                <h1 className='destination-title-main'>{textToUse.headline}</h1>
            </div>
        </>
    );
}

export default Header;