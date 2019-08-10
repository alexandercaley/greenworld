import React, { Component } from "react";
import _ from "lodash";
import PostForm from "./PostForm";
import "./assets/DraggableUploader.scss";

import Login from "../Users/Login";

class Post extends Component {
  render() {
    let curToken = localStorage.getItem("token");
    return (
      <div>
        {curToken == null && (
          <p> You must login before you can post anything </p>
        )}
        {/* We pass in the route to props for Login because login has a feature
        to detect any incoming routes to redirect back to that page
        after logging in  */}
        {curToken == null ? <Login route="/post" /> : <PostForm />}
      </div>
    );
  }
}

export default Post;
