import React from 'react'
import PropTypes, { func } from 'prop-types'

function ProductWidget(props) {
  console.log("chale ra xa")
  function addToCart(){
    console.log("cart")
  }
  return (
    <div style={{border: "1px solid black"}} onClick={() => addToCart()}>
        <img src={props.img} alt="" /> 
        <h1>{props.title} </h1>
        <h3>Rs{props.price}</h3>
    </div>
  )
}

ProductWidget.propTypes = {}

export default ProductWidget
