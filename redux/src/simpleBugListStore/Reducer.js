import * as actions from "./ActionType"

let lastId = 0

// Pure function 
function reducer (state = [], action) {
    switch (action.type) {
        case actions.ADD_BUG:
            return [
                ...state, // Spread to cereate a copy, // Later we can use immutable libraries
                {
                    id: ++lastId,
                    description: action.payload.description, // This is the only minimal information
                    resolved: false
                }
            ]
        
            case actions.REMOVE_BUG:
                return state.filter( bug => bug.id !== action.payload.id)
            
            case actions.RESOLVE_BUG:
                return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true})
    
        default:
            return state
    }
}

export default reducer