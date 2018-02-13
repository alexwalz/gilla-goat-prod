import React, { Component } from 'react';
import '../css/App.css';
import HomePage from './HomePage.js'
import DashboardPage from './DashboardPage.js'
import AdminPage from'./Admin'
import NotFound from './NotFound.js'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    //const currentKey = this.props.location.pathname.split("/")[1] || "/";
    const timeout = { enter: 300, exit: 200 };
    return (
      
      <TransitionGroup component="main" className="page-main" style={{ height: '100%' }}>
        <CSSTransition
          //key={currentKey}
          timeout={timeout}
          classNames="fade"
          appear
        >


   <Router>
      <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/dashboard" exact component={DashboardPage} />
          <Route path="/admin" exact component={AdminPage} />
          <Route component={NotFound} />
      </Switch>
  </Router>

        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default App;