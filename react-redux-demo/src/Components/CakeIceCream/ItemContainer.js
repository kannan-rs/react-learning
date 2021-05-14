import React from 'react'
import { connect} from 'react-redux'
import { buyCake, buyIceCream } from '../../Redux'

// Display Number of cakes or IceCream based on the props passed from the parent container
function ItemContainer( props ) {
    return (
        <div>
            <h4> Item - { props.type} - { props.item } </h4>
            <button onClick = { () => props.buyItem() }> Buy { props.type }</button> 
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    // ownProps is from parent
    const itemState = ownProps.cake ? state.cake.numberOfCakes : state.iceCream.numberOfIceCreams
    const itemType = ownProps.cake ? "Cake" : "Ice Cream"

    return {
        item: itemState,
        type: itemType
    }
}

const mapDisplatchToProps = ( dispatch, ownProps) => {
    // ownProps is from parent
    const displatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())

    return {
        buyItem: displatchFunction
    }
}

export default connect(mapStateToProps, mapDisplatchToProps)(ItemContainer)

// if only dispatch then export as follows
// export default connect(null, mapDisplatchToProps)(ItemContainer)  