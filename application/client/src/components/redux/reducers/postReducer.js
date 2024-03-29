const INITIAL_STATE = {
  postStatus: "",
  location: "",
  postType: "",
  loadedFiles: [],
  fd: "",
  file: "",
  latitude: "",
  longitude: "",
  street: "",
  city: "",
  state: "",
  zipcode: "",
  issueType: "",
  description: "",
  imageFile: "",
  locationError: false,
  geoLocationIsLoading: false,
  TRIED_POSTING_ISSUE: false,
};

// Post reducer
const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      let fieldToChange = action.fieldToChange;
      let keyName = "";
      let value = "";
      console.log(keyName);
      console.log(value);
      console.log(fieldToChange);
      // Seperate keys and values
      // We can update store with any key 
      // with any value
      for( let key in fieldToChange ) {
        keyName = key;
        value = fieldToChange[key];
      }  
      
      return {
        ...state,
        [keyName]: value
      };  
    case "LOAD_IMAGE":
      let newImage = action.newImage;

      return {
        ...state,
        imageFile: newImage
      };
    case "UPDATE_GEOLOCATION":
      let { latitude, longitude } = action.location;
      
      return {
        ...state,
        latitude: latitude,
        longitude: longitude
      };
    case "ADD_TO_IMAGE_LIST":
      let imageToAdd = action.imageToAdd;
      
      return {
        ...state,
        loadedFiles: [...state.loadedFiles, imageToAdd]
      };

    case "ERR_GET_LOCATION":
      return {
        ...state,
        locationError: true
      }

    case "ADD_TO_IMAGE_LIST":
      return {
        ...state,
        loadedFiles: []
      };
    case "GEO_LOCATION_LOADING":
      return{
        ...state,
        geoLocationIsLoading: true,
      };
    case "GEO_LOCATION_DONE_LOADING":
      return {
        ...state,
        geoLocationIsLoading: false,
      }

    // Case TRIED_POSTING_ISSUE and FINISHED_LOGGING_IN_AFTER_TRYING_TO_POST
    // are just used to set TRIED_POSTING_ISSUE to true and false
    // it will turn true if user tries to post without logging in,
    // It will turn false after the user has succesfully logged in.
    case "TRIED_POSTING_ISSUE":
      return {
        ...state,
        TRIED_POSTING_ISSUE: true,
      }
    case "FINISHED_LOGGING_IN_AFTER_TRYING_TO_POST":
      return{
        ...state,
        TRIED_POSTING_ISSUE: false,
      }
    case "RESET_REDUCER":
      return {
        postStatus: "",
        location: "",
        postType: "",
        loadedFiles: [],
        fd: "",
        file: "",
        latitude: "",
        longitude: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        issueType: "",
        description: "",
        imageFile: "",
        locationError: "",
        geoLocationIsLoading: false, 
      }
    default:
      return state;
  }
};

export default postReducer;
