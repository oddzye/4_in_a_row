import React, { Component } from "react";
// import { setGames } from '../actions/actionCreators';
import { setGamesThunkCreator } from '../reducers/games' 
import { connect } from 'react-redux';

class Main extends Component {

    state = {
        games: []
    }

    componentDidMount = () => {
        const { setGames } = this.props;
        setGames()
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
    

export default connect(mapStateToProps, {setGames: setGamesThunkCreator})(Main);