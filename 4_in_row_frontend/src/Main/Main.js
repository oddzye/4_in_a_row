import React, { Component } from "react";
import axios from 'axios';
import { setGames } from '../actions/actionCreators'

class Main extends Component {
    constructor(props){
        super(props);
    }

    state = {
        games: []
    }

    componentDidMount = () => {
        const { setGames } = this.props;
        axios.get('http://localhost:3002/games/')
            .then(res => setGames(res.data))
            .catch(err => console.log(err)); 
    }

    render() {
        const { games } = this.state;
        return (<ul>
            {games.map((item) => <li key={item.id}>{`Имя первого игрока: ${item.firstPlayerName} Имя второго игрока: ${item.secondPlayerName}`}</li>)}
        </ul>) 
        
    }
}

const mapStateToProps = (state) => ({
    games: state.games.games
})

const mapDispatchToProps = (dispatch) => ({
    setGames: (games) => dispatch(setGames(games))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);