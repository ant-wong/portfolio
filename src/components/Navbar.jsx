import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="navbar navbar-expand-lg">

              <Link to="/" className="link">
                <h3 className="brand-logo navbar-brand">anthony wong.</h3>
              </Link>

            {/* <div className="navbar-collapse collapse w-100 order-3 dual-collapse2"> */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/skills" className="nav-link">
                    <p>skills.</p>
                  </Link>
                </li>
                <li className="nav-item"> 
                  <Link to="/contact" className="nav-link">
                    <p>contact.</p>
                  </Link>
                </li>
              </ul>
            {/* </div> */}

          </div>
        </div>
      </div>
    )
  }
}