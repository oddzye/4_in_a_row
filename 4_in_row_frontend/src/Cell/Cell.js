import React from 'react'
import './Cell.css'
import classNames from 'classnames'

function Cell(props) {
    let cellValueClasses = classNames({
        'cell-value': true,
        'cell-value__1player': props.value === 1,
        'cell-value__2player': props.value === 2 
    })
    return <div className="cell">
                <div className={cellValueClasses}>
                </div> 
            </div>
}

export default Cell;