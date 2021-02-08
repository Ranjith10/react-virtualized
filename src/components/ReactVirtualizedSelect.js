import React, { useState } from 'react'
import VirtualizedSelect from 'react-virtualized-select'
import 'react-virtualized-select/styles.css'
import 'react-virtualized/styles.css'

import './ReactVirtualizedSelect.css'

const options = [
    { label: "One", value: 1 },
    { label: "Two", value: 2 },
    { label: "Three", value: 3, disabled: true }
    // And so on...
  ]

const ReactVirtualizedSelect = () => {
    const [selectedValue, setSelectedValue] = useState([])

    return (
        <div>
            <VirtualizedSelect
                options={options}
                onChange={(selectValue) => setSelectedValue(selectValue)}
                value={selectedValue}
            />
        </div>
    )
}

export default ReactVirtualizedSelect
