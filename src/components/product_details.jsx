import React, { Component } from 'react'
import qs from 'query-string'


class product_details extends Component {
  
  handleSave = ()=> {
    this.props.history.push("/cart");
    //this.props.history.replace("/cart");
  }

 
  render() {

    const res = qs.parse(this.props.location.search);
    console.log(res);
  
    const product= this.props.products.filter(p=> p.id === parseInt(this.props.match.params.id))[0];
    
    return (
      <React.Fragment>
        <div className="container">

          <h1>Detail No.{product.id}</h1> 
          <h2>Product Name : {product.name}</h2>
          <h3>Count is : {product.count}</h3>

          <button onClick={this.handleSave} className="btn btn-primary"> Save </button>

        </div>
      </React.Fragment>
    )
  }
}

export default product_details


