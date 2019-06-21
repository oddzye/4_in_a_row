import { setGames } from '../actions/actionCreators'
import axios from 'axios';

const initialState = {
    games: []
}

export const games = (state = initialState, action) => {
    const copyState = {...state};
    switch (action.type) {
        case 'SET_GAMES':
            const { gamesArr } = action;
            copyState.games = gamesArr;
            return copyState;
        default:
            return copyState;
    }
}


export const setGamesThunkCreator = () => dispatch => {
    axios.get('http://localhost:3002/games/')
        .then(res => {
            console.log("fetching in thunk ", res.data);
            dispatch(setGames(res.data))
        } )
        .catch(err => console.log(err)); 
}