import React, { Suspense, Fragment } from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthService } from './Shared';
import App from './Shared/Components/App/App';
import Login from './Modules/Org/Components/Login/Login';

const isLogged = !!AuthService.userInfo;

export const Root = (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Suspense>
          <Route exact path="/" render={() => {
            return (!isLogged) ? (
              <Redirect to="/login" ></Redirect>
            ) : (
              <Redirect to="/app" ></Redirect>
            )
          }} ></Route>

          <Route path="/login" render={() => {
            return (!isLogged) ? (
              <Login></Login>
            ) : (
              <Redirect to="/app" ></Redirect>
            )
          }} ></Route>

          <Route path="/app" render={() => {
            return (isLogged) ? (
              <App></App>
            ) : (
              <Redirect to="/login" ></Redirect>
            )
          }} ></Route>
        </Suspense>
      </Switch>
    </Fragment>
  </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));
