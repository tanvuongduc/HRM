import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import CertifecateList from './Components/Certifecate/CertifecateList'
import CertifecateForm from './Components/Certifecate/CertifecateForm'

class Org extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { path } = this.props.match;
        return (
            <div >
                <Switch>
                    <Route path={`${path}`} component={CertifecateList} />
                    <Route path={`${path}/:id`} component={CertifecateForm} />
                </Switch>
            </div>
        )
    }
}

export default Org