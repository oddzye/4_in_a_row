import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
import './App.css';
import Game from './Game/Game';
import StartPage from './StartPage/StartPage' 
import GameOverPopup from './GameOverPopup.js/GameOverPopup';
import Main from './Main/Main'

function App () {
 
    return (
      <>
        <HashRouter>
          <Route path='/' exact component={StartPage}></Route>
          <Route path='/game' component={Game}></Route>
          <Route path='/games' component={Main}></Route>
          <Route path="/gameOver" component={GameOverPopup}></Route>
        </HashRouter>
      </>
    );
  }
  

export default App;
