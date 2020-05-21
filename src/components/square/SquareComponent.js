import * as React from "react";
import './square.css'
import {connect} from "react-redux";
import {squareClicked} from "../../middleware/actions";

export class SquareComponent extends React.Component {

    className() {
        if (this.props.selected) {
            return 'square selected'
        }
        if (this.props.highlighted) {
            return 'square highlighted'
        }
        if ((this.props.square.col + this.props.square.row) % 2 === 0) {
            return 'square dark'
        } else {
            return 'square light'
        }
    }

    render() {
        return (
            <button className={this.className()} onClick={() => this.props.squareClicked(this.props.square)}>
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
        highlighted: state.global.isHighlighted(ownProps.square),
        selected: state.global.isSelected(ownProps.square),
        piece: state.global.get(ownProps.square)
    }
};

const mapDispatchToProps = {
    squareClicked
}

export default connect(mapStateToProps, mapDispatchToProps)(SquareComponent);