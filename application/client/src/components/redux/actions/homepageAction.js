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

export const handleIndex = index => {
    return {
        type: "UPDATE_INDEX",
        index
    }
}

export const updateSearch = input => {
    return {
        type: "UPDATE_SEARCH",
        input
    }
}

export const updateHomepage = bool => {
    return {
        type: "UPDATE_HOMEPAGE",
        bool
    }
}