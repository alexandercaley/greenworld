const INITIAL_STATE = {
  username: "",
  password: "",
  validated: false,
  LOOGEDIN: false,
  USER_NOT_FOUND: false,
  INCORRECT_USERNAME_OR_PASSWORD: false
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "VALIDATE":
      let {
        validated,
        LOOGEDIN,
        USER_NOT_FOUND,
        INCORRECT_USERNAME_OR_PASSWORD
      } = action.validate;
      return {
        ...state,
        validated: validated,
        LOOGEDIN: LOOGEDIN,
        USER_NOT_FOUND: USER_NOT_FOUND,
        INCORRECT_USERNAME_OR_PASSWORD: INCORRECT_USERNAME_OR_PASSWORD
      };
    default:
      return state;
  }
};

export default loginReducer;
