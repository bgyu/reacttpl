import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Content from '../components/content';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMessage: false,
            todos: []
        };
    }

    onShowHideMessage()
    {
        this.setState({showMessage: !this.state.showMessage});
    }

    onAddToDo()
    {
        const text = document.getElementById('todoText').value;
        const todos = [...this.state.todos, text];
        this.setState({todos: todos});
    }

    render() {
        const contentProps = {
            msg: 'Message from MainContainer',
            onShowHideMessage: this.onShowHideMessage.bind(this),
            showMessage: this.state.showMessage,
            onAddToDo: this.onAddToDo.bind(this),
            todos: this.state.todos
        };

        return (<div>
            <Header />
            <Content {...contentProps}/>
            <Footer />
        </div>);
    }
}

export default MainContainer;
