import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './styles/theme.css'
import './styles/animations.css'
import Nav from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Nav />
        <Switch>
          <Route exact path="/" render={() => {
            return <Home />
          }} />
          <Route path="/skills" render={() => {
            return <Skills />
          }} />
          <Route path="/contact" render={() => {
            return <Contact />
          }} />
        </Switch>
        <Footer />

      </div>
    )
  }
}

export default App
