import * as actions from "./CakeTypes"

export const buyCake = (number = 1) => ({
    type: actions.BUY_CAKE,
    payload: number
})