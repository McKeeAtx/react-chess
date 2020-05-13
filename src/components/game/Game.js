import * as React from "react";
import Board from "../board/Board";
import './game.css'
import GameState from "../../gamestate/GameState";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameStates: [GameState.initialBoard()],
            indexOfCurrentState: 0
        };
    }

    handleSquareClick(col, row) {
        const lastState = this.state.gameStates[this.state.gameStates.length - 1];
        const newStates = this.state.gameStates.slice();
        newStates.push(lastState.handleSquareClick(col, row));
        this.setState({
            gameStates: newStates,
            indexOfCurrentState: newStates.length - 1
        });
    }

    handleMoveClick(index) {
        this.setState({
            indexOfCurrentState: index
        });
    }

    render() {
        const currentState = this.state.gameStates[this.state.indexOfCurrentState];
        let moves = [];
        for (let i = 0; i < this.state.gameStates.length; i++) {
            if (this.state.gameStates[i].moves.length !== moves.length) {
                moves.push({
                    title: this.state.gameStates[i].moves[this.state.gameStates[i].moves.length - 1],
                    index: i,
                    btnClass: i === this.state.indexOfCurrentState ? 'highlighted' : ''
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
                    {moves.map(move => <div key={"move-" + move.index}><button className={move.btnClass} onClick={() => this.handleMoveClick(move.index)}>{move.title}</button></div>)}
                </div>

            </div>
        );
    }

}

export default Game;