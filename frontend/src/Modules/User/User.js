import React, { Component, Fragment, useState } from "react";

import Details from "./Details/Details";
import Employment from "./Employment/Employment";
import {
  BrowserRouter,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/user">
          <Employment />
        </Route>
        <Route exact path="/user/details">
          <Details receiveInfoUser={this.receiveInfoUser} />
        </Route>
      </Switch>
    );
  }
}
export default User;
