import React, {Component} from 'react'
import Cell from '../Cell/Cell'
import './Column.css'

class Column extends Component {
    constructor() {
        super()

    }
    
    showCells = (column) => {
        return column.map((el, idx)  => <Cell key={idx} value={el}/>)
    } 
    render () {
        return (
            <>
                <div className="column" onClick={() => this.props.onClickColumn(this.props.columnIndex)}>
                    {this.showCells(this.props.values)}
                </div>
            </>
        )
}
    
}

export default Column;