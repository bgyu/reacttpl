import React from 'react';


export default function ToDos(props)
{
    return <table>
        <tbody>
        <tr><th>ToDos</th></tr>        
        { props.todos.map((todo, index) => <tr key={index}><td>{todo}</td></tr>) }
        </tbody>
    </table>;
}

