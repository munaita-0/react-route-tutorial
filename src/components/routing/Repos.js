import React from 'react';
import { Route } from 'react-router-dom';
import RepoList from './RepoList';
import RepoDetails from './RepoDetails';

const Repos = () => (
  <div>
    <Route path="/repos" component={RepoList} />
    <Route path="/repos/details/:name" component={RepoDetails} />
  </div>
);

export default Repos;
