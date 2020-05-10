import * as React from "react";
import Board from "../board/Board";
import './game.css'
import State from "../../state/State";

class Game extends React.Component {

    state = State.initial();

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board state={this.state}/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;