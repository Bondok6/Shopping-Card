import React from 'react'

const Navbar = (props) => {
  return(
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
        <span className="badge badge-primary p-2">{props.productsNumber}</span>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;