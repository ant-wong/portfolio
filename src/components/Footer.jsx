import React, { Component } from 'react'
import { Row, Col } from 'antd'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Row>
          <Col>
            © Copyright 2018 Anthony Wong.
          </Col>
        </Row>
      </footer>
    )
  }
}