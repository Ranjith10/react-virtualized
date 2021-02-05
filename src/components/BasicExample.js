import React, { useEffect, useState } from "react"
import { loremIpsum } from "lorem-ipsum"
import { List } from 'react-virtualized'

import './BasicExample.css'

const rowCount = 1000

const BasicExample = () => {
    const [list, setList] = useState([])
    
    //* Set the random data for list
    useEffect(() => {
        let list = Array(rowCount)
        .fill()
        .map((val, idx) => {
            return {
                id: idx,
                name: "User Name",
                image: "http://via.placeholder.com/40",
                text: loremIpsum({
                    count: 1,
                    units: "sentences",
                    sentenceLowerBound: 4,
                    sentenceUpperBound: 8,
                }),
            }
        })
        setList(list)
    }, [])

    //* List - renderer from react-virtualized
    
    //other arguments passed to rowRenderer
    //isScrolling, // Used for performance
    //isVisible, // Used for performancee
    //style,
    const rowRenderer = ({
        key, // Unique key within array of rows
        index, // Index of row within collection
        isScrolling,
    }) => {
        console.log({key, index})
        const content = isScrolling ? (
            <div>Scrolling...</div>
          ) : (
                <>  
                    <div className="image-container">
                        <img src={list[index].image} alt="" />
                    </div>
                    <div className="content-container">
                        <div className = 'content-name'>{list[index].name}</div>
                        <div className = 'content-description'>{list[index].text}</div>
                    </div>
                </>
          )
        return (
            <div idx={index} key={key} className="select-item">
                {content}
            </div>
        )
    }
    

    return (
        <div>
            <List 
                width={300}
                height={300} 
                rowCount={list.length} 
                rowHeight={5} 
                rowRenderer={rowRenderer} />
        </div>
    )
}

export default BasicExample
