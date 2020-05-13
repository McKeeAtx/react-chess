import * as React from "react";
import './row.css';
import Label from "../label/Label";
import Square from "../square/Square";
import Squares from "../../common/Squares";

class Row extends React.Component {

    cols = [0, 1, 2, 3, 4, 5, 6, 7];

    renderSquare(col, row) {
        const square = Squares.of(col, row);
        return <Square
            key={'square-' + col}
            col={col}
            row={row}
            data={{
                piece: this.props.gameState.getPiece(square),
                selected: this.props.gameState.isSelected(square),
                highlighted: this.props.gameState.isHighlighted(square),
            }}
            onSquareClick={this.props.onSquareClick}
        />;
    }

    renderColHeader(col) {
        const title = String.fromCodePoint('A'.charCodeAt(0) + col);
        return <Label key={'header-' + col} title={title} />
    }

    render() {
        if (this.props.row === 'header') {
            return (
                <div className="board-row">
                    <Label key='header-empty' title='' />
                    {this.cols.map(col => this.renderColHeader(col))}
                </div>
            );
        } else {
            return (
                <div className="board-row">
                    <Label key='header' title={1 + this.props.row} />
                    {this.cols.map(col => this.renderSquare(col, this.props.row))}
                </div>
            );
        }
    }

}

export default Row;