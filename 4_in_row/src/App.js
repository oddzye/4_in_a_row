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

  render() {

    return (
      <div className="table">
        {this.state.field.map(el => {
          return <Column values={el}/>
        })}
      </div>
    );
  }
  
}

export default App;
