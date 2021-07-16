import '@app/core/assets/global.scss'
import '@app/core/assets/favicon.ico'

import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import About from '@app/core/features/About'
import Header from '@app/core/components/Header'

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={About} />
      </Switch>
    </BrowserRouter>
  )
}
