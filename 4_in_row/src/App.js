import React, { Component } from 'react';
import './App.css';
import Column from './Column/Column';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      field: [
        [1, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ], 
      currentPlayer: 1
    }
  }

  setCellValue = (columnIndex, cellIndex, value) => {
    const newFieldState = [...this.state.field];
    newFieldState[columnIndex][cellIndex] = value;
    this.setState({
      field: newFieldState
    })
  }  

  render() {

    return (
      <div className="container-app"> 
        <div className="table"> 
          {this.state.field.map((el, idx) => {
            return <Column key={idx} setCellValue={this.setCellValue} columnIndex={idx} values={el}/>
          })}
        </div>
      </div>
      
    );
  }
  
}

export default App;
