import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {
  validate,
  formNotFullfilled,
  registered,
  userAlreadyExists
} from "../redux/actions/registerAction";
import { reRouteAfterCompleteLogin } from "../redux/actions/loginAction";

class Register extends Component {
  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    let firstName = event.target.children[0].children[0].children[1].value;
    let lastName = event.target.children[0].children[1].children[1].value;
    let email = event.target.children[0].children[2].children[1].value;
    let username = event.target.children[0].children[3].children[1].value;
    let password = event.target.children[0].children[4].children[1].value;

    // check if names have spacing
    if (
      username.includes(" ") ||
      firstName.includes(" ") ||
      email.includes(" ") ||
      lastName.includes(" ")
    ) {
      let validate = {
        validated: false,
        registered: false,
        USER_ALREADY_EXISTS: false,
        FORM_NOT_FULLFILLED: false,
        SPACE_IN_USERNAME: true
      };

      this.props.validate(validate);
      return 0;
    }

    // split into arrays to guarentee no spacing
    let firstName1 = firstName.split(" ");
    let lastName1 = lastName.split(" ");
    let email1 = email.split(" ");
    let username1 = username.split(" ");
    let password1 = password.split(" ");

    // check if any fields are empty
    // If any field is empty change state in registerReducer of formNotFullfilled to true
    if (
      firstName1[0] === "" ||
      lastName1[0] === "" ||
      email1[0] === "" ||
      username1[0] === "" ||
      password1[0] === ""
    ) {
      console.log(password1);
      this.props.formNotFullfilled();
    } else {
      let obj = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        username: username,
        password: password
      };

      axios
        .post("/userauth/register", obj)
        .then(res => {

          let message = res.data.message;
          console.log(res);
          if (message === "REGISTER_SUCCESS") {
            // const pathAfterLogin = "/home"
            // reRouteAfterCompleteLogin(pathAfterLogin);
            this.props.registered();
            const path = "/login";
            this.props.history.push(path);
          } else if (message === "USER_ALREADY_EXISTS") {
            console.log("user already exists");
            this.props.userAlreadyExists();
          } else if (message === "ERR_NO_PASSWORD") {
            console.log("handle no password error");
          }
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  }

  componentDidMount = () => {

    // update path so if you're logged in Login knows
    // last path is "/register"
    let path = "/register"
    this.props.reRouteAfterCompleteLogin(path);
    console.log(this.props.ROUTE)
  };

  render() {
    console.log(this.props);
    const {
      validated,
      isRegistered,
      USER_ALREADY_EXISTS,
      FORM_NOT_FULLFILLED,
      SPACE_IN_USERNAME
    } = this.props;
    return (
      <div>
        <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
          className="RegisterForm"
        >
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="8" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Email" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="8" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="User Name" />
              {USER_ALREADY_EXISTS && (
                <p className="errorHandler">User already exists</p>
              )}
            </Form.Group>
            <Form.Group as={Col} md="8" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>
          {FORM_NOT_FULLFILLED && (
            <p className="errorHandler">Please fill out form</p>
          )}
          {SPACE_IN_USERNAME && (
            <p className="errorHandler">No spaces are allowed as characters</p>
          )}
          <Button type="submit">Register</Button>
        </Form>
        {/* {registered && <Login />} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  let {
    username,
    password,
    validated,
    isRegistered,
    USER_ALREADY_EXISTS,
    FORM_NOT_FULLFILLED,
    SPACE_IN_USERNAME
  } = state.registerReducer;
  let { ROUTE } = state.loginReducer;
  console.log(state);
  return {
    username,
    password,
    validated,
    isRegistered,
    USER_ALREADY_EXISTS,
    FORM_NOT_FULLFILLED,
    SPACE_IN_USERNAME,
    ROUTE
  };
};

const mapDispatchToProps = {
  validate,
  formNotFullfilled,
  registered,
  userAlreadyExists,
  reRouteAfterCompleteLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
