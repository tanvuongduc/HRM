import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Org extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { path } = this.props.match;
        return (
            // <Switch>
            //     <Route exact path={`${path}`} render={() =>
            //         (<Redirect to="/app/org/department" ></Redirect>)
            //     }></Route>
            //     <Route exact path={`${path}/department`} component={DepartmentList} />
            //     <Route exact path={`${path}/department/:id`} component={FormDepartment} />
            // </Switch>
            <h1>This is org router: {path}</h1>
        )
    }
}

export default withRouter(Org)