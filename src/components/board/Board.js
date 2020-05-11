import * as React from "react";
import Row from "../row/Row";

class Board extends React.Component {
    rows = [7, 6, 5, 4, 3, 2, 1, 0];

    render() {
        const status = 'Next player: ' + this.props.boardState.nextPlayer();
        return (
            <div>
                <div className="status">{status}</div>
                {this.rows.map(row =>
                    <Row key={'row-' + row} row={row} boardState={this.props.boardState} squareClicked={this.props.squareClicked}/>
                )}
                <Row key='row-header' row='header' />
            </div>
        );
    }
}

export default Board;