import React from 'react';
// import laptop from './laptop.png';

function ContentItem({ name, image }) {

    // console.log(image)

    return(
        <>
        <div>
            <img src={image} alt="Thumbnail"/>
            <h2>{name}</h2>
        </div>
        </>
    )
}

export default ContentItem;