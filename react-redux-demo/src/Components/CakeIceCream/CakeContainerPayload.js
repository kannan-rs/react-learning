import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../../Redux'

function CakeContainerPayload( props ) {
    const initialNumberOfCakesToBuy = 1
    const [numberOfCakesToBuy, setNumberOfCakesToBuy] = useState(initialNumberOfCakesToBuy)
    return (
        <div>
            <h4> Number of Cakes { props.numberOfCakes } </h4>
            <input type="text" value={ numberOfCakesToBuy } onChange={ (e) => setNumberOfCakesToBuy(e.target.value)} />
            <button onClick = { () => props.buyCake(numberOfCakesToBuy) }> Buy { numberOfCakesToBuy } Cake </button>
        </div>
    )
}

const mapStoreToProps = state => ({
    // numberOfCakes : state.numberOfCakes // When only one state is available
    numberOfCakes : state.cake.numberOfCakes // When multiple state is accessible from Global state
    // Selectors file can be used to create a function to get states
})

const mapDispatchToProps = dispatch => ({
    buyCake: (numberOfCakesToBuy) => dispatch( buyCake(numberOfCakesToBuy))
})

export default connect( mapStoreToProps, mapDispatchToProps )(CakeContainerPayload)
