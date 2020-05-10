import * as React from "react";
import Square from "../square/Square";
import Header from "../header/Header";

class Board extends React.Component {
    rows = [0, 1, 2, 3, 4, 5, 6, 7];
    cols = [0, 1, 2, 3, 4, 5, 6, 7];

    renderSquare(col, row) {
        console.log(this.props)
        return <Square col={col} row={row} piece={this.props.state.getPiece(col, row)}/>;
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
                        {this.cols.map(col => this.renderSquare(col, 7 - row))}
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