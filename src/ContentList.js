import React from 'react';
import ContentItem from './ContentItem';
import laptop from './laptop.png';
import butterfly from './butterfly.png';
import smiley from './smiley.png';

const contentArr = [{id: 1, name: "Development", image: `${laptop}`}, {id: 2, name: "Creative", image: `${butterfly}`}, {id: 3, name: "About Me", image: `${smiley}`}]

function ContentList() {

    const contentItems = contentArr.map((content) => {
        return(
            <ContentItem key={content.id} {...content}/>
        )
    })

    return(
        <div className="content-list-row">
            {contentItems}
        </div>
    )
}

export default ContentList;