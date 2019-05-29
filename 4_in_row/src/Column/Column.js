import React from 'react'
import Cell from '../Cell/Cell'

function Column(props) {
    console.log(props);

    const showCells = (column) => {
        return column.map(el => <Cell value={el}/>)
    } 

    return (
        <div>
            {showCells(props.values)}
        </div>
    )
}

export default Column;