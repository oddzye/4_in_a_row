import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../StartPage/StartPage.css';

class StartPage extends Component {
    constructor() {
        super();
        this.state = {
            firstPlayerName: null,
            secondPlayerName: null
        }
    }

    onChangeNameFirstPlayer = (e) => {
        const { setPlayerName } = this.props;

        setPlayerName(e.target.value , 1);
        
    }

    onChangeNameSecondPlayer = (e) => {
        this.setState({
            secondPlayerName: e.target.value
        });
    }

    render() {
        return (
            <div className="start-page__container">
                <h3 className="start-page__title">Введите имена игроков</h3>
                <div className="player-name__input__wrap">
                    <label className="player-name__input" htmlFor="first-player__name">Имя первого игрока:</label>
                    <input id="first-player__name" onChange={this.onChangeNameFirstPlayer}/>
                </div>
                <div className="player-name__input__wrap">
                    <label className="player-name__input" htmlFor="second-player__name">Имя второго игрока:</label>
                    <input id="second-player__name" onChange={this.onChangeNameSecondPlayer}/>
                </div>
                
                <Link className="link" 
                    to={{pathname: '/game'}}>
                    Начать игру!
                </Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    setPlayerName: (name, number) => dispatch({type: 'SET_PLAYER_NAME', name: name, number: number})
})

export default connect(null, mapDispatchToProps)(StartPage);