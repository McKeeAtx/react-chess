import * as React from "react";
import Square from "../square/Square";
import Header from "../header/Header";

class Board extends React.Component {
    rows = [0, 1, 2, 3, 4, 5, 6, 7];
    cols = [0, 1, 2, 3, 4, 5, 6, 7];

    renderSquare(row, col) {
        return <Square row={row} col={col} />;
    }

    renderHeader(title) {
        return <Header title={title} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                {this.rows.map(row =>
                    <div className="board-row">
                        {this.renderHeader(8 - row)}
                        {this.cols.map(col => this.renderSquare(row, col))}
                    </div>
                )
                }
                <div className="board-row">
                    {this.renderHeader('')}
                    {this.cols.map(col => this.renderHeader(String.fromCodePoint('A'.charCodeAt(0) + col)))}
                </div>
            </div>
        );
    }
}

export default Board;