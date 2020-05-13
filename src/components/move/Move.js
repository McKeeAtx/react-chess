import * as React from "react";

function Move(props) {
    return <div key={"move-" + props.index}><button className={props.btnClass} onClick={() => props.onClick()}>{props.name}</button></div>;
}

export default Move;