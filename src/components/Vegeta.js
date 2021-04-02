import React , {Component } from 'react';
import vegeta from '../vegeta.png'
import handleClicks from '../components/handleClicks';

class Vegeta extends Component {

    render() {
        const { clickHandler, backGround } = this.props;

        return(
            <div className={`col ${backGround}`}>
                <img onClick={clickHandler} src={vegeta} alt="vegeta" /> <br />

            </div>
        )
    }
}

export default handleClicks(Vegeta);