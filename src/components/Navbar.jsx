import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col } from 'antd'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <Row>
          <Col span={8}>
            <Link to="/">
              <h2 className="nav-title">anthony wong.</h2>
            </Link>
          </Col>
          <Col span={3} offset={8}>
            <Link to="/skills">
              <span className="nav-links">skills</span>
            </Link>
          </Col>
          <Col span={3}>
            <Link to="/contact">
              <span className="nav-links">contact</span>
            </Link>
          </Col>
        </Row>
      </nav>
    )
  }
}