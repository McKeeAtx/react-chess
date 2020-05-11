import * as React from "react";
import Board from "../board/Board";
import './game.css'
import BoardState from "../../boardstate/BoardState";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            boardStates: [BoardState.initial()]
        };
    }

    squareClicked(col, row) {
        const lastState = this.state.boardStates[this.state.boardStates.length - 1];
        const newState = this.state.boardStates.slice();
        newState.push(lastState.squareClicked(col, row));
        this.setState({
            boardStates: newState
        });
    }

    render() {
        const lastState = this.state.boardStates[this.state.boardStates.length - 1];
        const clicks = lastState.clicks.map((click, index) => <div key={"click-" + index}>{"{" + click.col + ", " + click.row + "}"}</div>);
        const moves = lastState.moves.map(move => <div>{move}</div>);
        return (
            <div className="game">
                <div className="game-board">
                    <Board boardState={lastState} squareClicked={ (a, b) => this.squareClicked(a, b) }/>
                </div>
                <div className="game-info">
                    <div>Clicks:</div>
                    <ol>
                        {clicks.map(click => click)}
                    </ol>
                </div>
                <div className="game-info">
                    <div>Moves:</div>
                    <ol>
                        {moves.map(move => move)}
                    </ol>
                </div>

            </div>
        );
    }

}

export default Game;