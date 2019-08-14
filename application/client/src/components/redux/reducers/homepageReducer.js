const INITIAL_STATE = {
  data: [],
  pageIndex: 1,
  search: "",
  details_id: "",
  pageIndex: ""
};

const homepageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
        console.log(action)
        let { data } = action
        console.log(data)
        console.log(state.data)
        return {
            ...state,
            data: [...data]
        }
    case "CLICKED_ISSUE_DETAILS":
        let { id, index } = action.tempObj
        return{
            ...state,
            details_id: id,
            pageIndex: index
        }
    default:
        return state;
  }
};

export default homepageReducer;
