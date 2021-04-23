import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import CarreEdit from './Compoment/Career/CareerEdit';

class Career extends React.Component {
    render() {
        const { path } = this.props.match;
        return (
            <div >
                <Switch>
                    <Route path={`${path}`} component={CarreEdit} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Career);