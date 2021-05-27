import React, { Component, Fragment } from "react";
import "./ManagementUserInfo.scss";
import { Http } from "../../../../Helper/Http";
import ManagementEditInfo from "../ManagementEditInfo/ManagementEditInfo";

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

  onEditInfo = () => {
    this.setState({
      onEditInfo: true,
    });
  };
  render() {
    const { userIsViewedInfo } = this.props;
    const { onEditInfo } = this.state;

    return (
      <div className="management-user-info">
        <div className="user-info">
          <h2 className="title">User info</h2>
          <div className="btn-form-control">
            <a className="btn-control-save" onClick={this.onEditInfo}>
              Edit
            </a>
          </div>
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
