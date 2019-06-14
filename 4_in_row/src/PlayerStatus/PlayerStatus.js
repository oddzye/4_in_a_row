import React from 'react';
import classNames from 'classnames'
import './PlayerStatus.css'
import '../Cell/Cell.css'

function PlayerStatus(props) {
    const playerStatusClasses = classNames({
         'player-status__active__blue': props.player === props.currentPlayer && props.player === 1,
         'player-status__active__red': props.player === props.currentPlayer && props.player === 2,
         'player-status__wrap': true
    });

    const playerColorClasses = classNames({
        'cell-value__2player': props.player === 2,
        'cell-value__1player': props.player === 1,
        'cell-template': true


    })
    
    const { playerName } = props;
    return (
        <div className={playerStatusClasses}>
            <img className="player-status__img" src={require('../images/man-user.svg')} alt="user"/>
            <div className={playerColorClasses} />
            <p>{playerName}</p>
        </div>
    )
}


export default PlayerStatus;