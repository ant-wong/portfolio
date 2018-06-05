import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'antd'

// IMAGES
const importAll = (r) => {
  return r.keys().map(r)
}

const images1 = importAll(require.context('../img/icons1', false, /\.(png|jpe?g|svg)$/))
const images2 = importAll(require.context('../img/icons2', false, /\.(png|jpe?g|svg)$/))
const images3 = importAll(require.context('../img/icons3', false, /\.(png|jpe?g|svg)$/))

class Skills extends Component {
  render() {

    const icons1JSX = images1.map((icon, i) => {
      return <Col span={4}>
        <img src={icon} alt="Icon" key={i} className="icon" />
      </Col>
    })
    const icons2JSX = images2.map((icon, i) => {
      return <Col span={4}>
        <img src={icon} alt="Icon" key={i} className="icon" />
      </Col>
    })
    const icons3JSX = images3.map((icon, i) => {
      return <Col span={4}>
        <img src={icon} alt="Icon" key={i} className="icon" />
      </Col>
    })

    return (
      <section>
        <h1>check out my skills</h1>
        <section>
          <Row>
            {icons1JSX}
          </Row>
          <Row>
            {icons2JSX}
          </Row>
          <Row>
            {icons3JSX}
          </Row>
        </section>
      </section>
    )
  }
}

export default withRouter(Skills)