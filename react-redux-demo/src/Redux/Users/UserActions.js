import axios from 'axios'
import * as actions from "./UserTypes"

export const fectchUserRequest = () => ({
    type: actions.FETCH_USER_REQUEST
})

export const fectchUserSuccess = ( users ) => ({
    type: actions.FETCH_USER_SUCCESS,
    payload: users
})

export const fectchUserFailure = ( error ) => ({
    type: actions.FETCH_USER_FAILURE,
    payload: error
})

// Action Creators for Fetch data API call
// INstead of returning the action, we returns a function
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fectchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then( response => {
            dispatch(fectchUserSuccess(response.data))
        })
        .catch( error => {
            dispatch(fectchUserFailure(error))
        })
    }
}