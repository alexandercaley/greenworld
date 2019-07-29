import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
import { validateStatus } from "../redux/actions/loginAction";
import axios from "axios";

class Login extends Component {
  
  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target.children[0]);
    let username = event.target.children[0].children[0].children[1].value;
    let password = event.target.children[0].children[1].children[1].value;
    let obj = {
      username: username,
      password: password
    };
    console.log(obj);
    axios
      .post("/userauth/login", obj)
      .then(res => {
        console.log(res);
        let message = res.data.message;
        if (message === "LOGIN_SUCCESS") {

          let validate = {
            USER_NOT_FOUND: false,
            validated: true,
            LOOGEDIN: true,
            INCORRECT_USERNAME_OR_PASSWORD: false
          }
          this.props.validateStatus(validate);
          localStorage.setItem('token', res.data.token);
          console.log(localStorage)
          // put somet path here where you want to redirect after loging in 
          const path = "/";
          console.log(this.props.history);
          this.props.history.push(path);
        } else if (message === "USER_NOT_FOUND") {

          let notFound = {
            USER_NOT_FOUND: true,
            validated: false,
            LOOGEDIN: false,
            INCORRECT_USERNAME_OR_PASSWORD: false
          }

          this.props.validateStatus(notFound);
        } else if (message === "INCORRECT_USERNAME_OR_PASSWORD") {

          let incorrectData = {
            USER_NOT_FOUND: false,
            validated: false,
            LOOGEDIN: false,
            INCORRECT_USERNAME_OR_PASSWORD: true
          }

          this.props.validateStatus(incorrectData);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    console.log("hi");
  }

  render() {
    const {
      validated,
      LOOGEDIN,
      INCORRECT_USERNAME_OR_PASSWORD,
      USER_NOT_FOUND
    } = this.props;
    return (
      <div>
        {!LOOGEDIN && (
          <Form
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
            className="LoginForm"
          >
            <Form.Row>
              <Form.Group as={Col} md="8" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="User Name" />
              </Form.Group>
              <Form.Group as={Col} md="8" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
            {INCORRECT_USERNAME_OR_PASSWORD && (
              <p className="errorHandler">Incorrect Username or Password</p>
            )}
            {USER_NOT_FOUND && <p className="errorHandler">User not found</p>}
            <Button type="submit">Login</Button>
          </Form>
        )}
        {/* {LOOGEDIN && <div className="App"> <Animation /></div>} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { 
    username,
    password,
    validated,
    LOOGEDIN,
    USER_NOT_FOUND,
    INCORRECT_USERNAME_OR_PASSWORD 
  } = state.loginReducer;
  console.log(state);
  return {
    username,
    password,
    validated,
    LOOGEDIN,
    USER_NOT_FOUND,
    INCORRECT_USERNAME_OR_PASSWORD,
  };
}

const mapDispatchToProps = {
  validateStatus,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
