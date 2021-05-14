import * as actions from "./IceCreamTypes"

const initialState = {
    numberOfIceCreams : 20
}

const IceCreamReducer = ( state = initialState, action) => {
    switch (action.type) {
        case actions.BUY_ICECREAM:
            return {
                ...state, 
                numberOfIceCreams: state.numberOfIceCreams - 1 
            }
    
        default:
            return state
    }
}

export default IceCreamReducer