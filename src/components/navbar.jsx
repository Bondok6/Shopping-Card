import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
  return(
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="#">Navbar</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item active">
              <Link className="nav-link" to="/">Home </Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to="/cart">Cart </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>
        
        <span className="badge badge-primary p-2">{props.productsNumber}</span>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;