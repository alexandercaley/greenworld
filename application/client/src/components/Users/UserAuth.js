import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { clickLogin, clickRegister } from "../redux/actions/userauthAction";

class UserAuth extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       login: false,
//       register: false
//     };
//   }

  loginButton = () => {
    this.props.clickLogin();
    this.props.history.push("/login");
  };

  registerButton = () => {
    this.props.clickRegister();
    const path = "/register";
    this.props.history.push(path);
  };

  componentDidMount() {
    console.log(this.props.login);
  }

  render() {
    let { login, register } = this.props;
    return (
      <div className="userAuth">
        {login || (
          <Button id="loginButton" onClick={this.loginButton}>
            Login
          </Button>
        )}
        {register || (
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
  return {
    login,
    register
  };
};

const mapDispatchToProps = {
  clickLogin,
  clickRegister
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserAuth));
