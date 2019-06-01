import React , {Component} from 'react';
import { Link } from 'react-router-dom'

class StartPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
            <div>Hello</div>
            <Link to='/game'>Start game!</Link>
            </>
        )
    }
}


export default StartPage;