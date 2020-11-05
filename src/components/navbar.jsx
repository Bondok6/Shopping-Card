import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import ShoppingCard from './shopping_card';

const Navbar = (props) => {
  return(
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="#">Navbar</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink className="nav-link" to="/menu">Menu </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">Shopping Card</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

          </ul>
        </div>
        
        <span className="badge badge-primary p-2">{props.productsNumber}</span>
      </nav>
    </React.Fragment>
  )
}

export default Navbar;