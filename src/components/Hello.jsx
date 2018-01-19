import React, { Component, Fragment } from 'react';

import '../css/hello.less'

class Hello extends Component {
    constructor(props) {
        super(props);

        this.state = {
            test: ''
        }

        this.test2 = this.test2.bind(this)
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

    test2(value) {
        this.setState({
            test: value,
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.test} onChange={evt => this.test2(evt.target.value)} />
                <div className="hellocolor">Hello </div>
            </div>
        )
    }
}

export default Hello;
