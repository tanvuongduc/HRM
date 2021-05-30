import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import CertifecateForm from './Components/Certifecate/CertifecateForm/CertifecateForm'
import CertifecateList from './Components/Certifecate/CertifecateList/CertifecateList';

class Org extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const path = window.location.pathname;
        return (
            <div >
                <Switch>
                    <Route exact path={`${path}/`} component={CertifecateList}></Route>
                    <Route exact path={`${path}/:id`} component={CertifecateForm} />
                </Switch>
            </div>
        )
    }
}

export default Org