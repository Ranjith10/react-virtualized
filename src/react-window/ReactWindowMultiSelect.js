import React from 'react'
import { FixedSizeList as List } from 'react-window';
import Select, { components } from 'react-select'

const options = Array(1000)
                .fill()
                .map((val, idx) => {
                    return {
                        label: `random-${idx}`,
                        value: `random-${idx}`                        
                    }
                })

const height = 35

const Option = props => {
    return (
        <div>
            <components.Option {...props}>
                <input  
                    checked = {props.isSelected}
                    type = 'checkbox'
                    className = 'select-check-box'
                />
                <label>{props.label}</label>
            </components.Option>
        </div>
    )
}

const customStyle = {
    option: (provided) => ({
        ...provided,
        backgroundColor: '#ffffff',
        color: 'black',
        '&:active': {
            backgroundColor: '#ffffff',
            color: 'black',
        }
    })
}

// const MultiValue = props => {
//     return (
//         <components.SingleValue {...props}>
//             {

//             }
//         </components.SingleValue>
//     )
// }

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

const ReactWindowMultiSelect = () => {
    return (
        <div>
            <Select
                components = {{ Option, MenuList }}
                closeMenuOnSelect = {false}
                options = {options} 
                isMulti
                hideSelectedOptions = {false}
                styles = {customStyle}
            />
        </div>
    )
}

export default ReactWindowMultiSelect
