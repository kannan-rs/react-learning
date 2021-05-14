import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../../Redux'

function CakeContainer( props ) {
    return (
        <div>
            <h4> Number of Cakes { props.numberOfCakes } </h4>
            <button onClick = { props.buyCake }> Buy Cake </button>
        </div>
    )
}

const mapStoreToProps = state => ({
    // numberOfCakes : state.numberOfCakes // When only one state is available
    numberOfCakes : state.cake.numberOfCakes // When multiple state is accessible from Global state
    // Selectors file can be used to create a function to get states
})

const mapDispatchToProps = dispatch => ({
    buyCake: () => dispatch( buyCake())
})

export default connect( mapStoreToProps, mapDispatchToProps )(CakeContainer)
