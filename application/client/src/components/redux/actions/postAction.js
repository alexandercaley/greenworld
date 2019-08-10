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

export const errGetLocation = err => {
  return {
    type: "ERR_GET_LOCATION",
    err
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