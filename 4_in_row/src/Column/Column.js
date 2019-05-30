import React from 'react'
import Cell from '../Cell/Cell'

function Column(props) {

    const showCells = (column) => {
        return column.map((el, idx)  => <Cell key={idx} value={el}/>)
    } 

    return (
        <div onClick={() => props.onClickColumn(props.columnIndex)}>
            {showCells(props.values)}
        </div>
    )
}

export default Column;