import * as React from "react";
import './row.css';
import Header from "../header/Header";
import Square from "../square/Square";

class Row extends React.Component {

    cols = [0, 1, 2, 3, 4, 5, 6, 7];

    renderSquare(col, row) {
        return <Square
            key={'square-' + col}
            col={col}
            row={row}
            data={this.props.boardState.getData(col, row)}
            squareClicked={(a, b) => this.props.squareClicked(a, b)}
        />;
    }

    renderColHeader(col) {
        const title = String.fromCodePoint('A'.charCodeAt(0) + col);
        return <Header key={'header-' + col} title={title} />
    }

    render() {
        if (this.props.row === 'header') {
            return (
                <div className="board-row">
                    <Header key='header-empty' title='' />
                    {this.cols.map(col => this.renderColHeader(col))}
                </div>
            );
        } else {
            return (
                <div className="board-row">
                    <Header key='header' title={8 - this.props.row} />
                    {this.cols.map(col => this.renderSquare(col, 7 - this.props.row))}
                </div>
            );
        }
    }

}

export default Row;