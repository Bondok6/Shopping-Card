import React, { Component } from 'react'
import ShoppingCard from './shopping_card';

class Product extends Component{

  countColor = () => {
    return this.props.product.count === 0
      ? "badge badge-warning m-2"
      : "badge badge-primary m-2";
  }



  render() {
    
    return (
      <div className="row container">
        <div className="col-2 ">
          <h4>{this.props.product.name}</h4>
        </div>
        <div className="col">
          
          <span className={this.countColor()}> {this.props.product.count} </span> 

          <button className="btn btn-primary btn-sm "
            onClick={() => this.props.onIncrement(this.props.product)}>
            +</button>
          
          <button className="btn btn-primary btn-sm m-2"
            onClick={()=> this.props.onDecrement(this.props.product)}>
            -</button>

          <span onClick={()=> this.props.onDelete(this.props.product)}>
            <i className="fas fa-trash m-2"></i>
          </span>

        </div>
       
      </div>
    );
  }
}

export default Product;