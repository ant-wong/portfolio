import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>hello MTV and welcome to my home (component)</h1>
        <Link to="/skills" className="link">
          <div>
            test
            <div className="btn-floating btn-small menuIcons"></div>
          </div>
        </Link>
        <Link to="/contact" className="link">
          <div>
            test 2
            <div className="btn-floating btn-small menuIcons"></div>
          </div>
        </Link>
      </div>
    )
  }
}