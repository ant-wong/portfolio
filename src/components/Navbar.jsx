import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col l4 offset-l1 s6 xs12">
            <Link to="/">
              <h3 className="brand-logo">anthony wong.</h3>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}