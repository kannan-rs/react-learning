// To fetch the list of users and store it in STATE
/*
    Handle
        1. Load users from API 
        2. Show that user API is still loading (UI spinner)
        3. Error
    
    So, 3 Actions & 3 Reducers & 3 Action Creators
        1. FETCH_UESRS_REQUEST
        2. FETCH_USERS_SUCCESS
        3. FETCH_USERS_FAILURE
    
    State
    {
        loading: true, / false
        users: [], // initially empty array
        error: ""
    }
*/

/*
    Packages Needed
    1. redux (For state management)
    2. axios (For API calls)
    3. redux-thunk (Middleware for defining action creators)
*/
const redux = require("redux")
const thunk = require("redux-thunk")
const axios = require("axios")
// Redux bring in store (include using require)
// Initilize createStore
const createStore = redux.createStore

// Apply Middleware
const applyMiddleware = redux.applyMiddleware

// Thunk Middle Ware
const thunkMiddleware = thunk.default

// Initilizing state
const initialUsersState = {
    loading: true,
    users: [],
    error: ""
}

// Define Actions
const FETCH_UESRS_REQUEST = "FETCH_UESRS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

// Action Creators
const fetchUsersRequest = () => ({
    type: FETCH_UESRS_REQUEST
})

const fetchUsersSuccess = ( users ) => ({
    type: FETCH_USERS_SUCCESS,
    payload: {
        users: users
    }
})

const fetchUserFailure = ( error ) => ({
    type: FETCH_USERS_FAILURE,
    payload: {
        error: error
    }
})

// Define Reducer
const reducer = (store = initialUsersState, action) => {
    switch (action.type) {
        case FETCH_UESRS_REQUEST:
            return {
                ...store,
                loading: true,
                error: ""
            }
        
        case FETCH_USERS_SUCCESS:
            return {
                ...store,
                loading: false,
                users: [...store.users, action.payload.users.slice()],
                error: ""
            }
        
        case FETCH_USERS_FAILURE:
            return {
                ...store,
                loading: false,
                users: [],
                error: action.payload.error
            }
    
        default:
            return store 
    }
}

// Create a store by passing reducer
// Redux Store to hold Application method
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

// Get State
console.log("Get the initial State > ", store.getState())

// Subscriber for State change
const unsubscribeStore = store.subscribe( () => {
    console.log("Users State Changed > State Changed", store.getState())
})

// Create Async Action Creator
// Not necessery to be pure
const fetchUsers = () => {
    return function( dispatch ) {
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then( response => {
            const users = response.data.map( user => user.id )
            dispatch(fetchUsersSuccess(users))
        })
        .catch( error => {
            dispatch(fetchUserFailure("API failed"))
        })
    }
}

const fetchUsersInvalid = () => {
    return function( dispatch ) {
        dispatch(fetchUsersRequest())
        axios.get("https://jsonplaceholder.typicode.com/users1")
        .then( response => {
            const users = response.data.map( user => user.id )
            dispatch(fetchUsersSuccess(users))
        })
        .catch( error => {
            dispatch(fetchUserFailure("API failed"))
        })
    }
}

store.dispatch(fetchUsers())
store.dispatch(fetchUsersInvalid())

// unsubscribeStore()
