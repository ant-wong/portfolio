import React, { Component } from 'react'

import LinkedIn from '../img/linkedin.svg'
import Github from '../img/github.svg'

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row footerContent">
          <div className="col-lg-6">
            <p>COPYRIGHT © 2018 ANTHONY WONG</p>
          </div>
          <div className="col-lg-6">
            <a href="https://www.linkedin.com/in/anthonywong-jv/">
              <img src={LinkedIn} alt="LinkedIn link." className="socialMedia"/>
            </a>
            <a href="https://github.com/ant-wong">
              <img src={Github} alt="Github link." className="socialMedia"/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}