import * as React from "react";
import './square.css'
import {connect} from "react-redux";
import {squareClicked} from "../../middleware/actions";
import { default as _Square } from "../../model/Square";

export class Square extends React.Component {
    col = this.props.col;
    row = this.props.row;

    className() {
        if (this.props.selected) {
            return 'square selected'
        }
        if (this.props.highlighted) {
            return 'square highlighted'
        }
        if ((this.col + this.row) % 2 === 0) {
            return 'square dark'
        } else {
            return 'square light'
        }
    }

    render() {
        return (
            <button className={this.className()} onClick={() => this.props.squareClicked(_Square.of(this.col, this.row))}>
                { this.getSymbol() }
            </button>
        );
    }

    getSymbol() {
        return this.props.piece.symbol;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        highlighted: state.global.isHighlighted(_Square.of(ownProps.col, ownProps.row)),
        selected: state.global.isSelected(_Square.of(ownProps.col, ownProps.row)),
        piece: state.global.get(_Square.of(ownProps.col, ownProps.row))
    }
};

const mapDispatchToProps = {
    squareClicked
}

export default connect(mapStateToProps, mapDispatchToProps)(Square);