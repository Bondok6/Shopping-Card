import { render } from '@testing-library/react'
import React from 'react'

const ProductDetail = (props) => {

  const product= props.products.filter(p=> p.id === parseInt(props.match.params.id))[0];

  return (
    <React.Fragment>
      <h1>Detail No.{props.match.params.id}</h1> 
      <h2>Product Name : {product.name}</h2>
      <h3>Count is : {product.count}</h3>
    </React.Fragment>
  )
}

export default ProductDetail;