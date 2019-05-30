import React from 'react'
import './Cell.css'

function Cell(props) {
    return <div className="cell">{props.value}</div>
}

export default Cell;