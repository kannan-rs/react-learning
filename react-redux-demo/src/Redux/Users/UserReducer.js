import * as actions from "./UserTypes"

const initialState = {
    loading: true,
    users: [],
    error: ""
}

const UsersReducer = ( state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_USER_REQUEST:
            return {
                ...state, 
                loading: true,
                users: [],
                error: "" 
            }
        
        case actions.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                // users : [...state.users, action.payload],
                users : action.payload,
                error: ""
            }
        
        case actions.FETCH_USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    
        default:
            return state
    }
}

export default UsersReducer