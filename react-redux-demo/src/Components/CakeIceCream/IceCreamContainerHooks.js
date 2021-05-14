import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../../Redux'

function IceCreamContainerHooks() {
    // const numberOfIceCreams = useSelector(state => state.numberOfIceCreams) // For single state object
    const numberOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams) // For global multi state object
    const displatch = useDispatch()
    return (
        <div>
            <h4> Number of Ice Creams - { numberOfIceCreams } </h4>
            <button onClick = { () => displatch(buyIceCream())} > Buy Ice Cream </button>
        </div>
    )
}

export default IceCreamContainerHooks
