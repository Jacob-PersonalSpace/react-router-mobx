import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';

import history from '../history'

import HelloWorld from './HelloWorld.jsx';
import Hello from './Hello.jsx';
import World from './World.jsx';

const Routes = () => {
    return (
        <Router history={history}>
            <div>
                <div>
                    <ul>
                        <li><Link to="/hello">Hello</Link></li>
                        <li><Link to="/world">World</Link></li>
                        <li><Link to="/helloworld">Hello World</Link></li>
                    </ul>
                    <hr />
                    <Route path="/hello" component={Hello} />
                    <Route path="/world" component={World} />
                    <Route path="/helloworld" component={HelloWorld} />
                </div>
            </div>
        </Router>
    );
};

export default Routes;
