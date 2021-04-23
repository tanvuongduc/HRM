import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import DepartmentEdit from './Compoments/Department/DepartmentEdit';

class Department extends React.Component {
    render() {
        const { path } = this.props.match;
        return (
            <div >
                <Switch>
                    <Route path={`${path}`} component={DepartmentEdit} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Department);