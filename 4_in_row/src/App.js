import React, { Component } from 'react';
import './App.css';
import Column from './Column/Column';
import PlayerStatus from './PlayerStatus/PlayerStatus';

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
      currentPlayer: 1,
      winner: null
    }
  }

  makeTurn = (columnIndex) => {
    const nextPlayer = this.state.currentPlayer === 1 ? 2 : 1;
    const newFieldState = [...this.state.field];
    const columnLength = newFieldState[columnIndex].length;
    for (let i = columnLength - 1; i >= 0; i--) {
      if (newFieldState[columnIndex][i] === 0) {
        newFieldState[columnIndex][i] = this.state.currentPlayer;
        break;
      }
    }
    
    this.setState({
      field: newFieldState,
      currentPlayer: nextPlayer
    }, () => this.checkWinner());

  } 
  
  checkWinner = () => {
    const DIR_NUMBER = 4;
    const di = [1, 0, 1, 1];
    const dj = [0, 1, -1, 1];
    const WIN_LENGTH = 4;
    const FIELD_WIDTH = this.state.field.length;
    const FIELD_HEIGHT = this.state.field[0].length;

    for (let i = 0; i < FIELD_WIDTH; i += 1) {
      for (let j = 0; j < FIELD_HEIGHT; j += 1) {
        let startCell = this.state.field[i][j];
        if (startCell === 0) continue;
        for (let dir = 0; dir < DIR_NUMBER; dir += 1) {
          let length = 0, iLine = i, jLine = j;
          while (++length < WIN_LENGTH) {
            iLine += di[dir];
            jLine += dj[dir];
            if (iLine < 0 || iLine >= FIELD_WIDTH || jLine < 0 || jLine >= FIELD_HEIGHT) break;
            if (this.state.field[iLine][jLine] !== startCell) break;
          }
          if (length === WIN_LENGTH) {
            this.setState({
              winner: startCell
            }, () => alert ("winner is " + this.state.winner))
            return;
          }
        }
      }
    }
  }

  render() {

    return (
      <>
        <PlayerStatus player={1} currentPlayer={this.state.currentPlayer}/>
        <PlayerStatus player={2} currentPlayer={this.state.currentPlayer}/>
        <div className="container-app"> 
        <div className="field-wrap">
        <div className="field"> 
            {this.state.field.map((el, idx) => {
              return <Column key={idx} onClickColumn={this.makeTurn} columnIndex={idx} values={el}/>
            })}
          </div>
        </div>
        </div>
        <div className="status-bar">
            Current playes is {this.state.currentPlayer}
        </div>
      </>

      
    );
  }
  
}

export default App;
