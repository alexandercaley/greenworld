import _ from "lodash";

// const INITIAL_STATE = {
//   postStatus: "",
//   location: "",
//   postType: "",
//   loadedFiles: [],
//   fd: ""
//   // submitButtonClicked: false
// };

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
  locationError: ""
};

// Post reducer
const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      let fieldToChange = action.fieldToChange;
      let keyName = "";
      let value = "";

      // Seperate keys and values
      // We can update store with any key 
      // with any value
      for( let key in fieldToChange ) {
        keyName = key;
        value = fieldToChange[key];
      }  
      console.log(keyName, value);
      return {
        ...state,
        [keyName]: value
      };  
    case "LOAD_IMAGE":
      let newImage = action.newImage;
      console.log(newImage);
      // console.log([...state.loadedFiles, newImage]);
      return {
        ...state,
        // loadedFiles: [...state.loadedFiles, newImage],
        imageFile: newImage
      };
    case "UPDATE_GEOLOCATION":
      let { latitude, longitude } = action.location;
      console.log(latitude, longitude);
      return {
        ...state,
        latitude: latitude,
        longitude: longitude
      };
    case "ADD_TO_IMAGE_LIST":
      let imageToAdd = action.imageToAdd;
      console.log(imageToAdd);
      return {
        ...state,
        loadedFiles: [...state.loadedFiles, imageToAdd]
      };

    case "ERR_GET_LOCATION":
      return {
        ...state,
        locationError: "ERR_GET_LOCATION"
      }

    case "ADD_TO_IMAGE_LIST":
      return {
        ...state,
        loadedFiles: []
      };
    default:
      return state;
  }
};

export default postReducer;
