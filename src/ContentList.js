import React from 'react';
import ContentItem from './ContentItem';
import laptop from './laptop.png';
import butterfly from './butterfly.png';

const contentArr = [{id: 1, name: "Development", image: `${laptop}`}, {id: 2, name: "Creative", image: `${butterfly}`}]

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