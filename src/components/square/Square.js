import * as React from "react";
import './square.css'

class Square extends React.Component {
    col = this.props.col;
    row = this.props.row;

    className() {
        console.log(this.row)
        if ((this.col.charCodeAt(0) + this.row) % 2 === 1) {
            return 'square dark'
        } else {
            return 'square light'
        }
    }

    render() {
        return (
            <button className={this.className()}>
            </button>
        );
    }
}

export default Square;