import * as React from "react";
import './square.css'
import Bishop from "../../pieces/bishop/Bishop";
import Color from "../../pieces/Color";

class Square extends React.Component {
    col = this.props.col;
    row = this.props.row;

    className() {
        console.log(this.row)
        if ((this.col + this.row) % 2 === 0) {
            return 'square dark'
        } else {
            return 'square light'
        }
    }

    render() {
        return (
            <button className={this.className()}>
                { new Bishop(Color.WHITE).symbol}
            </button>
        );
    }
}

export default Square;