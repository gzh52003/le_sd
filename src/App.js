import React, { Fragment } from 'react'
import Login from './pages/login'
import Home from './pages/home'
import Reg from './pages/reg'
import Zhuangji from './pages/zhuangji'
import Luntan from './pages/luntan'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (

    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/home" component={Home} />
          <Route path="/zhuangji" component={Zhuangji} />
          <Route path="/luntan" component={Luntan} />
          <Route exact path="/" component={Home} />
          <Redirect to={"/home"} />
        </Switch>
      </HashRouter>
    </Fragment>

  )
}

export default App