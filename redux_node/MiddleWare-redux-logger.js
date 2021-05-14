const redux = require("redux")
const reduxLogger = require("redux-logger")
// import { logger } from 'redux-logger'

// Combine multiple Reducers
const combineMultiReducer = () => {

    // Redux bring in store (include using require)
    // Initilize createStore
    const createStore = redux.createStore

    // Logger > CreateLogger
    const logger = reduxLogger.logger

    // Get the combined reducer from Redux
    const combineReducer = redux.combineReducers

    // Apply Middleware
    const applyMiddleware = redux.applyMiddleware


    // Actions
    const BUY_CAKE = "BUY_CAKE"
    const BUY_ICE_CREAM = "BUY_ICE_CREAM"

    // Action Containers
    const buyCake = info => ({ type: BUY_CAKE, info: info}) 

    const buyIceCream = info => ({ type: BUY_ICE_CREAM, info: info}) 

    // Initilize state
    const initialCakeSate = { numberOfCake: 10 }

    const initialIceCreamState = { numberOfIceCream: 20 }

    // Pure function Reducer to manage state
    const CakeReducer = (state = initialCakeSate, action) => {
        switch (action.type) {
            case BUY_CAKE:
                return {...state, numberOfCake: state.numberOfCake - 1}
        
            default:
                return state
        }
    }

    const IceCreamReducer = (state = initialIceCreamState, action) => {
        switch (action.type) {
            case BUY_ICE_CREAM:
                return {...state, numberOfIceCream: state.numberOfIceCream - 1}
        
            default:
                return state
        }
    }

    const rootReduce = combineReducer({
        cake: CakeReducer,
        iceCream: IceCreamReducer

    })

    // Create a store by passing reducer
    // Redux Store to hold Application method
    const store = createStore(rootReduce, applyMiddleware(logger))

    // Get State
    console.log("Get the initial State > ", store.getState())

    // Subscriber for State change
    const unsubscribestore = store.subscribe( () => {
        // console.log("Cake State Changed > State Changed", store.getState()) // Logger will take care of logging
    })

    // Dispatch event for Cake
    store.dispatch(buyCake("Buy cake"))
    store.dispatch(buyCake("Buy cake"))


    // Dispatch event for Ice Cream
    store.dispatch(buyIceCream("Buy Ice Cream"))
    store.dispatch(buyIceCream("Buy Ice Cream"))

    // Unsubscribe
    console.log("RootStore Unsubscribed")
    unsubscribestore()
}

combineMultiReducer()