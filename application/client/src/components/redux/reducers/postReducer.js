const INITIAL_STATE = {
  postStatus: "",
  location: "",
  postType: ""
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      let fieldToChange = action.fieldToChange;
      console.log(fieldToChange);
      return {
        ...state,
        fieldToChange
      };
    default:
      return state;
  }
};

export default postReducer;