import { render } from '@testing-library/react'
import React, { Component } from 'react'

const ProductDetail = (props) => {
  return (
    <React.Fragment>
      <h1>Detail No.{props.match.params.id}</h1> 
    </React.Fragment>
  )
}

export default ProductDetail;