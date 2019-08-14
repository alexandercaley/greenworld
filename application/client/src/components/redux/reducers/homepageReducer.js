const INITIAL_STATE = {
  data: [],
  pageIndex: 1,
  search: "",
  details_id: "",
};

const homepageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      console.log(action);
      let { data } = action;
      console.log(data);
      console.log(state.data);
      return {
        ...state,
        data: [...data]
      };
    case "CLICKED_ISSUE_DETAILS":
      let { id, index } = action.tempObj;
      console.log(id, index);
      return {
        ...state,
        details_id: id,
        pageIndex: index
      };
    case "UPDATE_INDEX":
      return {
          ...state,
          pageIndex:index
      };
    default:
      return state;
  }
};

export default homepageReducer;
