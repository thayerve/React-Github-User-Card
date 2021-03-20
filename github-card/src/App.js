import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './UserCard';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      followers: [],
      repos: []
    };
  }

  componentDidMount() {
    axios 
      .get("https://api.github.com/users/thayerve")
      .then(response => {
      this.setState({ userData: response.data });
    });

    axios
      .get("https://api.github.com/users/thayerve/followers")
      .then(response => {
        this.setState({ followers: response.data })
      });
    
    axios
      .get("https://api.github.com/users/thayerve/repos")
      .then(response => {
        console.log("Repos response:", response);
        this.setState({repos: response.data});
      })
  }

  render() {

    return (
      
        <UserCard 
          data={this.state.userData} followers={this.state.followers}
          repos={this.state.repos}
          />
    )
  }
}

export default App;
