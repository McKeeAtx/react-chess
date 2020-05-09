import * as React from "react";
import './header.css'

class Header extends React.Component {
    render() {
        return (
            <button className="header">
                {this.props.title}
            </button>
        );
    }
}

export default Header;