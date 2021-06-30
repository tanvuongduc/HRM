import { makeStyles, withStyles } from "@material-ui/core";
import React from "react";
import "../Sidebar2/Sidebar2.scss";
import Divider from "@material-ui/core/Divider";
import { Component } from "react";

const useStyles = (theme) => ({
  parent: {
    left: "0px",
    position: "fixed",
    top: "45px",
    width: "60px",
    height: "100vh",
    overflow: "hidden",
  },
  child: {
    height: "100vh",
    width: "80px",
    backgroundColor: "#3f51b5",
  },
  divide: {
    backgroundColor: "#ffffff",
    margin: "18px 0px",
  },
});
class Sidebar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goTo = (url = "") => {
    url = window.location.origin + "/" + url;
    window.location.replace(url);
  };

  render() {
    const { classes, openSideBar } = this.props;
     
    return (
      <div className="parents" style={{}}>
        <div
          className={classes.child}
          style={{
            animation: openSideBar
              ? "openSideBar 500ms ease-in forwards "
              : "closeSideBar 500ms ease-in forwards ",
          }}
        >
          <ul className="list-item">
            <li className="item" onClick={() => this.goTo("app")}>
              <div className="icon">
                <i className="fa fa-home" />
              </div>
              <div className="text" style={{animation: openSideBar ? "showText 500ms linear forwards " : "hideText 500ms linear forwards"}}>
                <span>Trang chủ</span>
              </div>
            </li>
            <li className="item" onClick={() => this.goTo("app/company")}>
              <div className="icon">
                <i className="fa fa-building" />
              </div>
              <div className="text"  style={{animation: openSideBar ? "showText 500ms linear forwards" : "hideText 500ms linear forwards"}}>
                <span>Công ty</span>
              </div>
            </li>
            <li className="item" onClick={() => this.goTo("app/career")}>
              <div className="icon">
                <i className="fa fa-suitcase" />
              </div>
              <div className="text"  style={{animation: openSideBar ? "showText 500ms linear forwards" : "hideText 500ms linear forwards"}}>
                <span>Sự nghiệp</span>
              </div>
            </li>
            <li className="item" onClick={() => this.goTo("app/team")}>
              <div className="icon">
                <i className="fa fa-user-friends" />
              </div>
              <div className="text"  style={{animation: openSideBar ? "showText 500ms linear forwards" : "hideText 500ms linear forwards"}}>
                <span>Team</span>
              </div>
            </li>
            <li className="item" onClick={() => this.goTo("app/timeoff")}>
              <div className="icon">
              <i className="far fa-calendar-times"/>
              </div>
              <div className="text"  style={{animation: openSideBar ? "showText 500ms linear forwards" : "hideText 500ms linear forwards"}}>
                <span>Xin nghỉ </span>
              </div>
            </li>
            <li className="item" onClick={() => this.goTo("app/org")}>
              <div className="icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <div className="text"  style={{animation: openSideBar ? "showText 500ms linear forwards" : "hideText 500ms linear forwards"}}>
                <span>Org</span>
              </div>
            </li>
            <li className="item" onClick={() => this.goTo("app/department")}>
              <div className="icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="text"  style={{animation: openSideBar ? "showText 500ms linear forwards" : "hideText 500ms linear forwards"}}>
                <span>Phòng ban</span>
              </div>
            </li>
            <li
              className="item"
              onClick={() => this.goTo("app/reception/order")}
            >
              <div className="icon">
                <i className="fas fa-award" />
              </div>
              <div className="text"  style={{animation: openSideBar ? "showText 500ms linear forwards" : "hideText 500ms linear forwards"}}>
                <span>Chứng chỉ</span>
              </div>
            </li>
            <li
              className="item"
              onClick={() => this.goTo("app/management/users")}
            >
              <div className="icon">
              <i className="fas fa-user-cog"/>
              </div>
              <div className="text"  style={{animation: openSideBar ? "showText 500ms linear forwards" : "hideText 500ms linear forwards"}}>
                <span>Quản lý</span>
              </div>
            </li>
            <Divider className={classes.divide} />
            <li className="item" onClick={() => this.this.goTo("app/certificate")}>
              <div className="icon">
                <i className="fa fa-people-carry" />
              </div>
              <div className="text"  style={{animation: openSideBar ? "showText 500ms linear forwards" : "hideText 500ms linear forwards"}}>
                <span>Hỗ trợ</span>
              </div>
            </li>
            <li
              className="item"
              onClick={() => this.this.goTo("app/reception/order")}
            >
              <div className="icon">
                <i className="fa fa-users-cog" />
              </div>
              <div className="text"  style={{animation: openSideBar ? "showText 500ms linear forwards" : "hideText 500ms linear forwards"}}>
                <span>Cài đặt</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Sidebar2);
