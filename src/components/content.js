import React from 'react';
import ToDos from './todos';


export default function Content(props) {
    const showOrHide = props.showMessage ? "Hide" : "Show";

    return (<div>
        <h1>This is main content</h1>;
        <button onClick={props.onShowHideMessage} className="btn btn-info">{showOrHide} the message</button>
        {props.showMessage && <h2>{props.msg}</h2>}
        <h2>Add new to dos:</h2>
        <input type="text" id="todoText" />
        <button onClick={props.onAddToDo} className="btn btn-primary">Add</button>
        <ToDos todos={props.todos} />
    </div>
    );
}
