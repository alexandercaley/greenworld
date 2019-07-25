import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Navbar from "./components/layout/Navbar";

import { Switch, Route } from "react-router-dom";
// Import Pages
import showPostings from "./components/pages/showPostings";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import AboutUs from "./components/pages/AboutUs";
import Post from "./components/pages/Post";
import Category from "./components/pages/Category";
import showPostingss from "./components/pages/showPostings";

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
            <Route exact path="/home" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/aboutUs" component={AboutUs} />
            <Route exact path="/post" component={Post} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/showPostings" component={showPostings} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
