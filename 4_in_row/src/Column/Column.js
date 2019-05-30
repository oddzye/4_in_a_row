import React, {Component} from 'react'
import Cell from '../Cell/Cell'
import Arrow from '../Arrow/Arrow'

class Column extends Component {
    constructor() {
        super()

        this.state = {
            isArrowVisible: false
        }
    }
    
    setArrowVisible = (value) => {
        this.setState({
            isArrowVisible: value
        })
    }
    showCells = (column) => {
        return column.map((el, idx)  => <Cell key={idx} value={el}/>)
    } 
    render () {
        return (
            <>
                <Arrow isVisible={this.state.isArrowVisible}/>
                <div onMouseDown={() => this.setArrowVisible(false)} onMouseEnter={() => this.setArrowVisible(true)} onClick={() => this.props.onClickColumn(this.props.columnIndex)}>
                    {this.showCells(this.props.values)}
                </div>
            </>
        )
}
    
}

export default Column;