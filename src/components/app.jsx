import React, { Component } from 'react'
import { Route , Switch, Redirect } from 'react-router-dom'

import Navbar from './navbar'
import ShoppingCard from './shopping_card'
import Home from './home';
import About from './about';
import Contact from './contact';
import ProductDetail from './product_details';
import Error from './error';

class App extends Component {
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
      <React.Fragment>

        <Navbar productsNumber={this.state.products.filter((p)=> p.count > 0).length} />
        


        
        <Switch>
          <Route path="/product/:id/:name?" render={(props) => (
            <ProductDetail
              products={this.state.products}
              {...props}
            />
          )} />  
          
           <Route path="/about" component={About} />
          
           <Route path="/contact" component={Contact} />
          
            <Route path="/cart" render={(props) => (
                    <ShoppingCard
                      products={this.state.products}
                      onDelete={this.deleteProduct}
                      onReset={this.resetCount}
                      onIncrement={this.incCount}
                      onDecrement={this.decCount}
                      {...props}
                  />
             )}/>
            
            <Route path="/" exact component={Home}/>
            <Route path="/error" component={Error}/>
            
            <Redirect from="/home" to="/"/>
            <Redirect to="/error"/>
          </Switch>
        
        
      </React.Fragment>
    )
  }
}


export default App