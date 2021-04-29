import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DetailsEdit from "./Components/DetailsEdit/DetailsEdit";
import PreviewEdit from "./Components/PreviewEdit/PreviewEdit";
import SliderEdit from "./Components/SlideEdit"
import NavEdit from './Components/NavEdit'
import { Container } from "reactstrap";
class Company extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <Container>

      <div className="Company">
        <SliderEdit></SliderEdit>
        <NavEdit></NavEdit>
        <Switch>
          <Route exact path={`${path}`} component={PreviewEdit} />
          <Route path={`${path}/details`} component={DetailsEdit} />
        </Switch>
      </div>
      </Container>
    );
  }
}

export default Company;
