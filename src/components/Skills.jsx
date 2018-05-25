import React, { Component } from 'react'

// IMAGES
const importAll = (r) => {
  return r.keys().map(r)
}

const images = importAll(require.context('../img/icons', false, /\.(png|jpe?g|svg)$/))

export default class Skills extends Component {
  render() {
    const iconsJSX = images.map((icon, i) => {
      return <div className="col-lg-2 col-sm-3 col-xs-6">
          <img src={icon} alt="Icon" key={i} className="icon"/>
        </div>
    })

    return (
      <div>
        <div className="container-fluid">
          <h1 className="skillsTitle">check my nice skills bb</h1>
        </div>
        <div className="container">
          <div className="row">
            {iconsJSX}
          </div>
        </div>
      </div>
    )
  }
}