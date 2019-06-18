import React, {Component} from 'react'
import Cell from '../Cell/Cell'
import './Column.css'
import Arrow from '../Arrow/Arrow'

class Column extends Component {
    constructor() {
        super()
        this.state = {
            isArrowVisible: false
        }
    }
    
    showCells = (column) => {
        return column.map((el, idx)  => <Cell key={idx} value={el}/>)
    } 

    getArrow = (value) => {
        this.setState({
            isArrowVisible: value
        })
    }
    render () {
        return (
            <>
                {this.state.isArrowVisible ? <Arrow isArrowVisible={true} /> : null}
                <div onMouseEnter={() => {this.getArrow(true)}} onMouseLeave={() => {this.getArrow(false)}} className="column" onClick={() => this.props.onClickColumn(this.props.columnIndex)}>
                    {this.showCells(this.props.values)}
                </div>
            </>
        )
}
    
}

export default Column;