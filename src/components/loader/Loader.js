import React from 'react';
import logo from '../../assets/loader.gif';
import { LoadingContainer, LoadingImage } from './LoaderStyle';

function Loader() {

    return (
        <>
            <LoadingContainer className='loading-container'>
                <LoadingImage src={logo} alt="loading..." className='loading-image' />
            </LoadingContainer>

        </>
    );
}

export default Loader;