import React from 'react';
import classNames from 'classnames'
import './PlayerStatus'

function PlayerStatus(props) {
    let playerStatusClasses = classNames({
         'player-status__active': props.player === props.currentPlayer,
         'player-status__wrap': true
    })
    return (
        <div className={playerStatusClasses}>
            <img src={require('../images/man-user.svg')} alt="user"/>
            {props.player === 1 ? <div>blue</div> : <div>red</div>}
        </div>
    )
}


export default PlayerStatus;