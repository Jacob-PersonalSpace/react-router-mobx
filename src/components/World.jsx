import React, { Component } from 'react';

import '../css/world.less'

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
        return <div className="worldcolor">World3 </div>
    }
}

export default World;
