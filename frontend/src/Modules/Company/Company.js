import React from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import Configuration from './Components/Configuration/Configuration';
import Overview from './Components/Overiew/Overview';

const Company = (props) => {
	const { path } = props.match;
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path={`${path}`} component={Overview} />
					<Route exact path={`${path}/configuration`} component={Configuration} />
				</Switch>
			</Router>
		</div>
	)
}
export default withRouter(Company);
