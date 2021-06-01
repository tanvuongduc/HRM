import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import ItemDepartment from './Components/ItemDepartment/ItemDepartment';
import DetailDepartment from './Components/DetailDepartment/DetailDepartment';

const Department = () => {
    const path = window.location.pathname;
    return (
        <div>
            <Switch>
                <Route exact path={`${path}`} component={ItemDepartment} />
                <Route exact path={`${path}/detail`} component={DetailDepartment} />
            </Switch>
        </div>
    )
}

export default withRouter(Department);
