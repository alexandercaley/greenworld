import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layouts/Footer";
// React Router Import
import { Switch, Route } from "react-router-dom";

// Import Pages
import showPostings from "./components/pages/showPostings";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import AboutUs from "./components/pages/AboutUs";
import Post from "./components/pages/Post";
import Category from "./components/pages/Category";
import ModalCard from "./components/pages/ModalCard";

import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Users/Login"
import Register from "./components/Users/Register"

class App extends Component {

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
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
        {/* <button onClick={this.fetchData}>Fetch</button>
        <button onClick={this.postData}>Post</button> */}
      </div>
    );
  }
}

export default App;
