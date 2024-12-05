import React from 'react'
import './Breadcrum.css'
import arrow_i from '../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_i} alt="" /> SHOP <img src={arrow_i} alt="" /> {product.category} <img src={arrow_i} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum