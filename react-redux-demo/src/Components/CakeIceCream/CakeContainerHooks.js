import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../../Redux'

function CakeContainerHooks() {
    // const numberOfCakes = useSelector(state => state.numberOfCakes) // For single state object
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes) // For global multi state object
    const displatch = useDispatch()
    return (
        <div>
            <h4> Number of Cakes - { numberOfCakes } </h4>
            <button onClick = { () => displatch(buyCake())} > Buy Cake </button>
        </div>
    )
}

export default CakeContainerHooks
