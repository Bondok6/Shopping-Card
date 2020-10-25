import React from 'react';
import Product from './product';



const ShoppingCard = (props) => {
  return (
    <React.Fragment>

    <div className="container">

      <h1>Shopping Card</h1> <hr/>
      
      <button
        className="btn btn-secondary"
        onClick={props.onReset}>
        Reset
      </button> <br/> <br/> 


      {props.products.map((prod) => {
        return (

          <Product
          key={prod.id}
          product={prod}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}  
            
        />)
      })}

    </div>

  </React.Fragment>
  )
}
export default ShoppingCard;