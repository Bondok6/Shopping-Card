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

  incHandler = () => {
    this.setState({ count: this.state.count + 1 });
  }
  decHandler = () => {
    if(this.state.count > 0)
      this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        
        {/* {this.state.names.length === 0 && <h4>NO Names</h4>}
        <ul>
          {this.state.names.map((n, index) => {
            return <li key={index}>{n}</li>
          })}
        </ul> */}


        <span>{this.state.name}</span>
        <span className={this.countColor()}> {this.state.count} </span> 

        <button className="btn btn-primary btn-sm" onClick={this.incHandler}>+</button>
        <button className="btn btn-primary btn-sm m-2" onClick={this.decHandler}>-</button>
        

      </div>
    );
  }
}

export default Product;