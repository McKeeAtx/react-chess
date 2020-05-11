import * as React from "react";
import Row from "../row/Row";

class Board extends React.Component {
    rows = [0, 1, 2, 3, 4, 5, 6, 7];

    render() {
        const status = 'Next player: ' + this.props.boardState.nextPlayer();
        return (
            <div>
                <div className="status">{status}</div>
                {this.rows.map(row =>
                    <Row key={'row-' + row} row={row} boardState={this.props.boardState} squareClicked={ (a, b) => this.props.squareClicked(a, b)}/>
                )}
                <Row key='row-header' row='header' />
            </div>
        );
    }
}

export default Board;