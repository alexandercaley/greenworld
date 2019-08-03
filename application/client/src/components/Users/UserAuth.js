import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { clickLogin, clickRegister } from "../redux/actions/userauthAction";
import { logout } from "../redux/actions/loginAction";
import ReactDOM from "react-dom";

class UserAuth extends Component {
  loginButton = () => {
    this.props.clickLogin();
    this.props.history.push("/login");
    console.log("clicked login");
  };

  registerButton = () => {
    this.props.clickRegister();
    this.props.history.push("/register");
    console.log("clicked register");
  };

  logoutButton = async () => {
    try {
      // Async await so we to make sure token gets removed before
      // performing any other tasks
      await localStorage.removeItem('token');
      this.props.history.push("/");
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };
  
  render() {
    let curToken = localStorage.getItem("token");
    console.log();
    return (
      <div className="userAuth">
        {curToken && (
          <Button id="loginButton" onClick={this.logoutButton}>
            Logout
          </Button>
        )}
        {!curToken && (
          <Button id="loginButton" onClick={this.loginButton}>
            Login
          </Button>
        )}
        {!curToken && (
          <Button id="registerButton" onClick={this.registerButton}>
            Register
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  let { login, register } = state.userauthReducer;
  let { LOGGEDIN } = state.loginReducer;
  return {
    login,
    register,
    LOGGEDIN
  };
};

const mapDispatchToProps = {
  clickLogin,
  clickRegister,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserAuth));
