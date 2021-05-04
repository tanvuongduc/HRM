import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import OverviewEdit from "./Components/Overview/OverviewEdit";
import { Container } from "reactstrap";
import SliderEdit from './Slider/SilderEdit'
import NavbarEdit from "./Navbar/NavbarEdit";
import DepartmentEdit from "./Components/Department/DepartmentEdit";
import CareerEdit from "./Components/Career/CareerEdit";


class Company extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <Container className="hien">
        <div className="appCompanyContainer">
          <SliderEdit></SliderEdit>
          <NavbarEdit></NavbarEdit>
          <div className="detailContent">
            <div className="leftContent">
              <div className="overView boxContent">
                <Switch>
                  <Route exact path={`${path}`} component={OverviewEdit} />
                  <Route exact path={`${path}/department`} component={DepartmentEdit} />
                  <Route exact path={`${path}/career`} component={CareerEdit} />
                </Switch>
              </div>
            </div>
          </div >
        </div>
      </Container>
    );
  }
}

export default Company;
