import React, { Component, Fragment } from "react";
import "./ManagementUserInfo.scss";
import { Http } from "../../../../Helper/Http";
import ManagementEditInfo from "./ManagementEditInfo/ManagementEditInfo";
import { Button } from "@material-ui/core";


class ManagementUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onEditInfo: false,
    };
  }

  onSaveEditting = async (data) => {
    const idUserEditted = data.id;
    const req = await Http.patch("users/" + idUserEditted, data);
  };

  render() {
    const { onEditInfo } = this.state;
   

    return (
      <div className="management-user-info">
        <div className="user-info">
          <h2 className="title">User info</h2>
         
          <div className="detail">
            
            <ManagementEditInfo
              onEditInfo={onEditInfo}
              userId={this.props.userId}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ManagementUserInfo;
