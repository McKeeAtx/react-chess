import * as React from "react";
import Board from "../board/Board";
import './game.css'
import GameState from "../../gamestate/GameState";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameStates: [GameState.initialBoard()],
            currentState: 0
        };
    }

    handleSquareClick(col, row) {
        const lastState = this.state.gameStates[this.state.gameStates.length - 1];
        const newState = this.state.gameStates.slice();
        newState.push(lastState.handleSquareClick(col, row));
        this.setState({
            gameStates: newState,
            currentState: newState.length - 1
        });
    }

    handleMoveClick(index) {
        this.setState({
            currentState: index
        });
    }

    render() {
        const lastState = this.state.gameStates[this.state.gameStates.length - 1];
        const currentState = this.state.gameStates[this.state.currentState];
        let moves = [];
        for (let i = 0; i < this.state.gameStates.length; i++) {
            if (this.state.gameStates[i].moves.length != moves.length) {
                moves.push({
                    title: this.state.gameStates[i].moves[this.state.gameStates[i].moves.length - 1],
                    index: i
                })
            }
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board gameState={currentState} onSquareClick={ (a, b) => this.handleSquareClick(a, b) }/>
                </div>
                <div className="game-info">
                    <div>Moves:</div>
                    <ol>
                        {moves.map(move => <div key={"move-" + move.index}><button  onClick={() => this.handleMoveClick(move.index)}>{move.title}</button></div>)}
                    </ol>
                </div>

            </div>
        );
    }

}

export default Game;