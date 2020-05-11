import * as React from "react";
import './square.css'

class Square extends React.Component {
    col = this.props.col;
    row = this.props.row;

    className() {
        if (this.props.data.selected) {
            return 'square selected'
        }
        if ((this.col + this.row) % 2 === 0) {
            return 'square dark'
        } else {
            return 'square light'
        }
    }

    render() {
        return (
            <button className={this.className()} onClick={() => this.props.onClick()}>
                { this.getSymbol() }
            </button>
        );
    }

    getSymbol() {
        return this.props.data.piece.symbol;
    }
}

export default Square;