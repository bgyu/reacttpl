import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Content from '../components/content';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMessage: false
        };
    }

    onClickButton()
    {
        this.setState({showMessage: !this.state.showMessage});
    }

    render() {
        return (<div>
            <Header />
            <Content msg='Message from MainContainer' handleClick={this.onClickButton.bind(this)} showMessage={this.state.showMessage}/>
            <Footer />
        </div>);
    }
}

export default MainContainer;
