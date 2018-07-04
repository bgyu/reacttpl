import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Content from '../components/content';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (<div>
            <Header />
            <Content msg='Message from MainContainer'/>
            <Footer />
        </div>);
    }
}

export default MainContainer;
