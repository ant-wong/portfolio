import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Row, Col } from 'antd'

class Home extends Component {
  render() {
    return (
      <section>
        <section className="landing">
          <Row>
            <Col span={12}>
              <h1>full stack developer</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Mauris non aliquet diam. Nulla maximus luctus lorem, quis tempor felis elementum ac. 
                Sed interdum semper pretium. Curabitur suscipit tristique scelerisque. 
                Ut ex neque, ultrices eu vehicula ut, maximus non elit. In eleifend sagittis blandit. 
                Morbi tincidunt egestas dolor, non malesuada mauris pharetra vitae. 
                Ut porta, lectus et efficitur commodo, nulla eros ultricies lorem, id laoreet mauris nulla sit amet enim. 
                Curabitur accumsan, lectus id pharetra condimentum, lacus nulla suscipit orci, sit amet malesuada ante massa sed nisl. 
                Duis molestie malesuada diam, eget euismod eros tincidunt eu. 
                Donec mollis felis sed dui feugiat condimentum. 
                Fusce sem ligula, sollicitudin placerat ligula et, congue egestas dolor. 
                Aenean dapibus volutpat dui nec maximus.
              </p>
            </Col>
          </Row>
        </section>
      </section>
    )
  }
}

export default withRouter(Home)