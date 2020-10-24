import React, { Component } from 'react'

class Product extends Component{
  state = {
    name: 'Burger',
    count: 3,
    names: ['koko','Ali','hamada']
  }

  countColor = () => {
    return this.state.count === 0
      ? "badge badge-warning m-2"
      : "badge badge-primary m-2";
  }

  render() {
    return (
      <div>
        
        {this.state.names.length === 0 && <h4>NO Names</h4>}
        <ul>
          {this.state.names.map((n, index) => {
            return <li key={index}>{n}</li>
          })}
        </ul>


        <span>{this.state.name}</span>
        <span className={this.countColor()}> {this.state.count} </span> 

      </div>
    );
  }
}

export default Product;