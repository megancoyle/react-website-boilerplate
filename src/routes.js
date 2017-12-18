import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import  { Left, Right, Whoops404  } from './components';

const routes = (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route component={Whoops404} />
      </Switch>
    </BrowserRouter>
)

export default routes
