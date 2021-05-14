import { combineReducers } from "redux"
import CakeReducer from "./Cakes/CakeReducer"
import IceCreamReducer from "./IceCream/UceCreamReducer"
import UsersReducer from "./Users/UserReducer"

const rootReducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer,
    users: UsersReducer 
})

export default rootReducer