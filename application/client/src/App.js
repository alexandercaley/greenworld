import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      message: '',
    }
  }

  loadSomeData() {
    console.log("line 16")
    axios.get('/hi')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchData = () => {
    console.log("line 27");
    this.loadSomeData();
  }

  postData = () => {
    console.log("here");
    axios.post('/hi', { x: 'y' })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.fetchData}>
            Fetch
          </button>
          <button onClick={this.postData}>
            Post
          </button>
        </header>
      </div>
    );
  }
}

export default App;