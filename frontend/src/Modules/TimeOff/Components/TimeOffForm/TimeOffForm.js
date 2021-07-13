import React, { Component } from "react";
import "./TimeOffForm.scss";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Form } from "../../../../Shared";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Button, Chip } from "@material-ui/core";
import TimeOffService from "../../Shared/TimeOffService";
import { ModalNoti } from "../../../../Shared";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class TimeOffForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        timeOffReason: "",
        startDate: null,
        endDate: null,
        pic: "",
        dirty: false,
      }),
      endDateOrg: "",
      pics: [
        {
          id: "60cff2ed74c34ea254311e8a",
          name: "Trieu Le",
        },
        {
          id: "60cff742dbec139b90add99f",
          name: "Đăng Jinner",
        },
      ],
      chooseTimeOff: 0,
      message: "",
    };
  }

  componentWillReceiveProps = (nextProps) => {
    const { data } = nextProps;
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);
    if (
      Object.prototype.toString.call(startDate) === "[object Date]" &&
      Object.prototype.toString.call(endDate) === "[object Date]" &&
      !isNaN(startDate.getTime()) &&
      !isNaN(endDate.getTime())
    ) {
      endDate.setDate(endDate.getDate() - 1);
      startDate.setHours(0);
      endDate.setHours(23);
      endDate.setMinutes(59);
      this._fillForm({
        timeOffReason: "",
        startDate: startDate,
        endDate: endDate,
        pic: "60cff2ed74c34ea254311e8a",
        dirty: false,
      });
    }

    this.setState({
      onOpenForm: nextProps.onOpen,
    });
  };

  componentWillMount = () => {
    this.state.form["pic"].value = "60cff2ed74c34ea254311e8a";
    this.setDefaultTime();
  };

  setDefaultTime = () => {
    const startDate = new Date();
    const endDate = new Date();
    startDate.setDate(startDate.getDate() + 1);
    endDate.setDate(endDate.getDate() + 1);
    startDate.setHours(0);
    endDate.setHours(23);
    endDate.setMinutes(59);
    this.state.form["startDate"].value = startDate;
    this.state.form["endDate"].value = endDate;
  };

  convertDate = (data) => {
    const date = new Date(data);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    const today = yyyy + "-" + mm + "-" + dd;
    return today;
  };

  handleChangePic = (event) => {
    this.state.form["pic"] = {
      value: event.target.value,
      err: "",
    };
  };

  chooseTimeOff = (time) => {
    const { startDate, endDate } = this.state.form;
    switch (time) {
      case 1:
        this.setChooseTime("from", startDate.value, 0, 0);
        this.setChooseTime("to", endDate.value, 11, 59);
        break;
      case 2:
        this.setChooseTime("from", startDate.value, 12, 0);
        this.setChooseTime("to", endDate.value, 23, 59);
        break;
      case 0:
        this.setChooseTime("from", startDate.value, 0, 0);
        this.setChooseTime("to", endDate.value, 23, 59);
        break;
    }
    this.setState({
      chooseTimeOff: time,
    });
  };

  setChooseTime = (code, date, hours, minutes) => {
    const dateTime = new Date(date);
    dateTime.setHours(hours);
    dateTime.setMinutes(minutes);
    if (code === "from") {
      this.state.form["startDate"].value = dateTime;
    } else if (code === "to") {
      this.state.form["endDate"].value = dateTime;
    }
  };

  commitTimeOff = async () => {
    this._validateForm();
    this.state.form["dirty"] = true;
    const { form } = this.state;
    const userId = JSON.parse(localStorage.getItem("userId"));
    if (this._isFormValid()) {
      const dataTimeOff = {
        reason: form.timeOffReason.value,
        from: form.startDate.value,
        to: form.endDate.value,
        pic: form.pic.value,
        by: userId,
      };
      await TimeOffService.addTimeOff(dataTimeOff)
        .then((res) => {

          this.setState({
            message: "Gửi yêu cầu xin nghỉ thành công !!",
          });
        })
        .catch((err) => {
          this.setState({
            message: "Gửi yêu cầu xin nghỉ thất bại. Vui lòng thử lại sau !!",
          });
        });
    }
    this.props.onSubmit();
    
  };

  getTime = (date) => {
    const newDate = new Date(date);
    const hour = String(newDate.getHours()).padStart(2, "0");
    const min = String(newDate.getMinutes()).padStart(2, "0");
    return hour + ":" + min;
  };

  onCloseForm = () => {
    const parentForm = document.getElementById("time-off-parent");
    const timeOffForm = document.getElementById("time-off-form");
    timeOffForm.classList.add("close-form");
    parentForm.classList.add("inactive-scheduler");
    this.props.onClose();
  };

  render() {
    const { startDate, endDate, pic, timeOffReason, dirty } = this.state.form;
    const startDateConvert = this.convertDate(startDate.value);
    const endDateConvert = this.convertDate(endDate.value);
    const { pics, chooseTimeOff, onOpenForm } = this.state;
    const selectOption = pics.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });

    const parentForm = document.getElementById("time-off-parent");
    const timeOffForm = document.getElementById("time-off-form");
    if (this.props.onOpen) {
      parentForm.classList.add("active-form");
      timeOffForm.classList.remove("close-form");
      parentForm.classList.remove("inactive-scheduler");
    }

    document.onclick = (ev) => {
      if (
        ev.target.id !== "time-off-form" &&
        ev.target.id == "time-off-parent"
      ) {
        this.onCloseForm();
      }
    };

    let requiredNoti = "Không được để trống ";
    return (
      <div className="scheduler-time-off" id="time-off-parent">
        <div className="form" id="time-off-form">
          <h2 className="title">Xin nghỉ phép</h2>
          <div className="row">
            <div className="col-sm-12 div-margin">
              <TextField
                type="text"
                required
                name="timeOffReason"
                label="Lý do xin nghỉ"
                value={timeOffReason.value}
                onChange={(ev) => this._setValue(ev, "timeOffReason")}
                variant="outlined"
                className="input-field"
              />
              <span className="validate-noti">
                {timeOffReason.err == "*" && dirty
                  ? requiredNoti + "lý do xin nghỉ"
                  : ""}
              </span>
            </div>
            <div className="col-sm-6 div-margin">
              <TextField
                type="date"
                name="startDate"
                variant="outlined"
                value={startDateConvert}
                onChange={(ev) => this._setValue(ev, "startDate")}
                className="input-field"
              />
            </div>
            <div className="col-sm-6 div-margin">
              <TextField
                type="date"
                name="endDate"
                variant="outlined"
                value={endDateConvert}
                onChange={(ev) => this._setValue(ev, "endDate")}
                className="input-field"
              />
            </div>
            <div className="col-sm-12 div-margin">
              <span className="time-info">
                Thời gian bắt đầu từ {this.getTime(startDate.value)}
              </span>
              <span className="time-info">
                {" "}
                đến {this.getTime(endDate.value)}
              </span>
            </div>
            <div className="col-sm-12 div-margin">
              <FormControlLabel
                value={1}
                control={
                  <Radio
                    color="primary"
                    name="choose-time"
                    checked={chooseTimeOff === 1}
                    onChange={() => this.chooseTimeOff(1)}
                  />
                }
                label="Buổi sáng"
                labelPlacement="start"
              />
              <FormControlLabel
                value={2}
                control={
                  <Radio
                    color="primary"
                    name="choose-time"
                    checked={chooseTimeOff === 2}
                    onChange={() => this.chooseTimeOff(2)}
                  />
                }
                label="Buổi chiều"
                labelPlacement="start"
              />
              <FormControlLabel
                value={3}
                control={
                  <Radio
                    color="primary"
                    name="choose-time"
                    checked={chooseTimeOff === 0}
                    onChange={() => this.chooseTimeOff(0)}
                  />
                }
                label="Cả ngày"
                labelPlacement="start"
              />
            </div>
            <div className="col-sm-12 div-margin">
              <FormControl variant="outlined" className="input-field">
                <InputLabel id="demo-simple-select-outlined-label">
                  Người xét duyệt
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label=" Người xét duyệt"
                  defaultValue={pic.value}
                  onChange={(ev) => this.handleChangePic(ev)}
                >
                  {selectOption}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="btn-control-box">
            <Button
              onClick={this.onCloseForm}
              variant="contained"
              color="default"
              className="btn-control-default"
            >
              Thoát
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="btn-control-primary"
              onClick={this.commitTimeOff}
            >
              Gửi yêu cầu
            </Button>
          </div>
        </div>
        <ModalNoti
          message={this.state.message}
          done={() => this.setState({ message: "" })}
        ></ModalNoti>
      </div>
    );
  }
}
export default TimeOffForm;
