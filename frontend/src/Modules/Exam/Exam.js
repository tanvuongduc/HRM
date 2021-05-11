import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ExamEdit from "./Components/ExamEdit/ExamEdit";

class Exam extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <div className="Exam">
        <Switch>
          <Route path={`${path}`} component={ExamEdit} />
        </Switch>
      </div>
    );
  }
}

export default Exam;
