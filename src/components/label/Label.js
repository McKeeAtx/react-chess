import * as React from "react";
import './label.css'

class Label extends React.Component {
    render() {
        return (
            <span className="label">
                {this.props.title}
            </span>
        );
    }
}

export default Label;