import * as React from "react";
import Board from "../board/Board";
import './game.css'
import Square from "../../common/Square";
import Move from "../move/Move";
import GameModel from "../../game/Game";
import Engine from "../../engine/Engine";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            game: GameModel.INITIAL
        };
    }

    handleSquareClick(square) {
        this.setState({
            game: this.state.game.handleSquareClick(square)
        });
    }

    handleMoveClick(index) {
        this.setState({
            game: this.state.game.handleMoveClick(index)
        })
    }

    handleCpuMove() {
        this.setState({
            game: this.state.game.handleCpuMove()
        })
    }

    handleCpuGame() {
        const oldGame = this.state.game;
        const newGame = this.state.game.handleCpuMove();
        if (oldGame.states.length < newGame.states.length) {
            this.setState({
                game: newGame
            }, () => setTimeout(() => this.handleCpuGame()))
        }
    }

    generateListOfMoves() {
        let moves = [];
        for (let i = 0; i < this.state.game.states.length; i++) {
            /* some gameStates might be generate by clicks - we only care about states that introduce new moves */
            if (this.state.game.states[i].moves.length !== moves.length) {
                moves.push({
                    name: this.state.game.states[i].moves[this.state.game.states[i].moves.length - 1].getName(),
                    index: i,
                    btnClass: i === this.state.game.indexOfCurrentState ? 'highlighted' : ''
                })
            }
        }
        if (moves.length > 0 && moves.filter(move => move.btnClass === 'highlighted').length === 0) {
            moves[moves.length - 1].btnClass = 'highlighted';
        }
        return moves;
    }

    render() {
        const currentState = this.state.game.states[this.state.game.indexOfCurrentState];
        return (
            <div className="game">
                <div className="game-board">
                    <Board gameState={currentState} onSquareClick={ (a, b) => this.handleSquareClick(Square.of(a, b)) }/>
                </div>
                <div className="game-info">
                    <button onClick={() => this.handleCpuMove()}>cpu move</button>
                    <button onClick={() => this.handleCpuGame()}>cpu game</button>
                    <div>Moves:</div>
                    {this.generateListOfMoves().map(move => <Move key={move.index} index={move.index} btnClass={move.btnClass} onClick={() => this.handleMoveClick(move.index)} name={move.name} />)}
                </div>
            </div>

        );
    }

}

export default Game;