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
import { Button } from "@material-ui/core";
import TimeOffService from "../../Shared/TimeOffService";
import { ModalNoti } from "../../../../Shared";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

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

  componentWillMount() {
    const { data } = this.props;
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);
    startDate.setHours(8);
    endDate.setDate(endDate.getDate() - 1);
    endDate.setHours(17);
    this._fillForm({
      timeOffReason: "",
      startDate: startDate,
      endDate: endDate,
      pic: "60cff2ed74c34ea254311e8a",
      dirty: false,
    });
    
  }

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
        this.setChooseTime("from", startDate.value, 8, 0);
        this.setChooseTime("to", endDate.value, 12, 0);
        break;
      case 2:
        this.setChooseTime("from", startDate.value, 13, 0);
        this.setChooseTime("to", endDate.value, 17, 0);
        break;
      case 0:
        this.setChooseTime("from", startDate.value, 8, 0);
        this.setChooseTime("to", endDate.value, 17, 0);
        break;
    }
    this.setState({
      chooseTimeOff: time,
    });
    console.log("start date", this.state.form.startDate);
    console.log("end date", this.state.form.endDate);
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
    console.log("FORMMMMMMMM", form);
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
  };


  render() {
    const { startDate, endDate, pic, timeOffReason, dirty } = this.state.form;
    const startDateConvert = this.convertDate(startDate.value);
    const endDateConvert = this.convertDate(endDate.value);
    const { pics, chooseTimeOff } = this.state;
    const selectOption = pics.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
    let requiredNoti = "Không được để trống ";
    return (
      <div className="time-off-form">
       
        <div className="form">
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
              <Button
                onClick={() => this.chooseTimeOff(1)}
                variant="contained"
                color={chooseTimeOff === 1 ? "primary" : "default"}
                className="btn-choose-time"
              >
                Buổi sáng
              </Button>
              <Button
                onClick={() => this.chooseTimeOff(2)}
                variant="contained"
                color={chooseTimeOff === 2 ? "primary" : "default"}
                className="btn-choose-time"
              >
                Buổi chiều
              </Button>
              <Button
                onClick={() => this.chooseTimeOff(0)}
                variant="contained"
                color={chooseTimeOff === 0 ? "primary" : "default"}
                className="btn-choose-time"
              >
                Cả ngày
              </Button>
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
              onClick={this.props.onCloseForm}
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
