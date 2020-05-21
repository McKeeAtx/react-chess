import * as React from "react";
import Row from "../row/Row";
import {connect} from "react-redux";

export class Board extends React.Component {
    render() {
        return (
            <div>
                <div className="status">Next player: {this.props.nextPlayer}</div>
                {[7, 6, 5, 4, 3, 2, 1, 0].map(row =>
                    <Row key={'row-' + row} row={row} />
                )}
                <Row key='row-header' row='header' />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        nextPlayer: state.global.nextPlayer()
    }
};

export default connect(mapStateToProps)(Board);