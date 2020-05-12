import * as React from "react";
import Board from "../board/Board";
import './game.css'
import GameState from "../../gamestate/GameState";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameStates: [GameState.initialBoard()]
        };
    }

    squareClicked(col, row) {
        const lastState = this.state.gameStates[this.state.gameStates.length - 1];
        const newState = this.state.gameStates.slice();
        newState.push(lastState.squareClicked(col, row));
        this.setState({
            gameStates: newState
        });
    }

    render() {
        const lastState = this.state.gameStates[this.state.gameStates.length - 1];
        const clicks = lastState.clicks.map((click, index) => <div key={"click-" + index}>{"{" + click.col + ", " + click.row + "}"}</div>);
        const moves = lastState.moves.map(move => <div>{move}</div>);
        return (
            <div className="game">
                <div className="game-board">
                    <Board gameState={lastState} squareClicked={ (a, b) => this.squareClicked(a, b) }/>
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