const redux = require("redux")

const usingOneReducer = () => {
    // Actions
    const BUY_CAKE = "BUY_CAKE"
    const BUY_ICE_CREAM = "BUY_ICE_CREAM"

    // Action Containers
    const buyCake = info => ({
        type: BUY_CAKE,
        info: info
    }) 

    const buyIceCream = info => ({
        type: BUY_ICE_CREAM,
        info: info
    }) 

    // Initilize state
    const initialSate = {
        numberOfCake: 10,
        numberOfIceCream: 20
    }

    // Pure function Reducer to manage state

    const reducer = (state = initialSate, action) => {
        switch (action.type) {
            case BUY_CAKE:
                return {...state, numberOfCake: state.numberOfCake - 1}
            
            case BUY_ICE_CREAM:
                return {...state, numberOfIceCream: state.numberOfIceCream - 1}
        
            default:
                return state
        }
    }

    // Redux bring in store (include using require)
    // Initilize createStore
    const createStore = redux.createStore

    // Create a store by passing reducer
    // Redux Store to hold Application method
    const store = createStore(reducer)

    // Get State
    console.log("Get the initial State > ", store.getState())

    // Subscriber for State change
    const unsubscribe = store.subscribe( () => {
        console.log("State Changed", store.getState())
    })

    // Dispatch event
    store.dispatch(buyCake("Buy cake"))
    store.dispatch(buyCake("Buy cake"))
    store.dispatch(buyCake("Buy cake"))
    store.dispatch(buyCake("Buy cake"))

    store.dispatch(buyIceCream("Buy cake"))
    store.dispatch(buyIceCream("Buy cake"))
    store.dispatch(buyIceCream("Buy cake"))
    store.dispatch(buyIceCream("Buy cake"))

    // Unsubscribe state
    console.log("Unsubscribed")
    unsubscribe()

    store.dispatch(buyCake("Buy cake"))
}
// Commented for experimenting multiple reducer
// usingOneReducer()




// Multiple Reducer, Multiple Store
const usingMultiReducer = () => {
    // Actions
    const BUY_CAKE = "BUY_CAKE"
    const BUY_ICE_CREAM = "BUY_ICE_CREAM"

    // Action Containers
    const buyCake = info => ({
        type: BUY_CAKE,
        info: info
    }) 

    const buyIceCream = info => ({
        type: BUY_ICE_CREAM,
        info: info
    }) 

    // Initilize state
    const initialCakeSate = {
        numberOfCake: 10
    }

    const initialIceCreamState = {
        numberOfIceCream: 20
    }

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

    // Redux bring in store (include using require)
    // Initilize createStore
    const createStore = redux.createStore

    // Create a store by passing reducer
    // Redux Store to hold Application method
    const CakeStore = createStore(CakeReducer)

    // Get State
    console.log("Get the initial State > ", CakeStore.getState())

    // Subscriber for State change
    const unsubscribeCakeStore = CakeStore.subscribe( () => {
        console.log("Cake State Changed > State Changed", CakeStore.getState())
    })

    // Dispatch event
    CakeStore.dispatch(buyCake("Buy cake"))
    CakeStore.dispatch(buyCake("Buy cake"))
    CakeStore.dispatch(buyCake("Buy cake"))
    CakeStore.dispatch(buyCake("Buy cake"))

    // Unsubscribe
    console.log("Cake Unsubscribed")
    unsubscribeCakeStore()


    // Initilizing 2nd store for IceCream
    // Create a store by passing reducer
    // Redux Store to hold Application method
    const IceCreamStore = createStore(IceCreamReducer)

    // Get State
    console.log("Get the initial State > ", IceCreamStore.getState())

    // Subscriber for State change
    const unsubscribeIceCreamStore = IceCreamStore.subscribe( () => {
        console.log("Ice Cream > State Changed", IceCreamStore.getState())
    })


    IceCreamStore.dispatch(buyIceCream("Buy Ice Cream"))
    IceCreamStore.dispatch(buyIceCream("Buy Ice Cream"))
    IceCreamStore.dispatch(buyIceCream("Buy Ice Cream"))
    IceCreamStore.dispatch(buyIceCream("Buy Ice Cream"))

    // Unsubscribe state
    console.log("Ice Cream Unsubscribed")
    unsubscribeIceCreamStore()

    IceCreamStore.dispatch(buyIceCream("Buy Ice Cream"))
}

// usingMultiReducer()







// Combine multiple Reducers
const combineMultiReducer = () => {
    // Actions
    const BUY_CAKE = "BUY_CAKE"
    const BUY_ICE_CREAM = "BUY_ICE_CREAM"

    // Action Containers
    const buyCake = info => ({
        type: BUY_CAKE,
        info: info
    }) 

    const buyIceCream = info => ({
        type: BUY_ICE_CREAM,
        info: info
    }) 

    // Initilize state
    const initialCakeSate = {
        numberOfCake: 10
    }

    const initialIceCreamState = {
        numberOfIceCream: 20
    }

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

    // Redux bring in store (include using require)
    // Initilize createStore
    const createStore = redux.createStore

    // Get the combined reducer from Redux
    const combineReducer = redux.combineReducers

    const rootReduce = combineReducer({
        cake: CakeReducer,
        iceCream: IceCreamReducer

    })

    // Create a store by passing reducer
    // Redux Store to hold Application method
    const store = createStore(rootReduce)

    // Get State
    console.log("Get the initial State > ", store.getState())

    // Subscriber for State change
    const unsubscribestore = store.subscribe( () => {
        console.log("Cake State Changed > State Changed", store.getState())
    })

    // Dispatch event for Cake
    store.dispatch(buyCake("Buy cake"))
    store.dispatch(buyCake("Buy cake"))
    store.dispatch(buyCake("Buy cake"))
    store.dispatch(buyCake("Buy cake"))


    // Dispatch event for Ice Cream
    store.dispatch(buyIceCream("Buy Ice Cream"))
    store.dispatch(buyIceCream("Buy Ice Cream"))
    store.dispatch(buyIceCream("Buy Ice Cream"))
    store.dispatch(buyIceCream("Buy Ice Cream"))

    // Unsubscribe
    console.log("RootStore Unsubscribed")
    unsubscribestore()

}
// combineMultiReducer()