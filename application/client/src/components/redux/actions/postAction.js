export const updateForm = fieldToChange => {
  return {
    type: "UPDATE_FORM",
    fieldToChange
  };
};

export const setGeoLocation = location => {
  return {
    type: "UPDATE_GEOLOCATION",
    location
  }
}

export const errGetLocation = () => {
  return {
    type: "ERR_GET_LOCATION",
  }
}

export const onFileLoad = newImage => {
  return {
    type: "LOAD_IMAGE",
    newImage
  };
};

export const addLoadedFile = imageToAdd => {
  return {
    type: "ADD_TO_IMAGE_LIST",
    imageToAdd
  }
}

export const removeAllLoadedFile = () => {
  return {
    type: "REMOVE_ALL",
  }

}

export const resetReducer = () => {
  return {
    type: "RESET_REDUCER"
  }
}

export const isLoading = () => {
  return {
    type: "GEO_LOCATION_LOADING"
  }
}
export const doneLoading = () => {
  return {
    type: "GEO_LOCATION_DONE_LOADING"
  }
}

export const needsToLogin = () => {
  return {
    type: "TRIED_POSTING_ISSUE"
  }
}

export const finishedLoggingIn = () => {
  return {
    type: "FINISHED_LOGGING_IN_AFTER_TRYING_TO_POST"
  }
} 
