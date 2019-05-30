import React, { Component } from 'react';
import './App.css';
import Column from './Column/Column';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      field: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ], 
      currentPlayer: 1
    }
  }

  makeTurn = (columnIndex) => {
    const nextPlayer = this.state.currentPlayer === 1 ? 2 : 1;
    const newFieldState = [...this.state.field];
    const columnLength = newFieldState[columnIndex].length;
    console.log("lol")
    for (let i = columnLength - 1; i >= 0; i--) {
      console.log("wtf")
      if (newFieldState[columnIndex][i] === 0) {
        newFieldState[columnIndex][i] = this.state.currentPlayer;
        break;
      }
    }
    
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
            return <Column key={idx} onClickColumn={this.makeTurn} columnIndex={idx} values={el}/>
          })}
        </div>
      </div>
      
    );
  }
  
}

export default App;
