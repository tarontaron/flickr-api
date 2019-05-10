import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components'
import About from './components/about'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  )
}
