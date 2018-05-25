import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import profile from '../img/profilepic.jpg'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container aboutBody">
          <div className="row">
            <div className="col l7 xs12">
              <div className="message">
                <h3>About me.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nisi lorem, fringilla sed magna quis, tincidunt volutpat massa. I
                    nterdum et malesuada fames ac ante ipsum primis in faucibus. Sed pulvinar sollicitudin consectetur. 
                    Pellentesque non lorem tempus, egestas dolor sit amet, fermentum quam. Curabitur ornare massa a dapibus fermentum. 
                    Ut porttitor ante quis quam euismod placerat. Mauris dictum molestie lorem id gravida. 
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
                    Proin viverra, nunc id sodales ultricies, ipsum diam euismod orci, id blandit ex nisl in augue. 
                    Curabitur eu sem interdum, volutpat ipsum vitae, accumsan quam. Fusce eu mi molestie, porttitor turpis sed, aliquam nunc. 
                    Proin arcu purus, commodo nec vulputate vehicula, consequat sit amet nunc.
                    Curabitur eleifend lorem non dictum bibendum. Maecenas vitae mauris et orci iaculis venenatis. 
                    Nam sed euismod risus, quis rutrum nisi. Etiam nec felis urna. Integer dictum odio sit amet massa accumsan, vel pellentesque orci iaculis. 
                    Cras sollicitudin tellus non orci condimentum molestie. Donec ultrices ornare mauris vitae faucibus. Sed eu efficitur quam. 
                    Phasellus euismod lacus id arcu aliquet sagittis. In tempor pretium quam, sit amet blandit tortor congue a. 
                    Integer a efficitur purus. Ut gravida orci lacus, a lobortis velit cursus vitae. Pellentesque eget porttitor felis, non viverra massa.
                  </p>
              </div>
            </div>
            <div className="col l5 xs12">
              <img src={profile} alt="Profile picture." className="profilePic"/>
            </div>
          </div>
        </div>
       
        {/* <Link to="/skills" className="link">
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
        </Link> */}
      </div>
    )
  }
}