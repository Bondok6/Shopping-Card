import React, { Component } from 'react'



const Product = (props) => {

  let countColor = props.product.count === 0
    ? "badge badge-warning m-2"
    : "badge badge-primary m-2";
  
  return (
    <div className="row container">
      <div className="col-3">
        <h4>{props.product.name}</h4>
      </div>
      <div className="col">
        
        <span className={countColor}> {props.product.count} </span> 

        <button className="btn btn-primary btn-sm "
          onClick={() => props.onIncrement(props.product)}>
          +</button>
        
        <button className="btn btn-primary btn-sm m-2"
          onClick={()=> props.onDecrement(props.product)}>
          -</button>

        <span onClick={()=> props.onDelete(props.product)}>
          <i className="fas fa-trash m-2"></i>
        </span>

      </div>
     
    </div>
  );

}
export default Product;