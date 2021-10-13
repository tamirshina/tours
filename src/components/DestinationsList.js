import React from 'react';
import DestinationItem from './destinationItem/DestentionItem';

function DestinationsList({ filteredResults }) {


    return (
        <>
            {(filteredResults.map((item) => {

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
        </>
    );
}

export default DestinationsList;