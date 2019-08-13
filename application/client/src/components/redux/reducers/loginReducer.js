const INITIAL_STATE = {
  username: "",
  password: "",
  validated: false,
  LOGGEDIN: false,
  USER_NOT_FOUND: false,
  INCORRECT_USERNAME_OR_PASSWORD: false,
  ROUTE: ""
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "VALIDATE":
      let {
        validated,
        LOGGEDIN,
        USER_NOT_FOUND,
        INCORRECT_USERNAME_OR_PASSWORD
      } = action.validate;
      return {
        ...state,
        validated: validated,
        LOGGEDIN: LOGGEDIN,
        USER_NOT_FOUND: USER_NOT_FOUND,
        INCORRECT_USERNAME_OR_PASSWORD: INCORRECT_USERNAME_OR_PASSWORD
      };
    case "REDIRECT":
      let route = action.route;
      console.log(route);
      return {
        ...state,
        // REDIRECT: true,
        ROUTE: route
      };
    case "LOGGOUT":
      return {
        ...state,
        LOGGEDIN: false
      };
      console.log("logout action");
    default:
      return state;
  }
};

export default loginReducer;
