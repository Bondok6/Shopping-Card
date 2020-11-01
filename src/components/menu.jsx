import React from 'react'

const Menu = () => {
  return (
    <React.Fragment>
      <div className="container">
       <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Burger</td>
              <td>200</td>
              <td><i class="fas fa-shopping-cart"></i></td>
            </tr>
            <tr>
              <td>Frais</td>
              <td>100</td>
              <td><i class="fas fa-shopping-cart"></i></td>
            </tr>
            <tr>
              <td>Cola</td>
              <td>50</td>
              <td><i class="fas fa-shopping-cart"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}

export default Menu
