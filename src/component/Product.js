import React from 'react'
import productData from './productData'

function Product(props) {
    console.log(props)
    return (
        <div>
            <h3>Product Name: {props.productData.name}</h3>
            <p>Product description: {props.productData.description}</p>
        </div>
    )
}
export default Product