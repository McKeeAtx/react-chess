import * as React from "react";
import './square.css'

class Square extends React.Component {
    col = this.props.col;
    row = this.props.row;

    className() {
        if ((this.col + this.row) % 2 === 0) {
            return 'square dark'
        } else {
            return 'square light'
        }
    }

    render() {
        return (
            <button className={this.className()}>
                { this.props.piece ? this.props.piece.symbol : '' }
            </button>
        );
    }
}

export default Square;