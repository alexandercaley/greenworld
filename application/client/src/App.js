import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layouts/Footer";
// React Router Import
import { Switch, Route } from "react-router-dom";
// Import Pages
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import AboutUs from "./components/pages/AboutUs";
import Post from "./components/pages/Post";
import Category from "./components/pages/Category";

import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      message: ""
    };
  }

  loadSomeData() {
    console.log("line 16");
    axios
      .get("/hi")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  fetchData = () => {
    console.log("line 27");
    this.loadSomeData();
  };

  postData = () => {
    console.log("here");
    axios
      .post("/hi", { x: "y" })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/category" component={Category} />
          </Switch>
        </Router>
        {/* <button onClick={this.fetchData}>Fetch</button>
        <button onClick={this.postData}>Post</button> */}
      </div>
    );
  }
}

export default App;
