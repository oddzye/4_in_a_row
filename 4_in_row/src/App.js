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

  setCellValue = (columnIndex, cellIndex) => {
    const nextPlayer = this.state.currentPlayer === 1 ? 2 : 1;
    const newFieldState = [...this.state.field];
    newFieldState[columnIndex][cellIndex] = this.state.currentPlayer;
    this.setState({
      field: newFieldState,
      currentPlayer: nextPlayer
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
