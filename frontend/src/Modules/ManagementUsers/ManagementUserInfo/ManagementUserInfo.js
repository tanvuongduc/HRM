import React, { Component, Fragment } from "react";
import "./ManagementUserInfo.scss";
import BasicInfo from "../../User/Details/BasicInfo/BasicInfo";

class ManagementUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="management-user-info">
          <div className="user-info">
            <h2 className="user-info__title">User info</h2>
            <div className="user-info__detail">
                
              <BasicInfo
                userName="Hello"
                birthday="asd"
                address="Ninh Binh"
                certificate="asd"
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ManagementUserInfo;
