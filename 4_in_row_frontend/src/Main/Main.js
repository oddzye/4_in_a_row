import React, { Component } from "react";
import axios from 'axios';
import { setGames } from '../actions/actionCreators';
import { connect } from 'react-redux';

class Main extends Component {

    state = {
        games: []
    }

    componentDidMount = () => {
        const { setGames } = this.props;
        axios.get('http://localhost:3002/games/')
            .then(res => {
                console.log("fetch ", res.data);
                setGames(res.data)
            } )
            .catch(err => console.log(err)); 
    }

    render() {
        console.log(this.props);
        const { games } = this.props;
        return (<ul>
            {games.map((item) => <li key={item._id}>{`Имя первого игрока: ${item.firstPlayerName} Имя второго игрока: ${item.secondPlayerName}`}</li>)}
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