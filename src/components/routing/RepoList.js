import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/shogo807/repos')
      .then(response => response.json())
      .then((responseData) => {
        this.setState({ repositories: responseData });
      });
  }

  render() {
    const repos = this.state.repositories.map(repo => (
      <li key={repo.id}>
        <Link to={`/repos/details/${repo.name}`}>{repo.name}</Link>
      </li>
    ));

    return (
      <div>
        <h1>Github Repos</h1>
        <ul>
          {repos}
        </ul>
      </div>
    );
  }
}

export default RepoList;
