import React from 'react';
import { Route, Switch } from 'react-router';

// Import modules/routes
import Home from './home';
import About from './about';
import Campaigns from './campaigns';
import PageNotFound from './common/components/PageNotFound';

export default (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/campaigns" component={Campaigns}/>
    <Route component={PageNotFound} />
  </Switch>
);