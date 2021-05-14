import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../../Redux'

function IceCreamContainer( props ) {
    return (
        <div>
            <h4> Number of Ice Creams { props.numberOfIceCreams } </h4>
            <button onClick = { props.buyIceCream }> Buy Ice Cream </button>
        </div>
    )
}

const mapStoreToProps = state => ({
    // numberOfIceCreams : state.numberOfIceCreams // When only one state is available
    numberOfIceCreams : state.iceCream.numberOfIceCreams // When multiple state is accessible from Global state
    // Selectors file can be used to create a function to get states
})

const mapDispatchToProps = dispatch => ({
    buyIceCream: () => dispatch( buyIceCream())
})

export default connect( mapStoreToProps, mapDispatchToProps )(IceCreamContainer)
