import * as React from "react";
import Board from "../board/Board";
import './game.css'
import BoardState from "../../boardstate/BoardState";

class Game extends React.Component {

    boardStates = [BoardState.initial()];

    constructor(props) {
        super(props);
        this.state = {
            boardStates: this.boardStates
        };
    }

    handleClick(col, row) {
        const lastState = this.state.boardStates[this.state.boardStates.length - 1];
        this.state.boardStates.push(lastState.onClick(col, row));
        this.setState({
            boardStates: this.state.boardStates
        });
    }

    render() {
        const lastState = this.state.boardStates[this.state.boardStates.length - 1];
        const clicks = lastState.clicks.map((click, index) => <div key={"click-" + index}>{"{" + click.col + ", " + click.row + "}"}</div>);
        const moves = lastState.moves.map(move => <div>{move}</div>);
        return (
            <div className="game">
                <div className="game-board">
                    <Board boardState={lastState} onClick={(col, row) => this.handleClick(col, row)}/>
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