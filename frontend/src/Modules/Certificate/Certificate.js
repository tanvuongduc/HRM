import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CertificateList from "./Components/CertificateList/CertificateList";
import CertificateForm from "./Components/CertificateForm/CertificateForm";

class Certificate extends Component {
    render() {
        const { path } = this.props.match;
        return (
            <Switch>
                <Route exact path={`${path}`} component={CertificateList} />
                <Route exact path={`${path}/:id`} component={CertificateForm} />
            </Switch>
        );
    }
}

export default Certificate;
