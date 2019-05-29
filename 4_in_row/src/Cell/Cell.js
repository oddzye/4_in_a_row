import React from 'react'
import './Cell.css'

function Cell(props) {
    return <div className="cell" onClick={() => props.onClickCell(props.columnIndex, props.cellIndex, 35)}>{props.value}</div>
}

export default Cell;