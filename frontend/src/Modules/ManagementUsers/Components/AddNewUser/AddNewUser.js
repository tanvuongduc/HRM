import React from "react";
import { Http } from "../../../../Helper/Http";
import "./AddNewUser.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Form, ModalNoti } from "../../../../Shared";
import { REGEX_TEL } from "../../../Exam/Shared";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { Card } from "@material-ui/core";
import ManagementService from "../../Shared/ManagementService";
import { Autocomplete } from "@material-ui/lab";

const useStyles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
});

class AddNewUser extends Form {
  constructor(props) {
    super(props);
    this.state = {
      notiMessage: "",
      form: this._getInitFormData({
        name: "",
        birthday: "",
        adress: "",
        certificate: [],
        phone: "",
        email: "",
        linkFacebook: "",
        bankName: "",
        ownName: "",
        bankNumber: "",
        status: 20,
        dirty: false,
        teams: [],
      }),
      teamsSelected: [],
      listTeams: [],
      listCertificates: [],
      certificateSelected: []
    };
  }

  componentDidMount = async () => {
    ManagementService.getListTeams().then((res) => {
      this.setState({
        listTeams: res.data,
      });
    });
    ManagementService.getCertificates().then((res) => {
      this.setState({
        listCertificates: res.data,
      });
    });
    
  };

  onChangeStatusValue = (ev, key) => {
    const target = ev.target;
    const value = target.value;
    console.log("Value status", value);
    this.state.form[key] = {
      value: value,
      err: "",
    };
    console.log("State status", this.state.form.status);
  };

  onSubmitAddNewUser = async () => {
    this._validateForm();
    this.state.form["dirty"] = true;
    const { form, teamsSelected } = this.state;
    let statusValue = "";
    if (form.status.value === 10) {
      statusValue = "Pending";
    } else if (form.status.value === 20) {
      statusValue = "Working";
    }
    console.log("STATUS VALUEEEE", statusValue);
    const newDataUser = {
      name: form.name.value,
      birthday: form.birthday.value,
      adress: form.adress.value,
      certificate: form.certificate.value,
      phone: form.phone.value,
      email: form.email.value,
      socialNetwork: [
        {
          title: "facebook",
          link: form.linkFacebook.value,
        },
      ],
      bank: {
        bankName: form.bankName.value,
        ownName: form.ownName.value,
        bankNumber: form.bankNumber.value,
      },
      status: statusValue,
      teams: teamsSelected,
    };
    console.log("new dater userrrr", newDataUser);
    if (this._isFormValid()) {
      ManagementService.postNewUser(newDataUser)
        .then((res) => {
          this.setState({
            notiMessage: "Thêm mới user thành công",
          });
          this.props.onCloseAddNewUser();
        })
        .catch((err) => {
          this.setState({
            notiMessage: "Thêm mới user thất bại",
          });
        });
    } else {
      this.setState({
        notiMessage: "Vui lòng nhập lại thông tin user",
      });
    }
  };

  getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  handleChangeTeam = (obj, teams) => {
    const teamsSelectedId = [];
    teams.forEach((team) => {
      teamsSelectedId.push(team.id);
    });
    this.setState({
      teamsSelected: teamsSelectedId
    });
    console.log(this.state.teamsSelected);
  }

  handleChangeCertificate = (value) => {
    
  }

  render() {
    const { classes } = this.props;
    const { listTeams, listCertificates } = this.state;
    const {
      name,
      birthday,
      adress,
      certificate,
      phone,
      email,
      linkFacebook,
      bankName,
      ownName,
      bankNumber,
      status,
      teams,
      dirty,
    } = this.state.form;
    console.log("Form", this.state.form);
    let requiredNoti = "Không được để trống";
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };
    return (
      <div className="management-add-user">
        <Card className="add-new-user">
          <h3 className="title">Thêm mới nhân viên</h3>
          <div className="input">
            <div className="row">
              <div className="col-sm-6">
                <TextField
                  type="text"
                  name="name"
                  label="Họ và tên"
                  className="input-field"
                  value={name.value}
                  onChange={(ev) => this._setValue(ev, "name")}
                  required
                />
                <span className="validate-noti">
                  {name.err.length > 0 && dirty
                    ? requiredNoti + " username"
                    : ""}
                </span>
                <TextField
                  type="date"
                  label="Ngày sinh"
                  name="birthday"
                  className="input-field input-field-date"
                  onChange={(ev) => this._setValue(ev, "birthday")}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
                <span className="validate-noti">
                  {birthday.err.length > 0 && dirty
                    ? requiredNoti + " birthday"
                    : ""}
                </span>

                <TextField
                  type="text"
                  label="Địa chỉ"
                  name="adress"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "adress")}
                  required
                />
                <span className="validate-noti">
                  {adress.err.length > 0 && dirty
                    ? requiredNoti + " address"
                    : ""}
                </span>
                <FormControl className="input-field">
                  <Autocomplete
                    multiple
                    id="tags-standard"
                    options={listCertificates}
                    getOptionLabel={(certificate) => certificate.name}
                    getOptionSelected={(value) => this.handleChangeCertificate(value)}
                    renderInput={(params) => (  
                      <TextField
                        {...params}
                        variant="standard"
                        label="Bằng cấp"
                      />
                    )}
                  />
                </FormControl>
                <span className="validate-noti">
                  {certificate.err.length > 0 && dirty ? certificate.err : ""}
                </span>
                <FormControl className="input-field">
                  <Autocomplete
                    multiple
                    id="tags-standard"
                    options={listTeams}
                    getOptionLabel={(team) => team.name}
                    onChange={(obj, value) => this.handleChangeTeam(obj, value)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Teams"
                      />
                    )}
                  />
                </FormControl>
                <span className="validate-noti">{dirty ? teams.err : ""}</span>
                <TextField
                  type="text"
                  name="phone"
                  inputProps={{ pattern: REGEX_TEL }}
                  label="Số điện thoại"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "phone")}
                  required
                />
                <span className="validate-noti">
                  {dirty && phone.err === "*"
                    ? requiredNoti + " phone number"
                    : phone.err}
                </span>
              </div>
              <div className="col-sm-6">
                <TextField
                  type="email"
                  name="email"
                  label="Email"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "email")}
                  required
                />
                <span className="validate-noti">
                  {dirty && email.err === "*"
                    ? requiredNoti + " email"
                    : email.err}
                </span>
                <TextField
                  type="text"
                  name="linkFacebook"
                  label="Facebook"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "linkFacebook")}
                />
                <span className="validate-noti">
                  {linkFacebook.err.length > 0 && dirty
                    ? requiredNoti + " username"
                    : ""}
                </span>
                <FormControl className="input-field">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Status
                  </InputLabel>
                  <Select
                    name="status"
                    labelId="demo-simple-select-outlined-label"
                    onChange={(ev) => this.onChangeStatusValue(ev, "status")}
                    required
                  >
                    <MenuItem value={10}>Pending</MenuItem>
                    <MenuItem value={20}>Working</MenuItem>
                  </Select>
                </FormControl>
                <span className="validate-noti">
                  {status.err.length > 0 && dirty
                    ? requiredNoti + " username"
                    : ""}
                </span>
                <TextField
                  type="text"
                  label="Tên ngân hàng"
                  name="bankName"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "bankName")}
                  required
                />
                <span className="validate-noti">
                  {bankName.err.length > 0 && dirty
                    ? requiredNoti + " bank"
                    : ""}
                </span>
                <TextField
                  type="text"
                  name="ownName"
                  label="Chủ tài khoản"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "ownName")}
                  required
                />
                <span className="validate-noti">
                  {ownName.err.length > 0 && dirty
                    ? requiredNoti + " bank account holder"
                    : ""}
                </span>
                <TextField
                  type="text"
                  name="bankNumber"
                  label="Số tài khoản"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "bankNumber")}
                  required
                />
                <span className="validate-noti">
                  {bankNumber.err.length > 0 && dirty
                    ? requiredNoti + " bank account number"
                    : ""}
                </span>
              </div>
            </div>
          </div>
          <div className="btn-control-box">
            <Button
              variant="contained"
              color="default"
              className="btn-control-default"
              onClick={this.props.onCloseAddNewUser}
            >
              Close
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="btn-control-primary"
              onClick={this.onSubmitAddNewUser}
            >
              Submit
            </Button>
          </div>
        </Card>
        <ModalNoti
          message={this.state.notiMessage}
          done={() => this.setState({ notiMessage: "" })}
        ></ModalNoti>
      </div>
    );
  }
}

export default withStyles(useStyles)(AddNewUser);
