import * as React from "react";
import Board from "../board/Board";
import './game.css'
import BoardState from "../../boardstate/BoardState";

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            boardState: BoardState.initial()
        };
    }

    handleClick(col, row) {
        this.setState({
            boardState: this.state.boardState.onClick(col, row)
        });
    }

    render() {
        const clicks = this.state.boardState.clicks.map(click => <div>{"{" + click.col + ", " + click.row + "}"}</div>);
        return (
            <div className="game">
                <div className="game-board">
                    <Board boardState={this.state.boardState} onClick={(col, row) => this.handleClick(col, row)}/>
                </div>
                <div className="game-info">
                    <div>Clicks:</div>
                    <ol>
                        {clicks.map(click => click)}
                    </ol>
                </div>
            </div>
        );
    }

}

export default Game;