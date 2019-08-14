export const updateData = data => {
    console.log(data)
    return {
        type: "UPDATE_DATA",
        data
    }
}

export const updateClickedDetails = (id, index) => {
    let tempObj = {id, index};
    return {
        type: "CLICKED_ISSUE_DETAILS",
        tempObj
    }
}