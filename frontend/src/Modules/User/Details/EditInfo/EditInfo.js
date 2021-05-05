import React, { Component, Fragment } from "react";
import "./EditInfo.scss";

class EditInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      contentEdit: "",
    };
  }

  componentWillMount() {
    this.setState({
      contentEdit: this.props.userName,
    });
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSaveEditting = () => {
    this.props.onSaveEditting(this.state.contentEdit);
    this.props.onCloseEditInfo();
  };
  render() {
    return (
      <Fragment>
        <div className="overlay-full">
          <div className="edit-details-info">
            <h4>Edit Infomation</h4>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="contentEdit"
                value={this.state.contentEdit}
                onChange={this.onChange}
              />
              <div className="btn-control">
                <button
                  className="btn btn-success btn-save"
                  onClick={this.onSaveEditting}
                >
                  Save
                </button>
                <button
                  className="btn btn-warning btn-close"
                  onClick={this.props.onCloseEditInfo}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default EditInfo;
