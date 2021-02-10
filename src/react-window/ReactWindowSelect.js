import React from 'react'
import { FixedSizeList as List } from 'react-window';
import Select from 'react-select'

const options = Array(1000)
                .fill()
                .map((val, idx) => {
                    return {
                        label: `random-${idx}`,
                        value: `random-${idx}`                        
                    }
                })

const height = 35

const MenuList = (props) => {
    const { options, children, maxHeight, getValue } = props
    const [value] = getValue();
    const initialOffset = options.indexOf(value) * height;

    return (
        <List
            height={maxHeight}
            itemCount={children.length}
            itemSize={height}
            initialScrollOffset={initialOffset}
        >
            {({ index, style }) => <div style={style}>{children[index]}</div>}
        </List>
    )

}

const ReactWindowSelect = () => {
    return (
        <div>
            <Select
                components = {{MenuList}}
                options = {options} 
            />
        </div>
    )
}

export default ReactWindowSelect
