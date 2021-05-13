import store from "./Store"

let unsubscribe; 

function subscribe() {
    // Subscribe return a unsubscribe function, // So store it for unsubscribing

    
    unsubscribe = store.subscribe(() => {
        // Place to work with HTML
        console.log("")
        console.log("")
        console.log("Store Changed >> ", store.getState())
        storeUnsubscribe()
    })
}

export function storeUnsubscribe() {
    unsubscribe()
}


export default subscribe