const INITIAL_STATE = {
  data: [],
  pageIndex: 1,
  search: "",
  details_id: "",
  toUpdateHomepage: false,
};

const homepageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      let { data } = action;
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
    case "UPDATE_SEARCH":
        let input = action.input
        console.log(input)
        return {
            ...state,
            search: input
        }
    case "UPDATE_HOMEPAGE":
        let bool = action.bool
        console.log(bool)
        return {
            ...state,
            toUpdateHomepage: bool
        }
    default:
      return state;
  }
};

export default homepageReducer;
