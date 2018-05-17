import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './styles/theme.css'
import Home from './components/Home'
import Skills from './components/Skills'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>
    )
  }
}

export default App
