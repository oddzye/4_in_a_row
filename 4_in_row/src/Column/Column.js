import React from 'react'
import Cell from '../Cell/Cell'

function Column(props) {

    const showCells = (column) => {
        return column.map((el, cellIndex)  => <Cell
         onClickCell={props.setCellValue} columnIndex={props.columnIndex} cellIndex={cellIndex} value={el}/>)
    } 

    return (
        <div>
            {showCells(props.values)}
        </div>
    )
}

export default Column;