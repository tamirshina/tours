
import React from "react";
import "../../App.css";
import { DestinationBox, BoxContent, DestinationImage, DestinationTitle } from './DestItemStyle';

function DestinationItem({ titleToInsert, id, imageUrl }) {

    return (
        <>
            <DestinationBox
                id={id} >
                <BoxContent>
                    <DestinationImage src={imageUrl} alt="pin" className='destination-image' />
                    <DestinationTitle className='destination-title'>{titleToInsert}</DestinationTitle>
                </BoxContent>
            </DestinationBox>
        </>
    );
}

export default DestinationItem;
