import React from 'react'
import ReactDOM from 'react-dom'
import Title from './title'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>可视化简历平台</div>
          <div>这是electron + react</div>
          <Title text="我是text" />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))