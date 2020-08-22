
import Home from '../screens/Home'
import About from '../screens/About'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/'
          exact
        >
          <Home />
        </Route>
        <Route
          path='/about'
          exact
        >
          <About />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Router
