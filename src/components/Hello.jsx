import React, { Component } from 'react';

class Hello extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.debug(`--Component Hello componentWillMount--`)
    }

    componentDidMount() {
        console.debug(`--Component Hello componentDidMount--`)
    }

    componentWillUnmount() {
        console.debug(`--Component Hello componentWillUnmount--`)
    }

    render() {
        return <div>Hello </div>
    }
}

export default Hello;
