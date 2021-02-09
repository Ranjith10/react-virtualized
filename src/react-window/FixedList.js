import React from 'react'
import { FixedSizeList as List } from 'react-window';
import Select from 'react-select'

import './FixedList.css'

const Row = ({ index, style }) => (
    <div style={style}>Row {index}</div>
)

const options = Array(1000)
                .fill()
                .map((val, idx) => {
                    return {
                        label: `random-${idx}`,
                        value: `random-${idx}`                        
                    }
                })
                

const FixedList = () => {
    return (
        <div className='select-container'>
            <List
                height={150}
                itemCount={1000}
                itemSize={35}
                width={300}
                className='react-window-container'
            >
                {Row}
            </List>
            <Select
                options={options}
            />
        </div>
    )
}

export default FixedList
