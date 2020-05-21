import * as React from "react";
import Board from "../board/Board";
import './game.css'
import {cpuMoveRequested, squareClicked} from "../../middleware/actions";
import {connect} from "react-redux";

class Game extends React.Component {

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <button onClick={() => this.props.cpuMoveRequested()}>cpu move</button>
                    <br/>
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = {
    squareClicked,
    cpuMoveRequested
}

export default connect(null, mapDispatchToProps)(Game);