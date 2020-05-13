import * as React from "react";
import Board from "../board/Board";
import './game.css'
import GameState from "../../gamestate/GameState";
import Squares from "../../common/Squares";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameStates: [GameState.initialBoard()],
            indexOfCurrentState: 0
        };
    }

    handleSquareClick(square) {
        const lastState = this.state.gameStates[this.state.gameStates.length - 1];
        const newStates = this.state.gameStates.slice();
        newStates.push(lastState.handleSquareClick(square));
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

    generateListOfMoves() {
        let moves = [];
        for (let i = 0; i < this.state.gameStates.length; i++) {
            if (this.state.gameStates[i].moves.length !== moves.length) {
                moves.push({
                    name: this.state.gameStates[i].moves[this.state.gameStates[i].moves.length - 1].name,
                    index: i,
                    btnClass: i === this.state.indexOfCurrentState ? 'highlighted' : ''
                })
            }
        }
        if (moves.length > 0 && moves.filter(move => move.btnClass === 'highlighted').length === 0) {
            moves[moves.length - 1].btnClass = 'highlighted';
        }
        return moves;
    }

    render() {
        const currentState = this.state.gameStates[this.state.indexOfCurrentState];
        return (
            <div className="game">
                <div className="game-board">
                    <Board gameState={currentState} onSquareClick={ (a, b) => this.handleSquareClick(Squares.of(a, b)) }/>
                </div>
                <div className="game-info">
                    <div>Moves:</div>
                    {this.generateListOfMoves().map(move => <div key={"move-" + move.index}><button className={move.btnClass} onClick={() => this.handleMoveClick(move.index)}>{move.name}</button></div>)}
                </div>
            </div>
        );
    }

}

export default Game;