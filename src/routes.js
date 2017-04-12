import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import  { Left, Right, Whoops404  } from './components';

const routes = (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="services" component={Services} />
        <Route path="about" component={About} />
        <Route path="*" component={Whoops404} />
    </Router>
)

export default routes
