import React, { Component, Fragment } from "react";
import "./EditInfo.scss";

class EditInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeEdit: '',
      titleEdit: '',
      valueEdit: ''
    };
  }

  componentWillMount() {
    this.setState({
      codeEdit: this.props.codeEdit,
      titleEdit: this.props.titleEdit,
      valueEdit: this.props.valueEdit
    });
    console.log(this.state.codeEdit);
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
    this.props.onSaveEditting(this.state.codeEdit, this.state.valueEdit);
    this.props.onCloseEditInfo();
  };
  render() {
    const { titleEdit, valueEdit } = this.state;
    return (
      <Fragment>
        <div className="overlay-full">
          <div className="edit-details-info">
            <h4>Edit Infomation</h4>
            <div className="form-group">
              <label>{titleEdit}</label>
              <input
                type="text"
                className="form-control"
                name="valueEdit"
                value={valueEdit}
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
