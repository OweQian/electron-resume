import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Root from '@src/container/root'
import Resume from '@src/container/resume'

const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Root />
        </Route>
        <Route path="/resume" exact>
          <Resume />
        </Route>
      </Switch>
      <Redirect to="/" />
    </Router>
  )
}

export default Routers;