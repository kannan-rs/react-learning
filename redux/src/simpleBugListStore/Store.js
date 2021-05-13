import { createStore } from 'redux'
// Need to call reducer, So EXPORT REDUCER
import reducer from "./Reducer"

// This is higher order function
const store = createStore(reducer)

// Export for all apps to consume
export default store