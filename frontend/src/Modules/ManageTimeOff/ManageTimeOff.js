import React, { Component } from "react";
import "./ManageTimeOff.scss";
import Card from "@material-ui/core/Card";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { CardContent, CardHeader, Grid } from "@material-ui/core";
import ItemRequest from "./Components/ItemRequest/ItemRequest";
import ManageTimeOffService from "./Shared/ManageTimeOffService";
import HeaderBar from "./Components/HeaderBar/HeaderBar";
import { BreadcrumbItem } from "reactstrap";

class ManageTimeOff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRequest: [],
      scopeStatus: 1,
      scopeTimeRequest: null,
    };
  }

  componentDidMount = async () => {
    await ManageTimeOffService.getAllRequest()
      .then((res) => {
        this.setState({
          listRequest: res.data,
        });
      })
      .catch((err) => {});
  };

  scopeRequestStatus = (value) => {
    this.setState({
      scopeStatus: value,
    });
  };

  handleScopeTimeRequest = (value) => {
    this.setState({
      scopeTimeRequest: value
    });
  }

  scopeTimeRequest = (value) => {
    let { listRequest } = this.state;
    switch (value) {
      case 1:
        listRequest = this.scopeTimeToday(listRequest);
      case 2:
        listRequest = this.scopeThisWeek(listRequest);
      case 3: 
        listRequest = this.scopeThisMonth(listRequest);
      case 4: 
        listRequest = this.scopeThisYear(listRequest);
      default:
        break;
    }
    return listRequest;
  };

  scopeTimeToday(listRequest) {
    listRequest = listRequest.filter((item) => {
      return this.checkScopeTodayTime(item.from);
    });
    return listRequest;
  }

  scopeThisWeek(listRequest) {
    listRequest = listRequest.filter((item) => {
      return this.checkScopeThisWeek(item.from);
    });
    return listRequest;
  }

  scopeThisMonth(listRequest) {
    listRequest = listRequest.filter((item) => {
      return this.checkScopeThisMonth(item.from);
    });
    return listRequest;
  }

  scopeThisYear(listRequest) {
    listRequest = listRequest.filter((item) => {
      return this.checkScopeThisYear(item.from);
    });
    return listRequest;
  }

  checkScopeTodayTime(date) {
    const today = new Date();
    const dateConvert = new Date(date);
    if (
      dateConvert.getDate() === today.getDate() &&
      dateConvert.getMonth() === today.getMonth() &&
      dateConvert.getFullYear() === today.getFullYear()
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkScopeThisWeek(date) {
    const today = new Date();
    const dateConvert = new Date(date);
    let curr = new Date(); 
    let first = curr.getDate() - curr.getDay();
    let last = first + 6; 
    let firstday = new Date(curr.setDate(first));
    let lastday = new Date(curr.setDate(last));

    if (
      dateConvert.getDate() >= firstday.getDate() &&
      dateConvert.getDate() <= lastday.getDate() &&
      dateConvert.getMonth() === today.getMonth() &&
      dateConvert.getFullYear() === today.getFullYear()
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkScopeThisMonth(date) {
    const today = new Date();
    const dateConvert = new Date(date);
    if (
      dateConvert.getMonth() === today.getMonth() &&
      dateConvert.getFullYear() === today.getFullYear()
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkScopeThisYear(date) {
    const today = new Date();
    const dateConvert = new Date(date);
    if (
      dateConvert.getFullYear() === today.getFullYear()
    ) {
      return true;
    } else {
      return false;
    }
  }


  render() {
    let { listRequest, scopeStatus, scopeTimeRequest } = this.state;
    listRequest = this.scopeTimeRequest(scopeTimeRequest);
    listRequest = listRequest.filter((item) => {
      switch (scopeStatus) {
        case 1:
          return item.status === "pending";
        case 2:
          return item.status === "approved";
        case 3:
          return item.status === "rejected";
        case 0:
          return item;
        default:
          return item.status === "pending";
      }
    });

    const listItemRequest = listRequest.map((item) => {
      return <ItemRequest key={item.id} data={item} />;
    });
    return (
      <div className="manage-time-off">
        <Card variant="outlined" elevation="3">
          <HeaderBar
            scopeStatus={this.scopeRequestStatus}
            scopeTime={this.handleScopeTimeRequest}
          />
          <CardContent>
            <Grid container className="list-request">
              {listItemRequest}
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default ManageTimeOff;
