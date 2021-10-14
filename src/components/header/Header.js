import React from 'react';
import textToUse from '../../assets/Text';
import { HeaderContainer } from './HeaderStyle';

function Header() {


    return (
        <>
            <HeaderContainer className='header-container'>
                <h1>{textToUse.headline}</h1>
            </HeaderContainer>
        </>
    );
}

export default Header;