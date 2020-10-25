import React, { Component } from 'react';
import Product from './product';


class ShoppingCard extends Component {
  state = {
    products: [
      { id: 1, name: "burger", count: 2 },
      { id: 2, name: "frais", count: 1 },
      {id: 3, name: "cola", count: 3}
    ]
  }

  deleteProduct = (product) => {
    const products = this.state.products.filter((p) => p.id !== product.id);
    this.setState({ products });
  }

  resetCount = () => {
    let products = [...this.state.products];
    products = this.state.products.map((p) => {
      p.count = 0;
      return p;
    })
    this.setState({ products });
  }

  incCount = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product)

    products[index].count++;

    this.setState({ products });
  } 

  decCount = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product)

    if(products[index].count > 0)
      products[index].count--;

    this.setState({ products });
  }


  render() {
    return (
      <div className="container">

        <h1>Shopping Card</h1> <hr/>
        
        <button className="btn btn-secondary"
                onClick={this.resetCount}> Reset
        </button> <br/> <br/> 


        {this.state.products.map((prod) => {
          return (

            <Product
            key={prod.id}
            product={prod}
            onDelete={this.deleteProduct}
            onIncrement={this.incCount}
            onDecrement={this.decCount}  
              
          />)
        })}

      </div>
    )
  }
}

export default ShoppingCard;