import React from 'react'
import { Route, Switch, withRouter } from 'react-router';
import Overview from './Components/Overiew/Overview';

const Company = () => {
  const { path } = this.props.match;
  return (
    <div>
      <Switch>
        <Route exact path={`${path}`} component={Overview} />
      </Switch>
    </div>
  )
}

export default withRouter(Company);
