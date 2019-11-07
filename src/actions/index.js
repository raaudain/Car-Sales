
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addItem = name => {
    console.log("action", name)
    return {
        type: ADD_ITEM,
        payload: name
    }
}

export const removeFeature = id => {
    return{
        type: REMOVE_FEATURE,
        payload: id
    }
}