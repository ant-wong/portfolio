import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  
  render() {
    document.addEventListener('DOMContentLoaded', function () {
      
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)

      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {

            var target = $el.dataset.target
            var $target = document.getElementById(target)

            $el.classList.toggle('is-active')
            $target.classList.toggle('is-active')
          })
        })
      }
    })

    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">
            <h3 className="brand-logo">anthony wong.</h3>
          </Link>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/skills">
                <h3 className="menuItems">skills.</h3>
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/contact">
                <h3 className="menuItems">contact.</h3>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}