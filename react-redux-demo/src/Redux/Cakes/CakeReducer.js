import * as actions from "./CakeTypes"

const initialState = {
    numberOfCakes : 10
}

const CakeReducer = ( state = initialState, action) => {
    switch (action.type) {
        case actions.BUY_CAKE:
            return {
                ...state, 
                numberOfCakes: state.numberOfCakes - action.payload 
            }
    
        default:
            return state
    }
}

export default CakeReducer