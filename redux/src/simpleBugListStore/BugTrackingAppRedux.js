// What need to be in the store (Define the store)
// Define the action
// Create a reducer
// Setup the store

// Install the redux

// Design the Store
// Bug tracking application
    // List of Bugs
    // 1 bug
    /*
        {
            id: "<id>",
            description: "",
            resolved: "true/false"
        }
    */
    
    // Multiple Bug
    /*
        [
            {
                id: "<id>",
                description: "",
                resolved: "true/false"
            }
        ]
    */

    // Store is a Key value pair of single object, So
    /*
        {
            bug: [
                id: "<id>",
                "description": "",
                "resolved" : "true/false"
            ],
            userInfo: {}
        }
    */

// Define Action
    // Add a Bug
    // Marked as Resolved
    // Delete a Bug
    // ....

    // This is plane JS object
    /*
        {
            type: "ADD_BUG" // Must needed for Redux, Use any type that is serailaizable
            description: ""
        }

        or

        {
            type: "bugAdded",
            payload: {      // Should containes very inimal information needed for action
                description: ""
            }
        }
    */

// Build Reducer REFER > (reducer.js)
import store from "./Store"
import subscribe, { storeUnsubscribe } from "./Subscribe"
import { bugAdded, bugRemoved, bugResolved } from "./ActionCreators"


function SimpleBugTracker() {
    subscribe()
    console.log("Print the state object")
    console.log(store)

    // State Object has following method
    // dispatch()
    // subscribe()
    // getState()
    // replaceReducer()
    // Symbol()

    // It has only getState and not setState

    console.log("")
    console.log("")
    console.log("GET the Current STATE")
    console.log(store.getState())

    // Create Dispatcher for Add Bug

    store.dispatch(bugAdded("Adding Bug #1"))
    store.dispatch(bugAdded("Adding Bug #2"))
    store.dispatch(bugAdded("Adding Bug #3"))
    store.dispatch(bugAdded("Adding Bug #4"))
    
    console.log("")
    console.log("")
    console.log("Added a bug using Dispatch")
    console.log("> Now GET the Current STATE")
    console.log(store.getState())

    // console.log("")
    // console.log("")
    // console.log("Unsubscribing Now")
    // storeUnsubscribe()

    store.dispatch( bugRemoved(1) )

    console.log("")
    console.log("")
    console.log("Remove a bug using Dispatch")
    console.log("> Now GET the Current STATE")
    console.log(store.getState())

    store.dispatch( bugResolved(2) )

    console.log("")
    console.log("")
    console.log("Resolved a bug using Dispatch")
    console.log("> Now GET the Current STATE")
    console.log(store.getState())
}

export default SimpleBugTracker