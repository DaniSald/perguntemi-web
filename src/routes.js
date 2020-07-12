import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import Home from './pages/home';
import Answer from './pages/answer';
import createAnswer from './pages/create_answer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/create/answer" component={createAnswer} exact />
      <Route path="/" component={Home} exact />
      <Route path="/answer" component={Answer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
