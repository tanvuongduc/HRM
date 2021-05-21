import React, { Component, Fragment } from "react";
import "./EditInfo.scss";

class EditInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeEdit: "",
      titleEdit: "",
      valueEdit: "",
    };
  }

  componentWillMount() {
    this.setState({
      codeEdit: this.props.codeEdit,
      titleEdit: this.props.titleEdit,
      valueEdit: this.props.valueEdit,
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
    const { codeEdit, valueEdit } = this.state;
    let { data } = this.props;
    switch (codeEdit) {
      case "username":
        data.name = valueEdit;
        break;
      case "address":
        data.adress = valueEdit;
        break;
      case "birthday":
        data.birthday = valueEdit;
        break;
      case "certificate":
        data.certificate = valueEdit;
        break;
      case "phoneNumber":
        data.phone = valueEdit;
        break;
      case "email":
        data.email = valueEdit;
        break;
      case "bankName":
        data.bank.bankName = valueEdit;
        break;
      case "bankId":
        data.bank.bankId = valueEdit;
        break;
    }
    this.props.onSaveEditting(data);
    this.props.onCloseEditInfo();
  };
  render() {
    const { titleEdit, valueEdit } = this.state;
    return (
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
              <a
                for="check-button-input"
                className="btn btn-save"
                onClick={this.onSaveEditting}
              >
                Save
              </a>
              <a
                for="check-button-input"
                className="btn btn-close"
                onClick={this.props.onCloseEditInfo}
              >
                Close
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditInfo;
