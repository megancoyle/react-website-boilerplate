import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/ui/Home';
import About from './components/ui/About';
import  { Left, Right, Whoops404  } from './components';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="about" component={About} />
        <Route path="*" component={Whoops404} />
    </Router>
)

export default routes
