import React, { Component, Fragment } from "react";
import "./ChangeAvatar.scss";
import ReactDOM from "react-dom";
import Avatar from "react-avatar-edit";

class ChangeAvatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      preview: null,
      src: null,
    };
  }

  onChangeAvatar = (event) => {
    if (event.target.files && event.target.files[0]) {
      let image = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(image),
      });
    }
    console.log(this.state.image);
  };

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
    const { preview } = this.state;
    const imagePreview = preview ? <img src={preview} /> : "";
    return (
      <Fragment>
        <div className="changeAvatar-overlay">
          <div className="changeAvatar-form">
            <h4 className="changeAvatar-form__title">Change My Avatar</h4>

            <div className="changeAvatar__preview">
              <Avatar
                className="preview__avatar-upload"
                width={500}
                height={300}
                onCrop={this.onCrop}
                onClose={this.onClose}
                src={this.state.src}
              />
            </div>

            <div className="changeAvatar-form__btn">
              <a className="btn-close" onClick={this.props.onCloseChangeAvatar}>
                Close
              </a>
              <a className="btn-save" onClick={this.onSaveChangeAvatar}>
                Save
              </a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ChangeAvatar;
