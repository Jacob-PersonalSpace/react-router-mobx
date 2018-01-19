import React, { Component } from 'react';

import Hello from './Hello.jsx';
import World from './World.jsx';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.debug(`--Component HelloWorld componentWillMount--`)
    }

    componentDidMount() {
        console.debug(`--Component HelloWorld componentDidMount--`)
    }

    componentWillUnmount() {
        console.debug(`--Component HelloWorld componentWillUnmount--`)
    }

    render() {
        return (
            <div>
                <Hello />
                <World />
            </div>
        )
    }
}

export default HelloWorld;