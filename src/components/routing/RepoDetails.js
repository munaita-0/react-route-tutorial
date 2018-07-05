import React, { Component } from 'react';
import 'whatwg-fetch';

class RepoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repository: {},
    };
  }

  componentDidMount() {
    const name = this.props.match.params.name;
    this.fetchData(name);
  }

  componentWillReceiveProps(nextProps) {
    const name = nextProps.match.params.name;
    this.fetchData(name);
  }

  fetchData(name) {
    fetch(`http://api.github.com/repos/shogo807/${name}`)
      .then(response => response.json())
      .then((responseData) => {
        this.setState({ repository: responseData })
      });
  }

  render() {
    const stars = [];
    for (let i = 0; i < this.state.repository.stargazers_count; i += 1) {
      stars.push('★');
    }

    return (
      <div>
      <h2>{ this.state.repository.name }</h2>
      <p>{ this.state.repository.description }</p>
      <span>{ stars }</span>
      </div>
    );
  }
}

export default RepoDetails;
