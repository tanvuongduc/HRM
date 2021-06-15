import React from 'react'
import { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';
import Overview from './Components/Overiew/Overview';


class Company extends Component{
  render(){
    const { path } = this.props.match;
    return (
      <div>
        <Switch>
          <Route exact path={`${path}`} component={Overview} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Company);
