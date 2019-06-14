import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { createGlobalStyle } from 'styled-components'

import Header from '../Header'
import Nav from '../Nav'

import Home from '../../pages/Home'
import Category from '../../pages/Category'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Container maxWidth="md">
          <Header />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/categorias/:category" exact component={Category} />
          </Switch>
        </Container>
      </Router>
    )
  }
}

export default App
