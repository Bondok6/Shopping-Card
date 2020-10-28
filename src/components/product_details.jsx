import React from 'react'
import qs from 'query-string'


const ProductDetail = (props) => {
  const res = qs.parse(props.location.search);
  console.log(res);

  const product= props.products.filter(p=> p.id === parseInt(props.match.params.id))[0];

  return (
    <React.Fragment>
      <h1>Detail No.{product.id}</h1> 
      <h2>Product Name : {product.name}</h2>
      <h3>Count is : {product.count}</h3>
    </React.Fragment>
  )
}

export default ProductDetail;