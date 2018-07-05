import React from 'react';


export default function Content(props) {
    const showOrHide = props.showMessage ? "Hide" : "Show";

    return (<div>
        <h1>This is main content</h1>;
        <button onClick={props.handleClick} className="btn btn-primary">{showOrHide} the message</button>
        {props.showMessage && <h2>{props.msg}</h2>}
    </div>
    );
}
