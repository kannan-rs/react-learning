import React from 'react'

function Product( props ) {
    const {params} = props.match
    console.log(params)
    return (
        <div>
         product page - fetch product from {params.id}
        </div>
    )
}

export default Product
