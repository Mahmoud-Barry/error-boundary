import React , {Component } from 'react';
import frieza from '../frieza.png';
import handleClicks from '../components/handleClicks';


class Frieza extends Component {

    render() {

        const { clickHandler, backGround } = this.props;

        return(
            <div className={`col ${backGround}`}>
                <img onClick={clickHandler} src={frieza} alt="frieza" /> <br />

            </div>
        )
    }
}

export default handleClicks(Frieza);