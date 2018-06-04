import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <section>
        <h1>this is my home body</h1>
      </section>
    )
  }
}

export default withRouter(Home)