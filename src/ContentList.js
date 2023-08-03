import React from 'react';
import ContentItem from './ContentItem';

const contentArr = [{id: 1, name: "Development", image: './laptop.png'}, {id: 2, name: "Creative", image: "./butterfly.png"}]

function ContentList() {

    const contentItems = contentArr.map((content) => {
        return(
            <ContentItem key={content.id} {...content}/>
        )
    })

    return(
        <div>
            {contentItems}
        </div>
    )
}

export default ContentList;