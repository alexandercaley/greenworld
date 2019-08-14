import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { validateStatus, reRouteAfterCompleteLogin } from "../redux/actions/loginAction";
import { finishedLoggingIn } from "../redux/actions/postAction";
import axios from "axios";

class Login extends Component {
  
  handleSubmit = (event) => {
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
        console.log(this.props.ROUTE)
        // Handle code based on message response from backend
        let message = res.data.message;

        // Handle if login was successful
        if (message === "LOGIN_SUCCESS") {

          let validate = {
            USER_NOT_FOUND: false,
            validated: true,
            LOGGEDIN: true,
            INCORRECT_USERNAME_OR_PASSWORD: false
          }
          this.props.validateStatus(validate);
          this.props.finishedLoggingIn();
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user_id', res.data.result[0].id)
          localStorage.setItem('username', username)
          
          let path = "";	
          // to figure out what was the last route
          let historyLength = this.props.history.length - 1;
          
           // put somet path here where you want to redirect after loging in 	
          if(this.props.ROUTE == "/register") {	
            // path =  this.props.ROUTE;	
            // console.log(path);	
            // console.log(this.props.history);	
            // this.props.history.push(path);	
            this.props.reRouteAfterCompleteLogin("/");
            path = "/";	
            console.log(path);	
            this.props.history.push(path);	
          } else {
            this.props.history.goBack();
          } 
        }
        // If cannot find user 
        else if (message === "USER_NOT_FOUND") {

          let notFound = {
            USER_NOT_FOUND: true,
            validated: false,
            LOGGEDIN: false,
            INCORRECT_USERNAME_OR_PASSWORD: false
          }

          this.props.validateStatus(notFound);
        }
        // If username or password was incorrect.
        else if (message === "INCORRECT_USERNAME_OR_PASSWORD") {

          let incorrectData = {
            USER_NOT_FOUND: false,
            validated: false,
            LOGGEDIN: false,
            INCORRECT_USERNAME_OR_PASSWORD: true
          }

          this.props.validateStatus(incorrectData);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props.location)
    console.log(nextProps.location);
    if (nextProps.location !== this.props.location) {
      console.log("line 94")
    }
  }

  componentDidMount() {	
    console.log("hi");	
    console.log(this.props.ROUTE)

    // get route passed from post page route	
    // We do this so we can redirect back to post page	
    let route = this.props.ROUTE	
    // this.props.reRouteAfterCompleteLogin(this.props.route);	
  }

  render() {
    const {
      validated,
      LOGGEDIN,
      INCORRECT_USERNAME_OR_PASSWORD,
      USER_NOT_FOUND,
      TRIED_POSTING_ISSUE
    } = this.props;
    return (
      <div>
          {TRIED_POSTING_ISSUE == true && "Please Login Before Posting Item"}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { 
    username,
    password,
    validated,
    LOGGEDIN,
    USER_NOT_FOUND,
    INCORRECT_USERNAME_OR_PASSWORD,
    REDIRECT,
    ROUTE
  } = state.loginReducer;

  let { TRIED_POSTING_ISSUE } = state.postReducer;
  console.log(TRIED_POSTING_ISSUE);
  console.log(state.loginReducer)
  console.log(state.registerReducer)
  console.log(state);
  return {
    username,
    password,
    validated,
    LOGGEDIN,
    USER_NOT_FOUND,
    INCORRECT_USERNAME_OR_PASSWORD,
    REDIRECT,
    ROUTE,
    TRIED_POSTING_ISSUE
  };
}

// import action functions
// can also import different actions from different files
const mapDispatchToProps = {
  validateStatus,
  finishedLoggingIn,
  reRouteAfterCompleteLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Login));
