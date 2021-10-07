
import React from "react";
import "../App.css";

function DestinationItem({ titleToInsert, id, imageUrl }) {

    return (
        <>
            <div className={'destination-box'}
                id={id} >
                <div className='box-content'>
                    <img src={imageUrl} alt="pin" className='destination-image' />
                    <span className='destination-title'>{titleToInsert}</span>
                </div>
            </div>
        </>
    );
}

export default DestinationItem;
