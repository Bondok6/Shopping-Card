import React, { Component } from 'react'

import Navbar from './navbar';
import ShoppingCard from './shopping_card'

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <ShoppingCard/>
    </React.Fragment>
  )
}

export default App;