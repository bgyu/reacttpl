import React from 'react';


export default function Content(props) {
    return (<div>
        <h1>This is main content</h1>;
        <h2>{props.msg}</h2>
    </div>
    );
}
