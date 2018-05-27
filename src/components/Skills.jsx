import React, { Component } from 'react'

// IMAGES
const importAll = (r) => {
  return r.keys().map(r)
}

const images1 = importAll(require.context('../img/icons1', false, /\.(png|jpe?g|svg)$/))
const images2 = importAll(require.context('../img/icons2', false, /\.(png|jpe?g|svg)$/))
const images3 = importAll(require.context('../img/icons3', false, /\.(png|jpe?g|svg)$/))

export default class Skills extends Component {
  render() {
    const icons1JSX = images1.map((icon, i) => {
      return <div className="column">
          <img src={icon} alt="Icon" key={i} className="icon"/>
        </div>
    })
    const icons2JSX = images2.map((icon, i) => {
      return <div className="column">
          <img src={icon} alt="Icon" key={i} className="icon"/>
        </div>
    })
    const icons3JSX = images3.map((icon, i) => {
      return <div className="column">
          <img src={icon} alt="Icon" key={i} className="icon"/>
        </div>
    })

    return (
      <div>
        <div className="container-fluid">
          <h1 className="skillsTitle">check my nice skills bb</h1>
        </div>
        <div className="columns">
          {icons1JSX}
        </div>
        <div className="columns">
          {icons2JSX}
        </div>
        <div className="columns">
          {icons3JSX}
        </div>
      </div>
    )
  }
}