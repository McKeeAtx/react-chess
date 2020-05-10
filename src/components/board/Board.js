import * as React from "react";
import Square from "../square/Square";
import Header from "../header/Header";
import Snapshot from "../../snapshot/Snapshot";

class Board extends React.Component {
    rows = [0, 1, 2, 3, 4, 5, 6, 7];
    cols = [0, 1, 2, 3, 4, 5, 6, 7];

    constructor(props) {
        super(props);
        this.state = {
            snapshot: Snapshot.initial()
        };
    }

    handleClick(col, row) {
        this.setState({
            snapshot: this.state.snapshot.highlight(col, row)
        });
    }

    renderSquare(col, row) {
        return <Square
            key={'col-' + col}
            col={col}
            row={row}
            data={this.state.snapshot.getData(col, row)}
            onClick={() => this.handleClick(col, row) }
        />;
    }

    renderRowHeader(row) {
        return <Header key={'header-' + (8 - row)} title={8 - row} />;
    }

    renderColHeader(col) {
        const title = String.fromCodePoint('A'.charCodeAt(0) + col);
        return <Header key={'header-' + title} title={title} />
    }

    render() {
        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                {this.rows.map(row =>
                    <div key={'row-' + row} className="board-row">
                        {this.renderRowHeader(row)}
                        {this.cols.map(col => this.renderSquare(col, 7 - row))}
                    </div>
                )}
                <div className="board-row">
                    <Header key="header-empty" title="" />
                    {this.cols.map(col => this.renderColHeader(col))}
                </div>
            </div>
        );
    }
}

export default Board;