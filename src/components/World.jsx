import React, { Component } from 'react';

class World extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.debug(`--Component World componentWillMount--`)
    }

    componentDidMount() {
        console.debug(`--Component World componentDidMount--`)
    }

    componentWillUnmount() {
        console.debug(`--Component World componentWillUnmount--`)
    }

    render() {
        return <div>World </div>
    }
}

export default World;
