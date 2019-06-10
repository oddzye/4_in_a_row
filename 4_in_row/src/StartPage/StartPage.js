import React , {Component} from 'react';
import { Link } from 'react-router-dom'
import '../StartPage/StartPage.css'

class StartPage extends Component {
    constructor() {
        super();
        this.state = {
            firstPlayerName: null,
            secondPlayerName: null
        }
    }

    onChangeNamePlayer = (e, name) => {
        switch (name) {
            case 'firstPlayerName':
                this.setState({
                    firstPlayerName: e.target.value
                });
                console.log("first player", this.state.firstPlayerName)
            case 'secondPlayerName':
            this.setState({
                secondPlayerName: e.target.value
            });
            console.log("second player", this.state.secondPlayerName)
        }
        
    }

    render() {
        const firstPlayerName = 'firstPlayerName';
        const secondPlayerName = 'secondPlayerName';
        return (
            <>
            <div>Введите имена игроков</div>
            <input onChange={(e, firstPlayerName) => this.onChangeNamePlayer}/>
            <input onChange={(e, secondPlayerName) => this.onChangeNamePlayer}/>
                <Link to='/game'>Start game!</Link>
            </>
        )
    }
}


export default StartPage;