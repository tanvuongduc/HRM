import React, { Component, Fragment } from "react";
import "./BasicInfo.scss";
import { FaEdit } from "react-icons/fa";
import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CakeIcon from "@material-ui/icons/Cake";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import EditIcon from "@material-ui/icons/Edit";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { Form } from "../../../../../Shared";

class BasicInfo extends Form {
  constructor(props) {
    super(props);
    this.state = {
      onEditInfo: false,
      form: this._getInitFormData({
        username: '',
        birthday: '',
        address: ''
      })
    };
  }

  componentWillReceiveProps = (nextProps) => {
    let basicInfo = {
      username: nextProps.userName,
      birthday: nextProps.birthday,
      address: nextProps.address
    }
    this._fillForm(basicInfo);
  }

  onEditInfo = () => {
    this.setState({
      onEditInfo: true,
    });
  };

  saveChangeInfo = () => {
    const { form } = this.state;
    const basicInfo = {
      username: form.username.value,
      birthday: form.birthday.value,
      address: form.address.value
    }
    this.setState({
      onEditInfo: false
    });
    this.props.onSaveEditInfo(basicInfo);
  }

  render() {
    const { onEditInfo } = this.state;
    const { username, birthday, address } = this.state.form;
    return (
      <div className="details-card basicInfo">
        <h4 className="title">Thông tin cơ bản</h4>
        <div>
          <FormControl className="form-input">
            <InputLabel
              className="title-input"
              htmlFor="input-with-icon-adornment"
            >
              Họ và tên
            </InputLabel>
            <Input
              className="input"
              id="input-with-icon-adornment"
              name="name"
              value={username.value}
              onChange={(ev) => this._setValue(ev, "username")}
              required
              readOnly={!onEditInfo}
              disableUnderline={!onEditInfo}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  {onEditInfo ? (
                    <DoneOutlineIcon className="save-icon" onClick={this.saveChangeInfo}/>
                  ) : (
                    <EditIcon
                      className="edit-icon"
                      onClick={this.onEditInfo}
                    />
                  )}
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className="form-input">
            <InputLabel
              className="title-input"
              htmlFor="input-with-icon-adornment"
            >
              Ngày sinh
            </InputLabel>
            <Input
              type="date"
              className="input"
              id="input-with-icon-adornment"
              name="name"
              value={birthday.value}
              onChange={(ev) => this._setValue(ev, "birthday")}
              required
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <CakeIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className="form-input">
            <InputLabel
              className="title-input"
              htmlFor="input-with-icon-adornment"
            >
              Địa chỉ
            </InputLabel>
            <Input
              className="input"
              id="input-with-icon-adornment"
              name="name"
              value={address.value}
              onChange={(ev) => this._setValue(ev, "name")}
              required
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <HomeIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className="form-input">
            <InputLabel
              className="title-input"
              htmlFor="input-with-icon-adornment"
            >
              Status
            </InputLabel>
            <Input
              className="input"
              id="input-with-icon-adornment"
              name="name"
              value={""}
              onChange={(ev) => this._setValue(ev, "name")}
              required
              disableUnderline={true}
              startAdornment={
                <InputAdornment position="start">
                  <HowToRegIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </div>
    );
  }
}

export default BasicInfo;
