import React , {Component } from 'react';
import goku from '../goku.png';
import handleClicks from '../components/handleClicks';


class Goku extends Component {

    render() {
        const { clickHandler, backGround } = this.props;

        return(
            <div className={`col ${backGround}`}>
                <img onClick={clickHandler} src={goku} alt="frieza" /> <br />

            </div>
        )
    }
}

export default handleClicks(Goku);