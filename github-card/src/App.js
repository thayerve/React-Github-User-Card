import React from 'react';
import './App.css';
import axios from 'axios';
import Card from './Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {}
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/thayerve")
    .then(response => {
      this.setState({ userData: response.data});
      console.log(this.state.userData);
    })
    
  }

  render() {

    return (
      <div>
        <Card />
      </div>
    )
  }
}

export default App;
