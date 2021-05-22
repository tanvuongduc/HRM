import React, { Component, Fragment } from "react";
import "./ChangeAvatar.scss";
import ReactDOM from "react-dom";
import Avatar from "react-avatar-edit";

class ChangeAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: null,
      src: null,
    };
  }

  onSaveChangeAvatar = () => {
    this.props.onSaveChangeAvatar(this.state.preview);
  };

  onClose = () => {
    this.setState({ preview: null });
  };

  onCrop = (preview) => {
    this.setState({ preview });
  };

  render() {
    return (
      <div className="change-avatar-overlay">
        <div className="change-avatar-form">
          <h4 className="title">Change My Avatar</h4>

          <div className="preview">
            <Avatar
              width={500}
              height={300}
              onCrop={this.onCrop}
              onClose={this.onClose}
              src={this.state.src}
            />
          </div>

          <div className="btn-form-control">
            <a
              className="btn-control-close"
              onClick={this.props.onCloseChangeAvatar}
            >
              Close
            </a>
            <a className="btn-control-save" onClick={this.onSaveChangeAvatar}>
              Save
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeAvatar;
