import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/pages/Home';
import About from './components/pages/About';
import  { Left, Right, Whoops404  } from './components';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="about" component={About} />
        <Route path="/*" component={Home} />
    </Router>
)

export default routes
