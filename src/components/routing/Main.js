import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Repos from './Repos';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/repos" component={Repos} />
    </Switch>
  </main>
);

export default Main;
