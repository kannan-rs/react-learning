import * as actions from "./ActionType"

// Regular function export
/*
export function bugAdded( description ) {
    return {
        type: actions.ADD_BUG,
        payload: {
            description: description
        }
    }
}

export function bugRemoved ( id ) {
    return {
        type: actions.REMOVE_BUG,
        payload: {
            id: id
        }
    }
}
*/

// Arrow function export

export const bugAdded = description => ({
    type: actions.ADD_BUG,
    payload: {
        description: description
    }
})


export const bugRemoved = id => ({
    type: actions.REMOVE_BUG,
    payload: {
        id: id
    }
})

export const bugResolved = id => ({
    type: actions.RESOLVE_BUG,
    payload: {
        id: id
    }
})