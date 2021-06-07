import React from "react";
import { Http } from "../../../../../Helper/Http";
import "./ManagementEditInfo.scss";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CakeIcon from "@material-ui/icons/Cake";
import HomeIcon from "@material-ui/icons/Home";
import FormHelperText from "@material-ui/core/FormHelperText";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import GroupIcon from "@material-ui/icons/Group";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
import { Form, ModalNoti } from "../../../../../Shared";
import {
  FormControlLabel,
  withStyles,
  useTheme,
  Checkbox,
  ListItemText,
} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import NativeSelect from "@material-ui/core/NativeSelect";
import { REGEX_TEL } from "../../../../Exam/Shared";
import ManagementService from "../../../Shared/ManagementService";
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
class ManagementEditInfo extends Form {
  constructor(props) {
    super(props);
    this.state = {
      notiMessage: "",
      form: this._getInitFormData({
        id: "",
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
        status: 10,
        dirty: false,
        teams: [],
      }),
      onEditInfo: false,
      teamsCurrent: [],
      teamsSelected: [],
    };
  }

  componentDidMount = async () => {
    const { userId } = this.props;
    let listTeamsUser = [];
    ManagementService.getUserInfo(userId).then((res) => {
      const accountFacebook = res.data.socialNetwork.find((acc) => {
        return acc.title === "facebook";
      });
      const linkAccountFacebook = accountFacebook ? accountFacebook.link : "";
      let statusValue = 10;
      if (res.data.status == "Pending") {
        statusValue = 10;
      } else if (res.data.status == "Working") {
        statusValue = 20;
      }
      listTeamsUser = res.data.teams;
      const dataUser = {
        id: res.data.id,
        name: res.data.name,
        birthday: res.data.birthday,
        adress: res.data.adress,
        certificate: res.data.certificate,
        phone: res.data.phone,
        email: res.data.email,
        linkFacebook: linkAccountFacebook,
        bankName: res.data.bank.bankName,
        ownName: res.data.bank.ownName,
        bankNumber: res.data.bank.bankNumber,
        status: statusValue,
        teams: res.data.teams,
      };
      this._fillForm(dataUser);
    });
    ManagementService.getListTeams().then((resTeam) => {
      for (let i = 0; i < listTeamsUser.length; i++) {
        ManagementService.getTeamId(listTeamsUser[i]).then((resTeamId) => {
          const teamUser = [];
          console.log("RES TEAM IDDDD", resTeamId);
          teamUser.push(resTeamId.data);
          for (let j = 0; j < resTeam.data.length; j++) {
            if (resTeam.data[j].id === listTeamsUser[i]) {
              resTeam.data.splice(j, 1);
              resTeam.data.push(resTeamId.data);
            }
          }
          this.setState({
            teamsSelected: teamUser,
          });
        });
      }
      this.setState({
        teamsCurrent: resTeam.data,
      });
    });
  };

  onEditInfo = () => {
    this.setState({
      onEditInfo: !this.state.onEditInfo,
    });
    if (this.state.onEditInfo) {
      window.location.reload(true);
    }
  };

  onSaveEditUserInfo = async () => {
    this._validateForm();
    const { form, teamsSelected } = this.state;
    const { userId } = this.props;
    const teamsSelectedId = [];
    teamsSelected.forEach((item) => {
      teamsSelectedId.push(item.id);
    })
    console.log("TEAM IDDDD", teamsSelectedId);
    let statusValue = "";
    this.state.form["dirty"] = true;
    if (form.status.value === 10) {
      statusValue = "Pending";
    } else if (form.status.value === 20) {
      statusValue = "Working";
    }
    const dataUser = {
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
      status: statusValue,
      teams: teamsSelectedId,
      bank: {
        bankName: form.bankName.value,
        ownName: form.ownName.value,
        bankNumber: form.bankNumber.value,
      },
    };

    if (this._isFormValid()) {
      ManagementService.updateUserInfo(userId, dataUser)
        .then((req) => {
          this.setState({
            notiMessage: "Chỉnh sửa thông tin user thành công",
            onEditInfo: false,
          });
        })
        .catch((err) => {
          this.setState({
            notiMessage: "Chỉnh sửa thông tin user thất bại",
          });
        });
    } else {
      this.setState({
        notiMessage: "Vui lòng nhập lại thông tin",
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      teamsSelected: event.target.value,
    });
    console.log("Team selecteddddddddd", this.state.teamsSelected);
  };

  handleChangeMultiple = (event) => {
    const { options } = event.target;
    const { teamsSelected } = this.state;
    const value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    this.setState({
      teamsSelected: value,
    });
  };

  handleChangeStatus = (ev) => {
    this.state.form["status"] = {
      value: ev.target.value,
      err: "",
    };
    console.log("Status", this.state.form.status);
  };

  handleChangeTeam = (obj, teams) => {
    const teamsSelectedId = [];
    teams.forEach((team) => {
      teamsSelectedId.push(team.id);
    });
    this.setState({
      teamsSelected: teamsSelectedId,
    });
    console.log(this.state.teamsSelected);
  };

  getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  checkTeamSelected(team) {
    const { teamsSelected } = this.state;
    let checkTeamSelected = false;
    teamsSelected.forEach(item => {
      if(item.id === team.id) {
        checkTeamSelected = true
      }
    });
    return checkTeamSelected;
  }

  render() {
    const { form, onEditInfo, teamsSelected, teamsCurrent } = this.state;
    const { classes, userId } = this.props;
    console.log("formmmmmmmmmmmm", form);
    const birthday = new Date(form.birthday.value);
    const month = birthday.getMonth();
    const year = birthday.getFullYear();
    const day = birthday.getDate();
    const birthdayConvert =
      year +
      "-" +
      (month < 10 ? "0" + month : month) +
      "-" +
      (day < 10 ? "0" + day : day);
    const styleButton = onEditInfo
      ? "btn-control-default"
      : "btn-control-primary";

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
    const errRequiredNoti = "Không được để trống ";
    return (
      <Card className="management-edit-info">
        <div className="btn-control-box">
          <Button
            variant="contained"
            color={onEditInfo ? "default" : "primary"}
            className={styleButton}
            onClick={this.onEditInfo}
            style={
              onEditInfo
                ? {
                    marginRight: "0",
                  }
                : null
            }
            startIcon={onEditInfo ? <ClearIcon /> : <EditIcon />}
          >
            {onEditInfo ? "Hủy chỉnh sửa" : "Chỉnh sửa"}
          </Button>
        </div>
        <div className="form-edit">
          <div className="row">
            <div className="col-sm-4">
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
                  value={form.name.value}
                  onChange={(ev) => this._setValue(ev, "name")}
                  readOnly={!onEditInfo}
                  required
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
                <span className="validate-noti">
                  {form.dirty && form.name.err === "*"
                    ? errRequiredNoti + "username"
                    : ""}
                </span>
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
                  name="birthday"
                  onChange={(ev) => this._setValue(ev, "birthday")}
                  value={birthdayConvert}
                  required
                  readOnly={!onEditInfo}
                  style={{
                    padding: "0",
                  }}
                  startAdornment={
                    <InputAdornment position="start">
                      <CakeIcon />
                    </InputAdornment>
                  }
                />
                <span className="validate-noti">
                  {form.dirty && form.birthday.err === "*"
                    ? errRequiredNoti + "birthday"
                    : ""}
                </span>
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
                  name="adress"
                  onChange={(ev) => this._setValue(ev, "adress")}
                  value={form.adress.value}
                  required
                  disarbled={!onEditInfo}
                  startAdornment={
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  }
                />
                <span className="validate-noti">
                  <span className="validate-noti">
                    {form.dirty && form.adress.err === "*"
                      ? errRequiredNoti + "address"
                      : ""}
                  </span>
                </span>
              </FormControl>
              <FormControl className="form-input">
                <InputLabel
                  className="title-input"
                  htmlFor="input-with-icon-adornment"
                >
                  Bằng cấp
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  name="certificate"
                  onChange={(ev) => this._setValue(ev, "certificate")}
                  value={form.certificate.value}
                  readOnly={!onEditInfo}
                  startAdornment={
                    <InputAdornment position="start">
                      <CardMembershipIcon />
                    </InputAdornment>
                  }
                />
                <span className="validate-noti">
                  {form.dirty && form.certificate.err === "*"
                    ? errRequiredNoti + "certificate"
                    : ""}
                </span>
              </FormControl>
              <FormControl className="form-input">
                <InputLabel id="demo-mutiple-checkbox-label" className="title-input">Teams</InputLabel>
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={teamsSelected}
                  onChange={this.handleChange}
                  input={<Input id="select-multiple-chip" />}
                  readOnly={!onEditInfo}
                  renderValue={(selected) => (
                    <div className={classes.chips}>
                      {teamsSelected.map((team) => (
                        <Chip
                          key={team.id}
                          label={team.name}
                          className={classes.chip}
                        />
                      ))}
                    </div>
                  )}
                  MenuProps={MenuProps}
                  startAdornment={
                    <InputAdornment position="start">
                    <GroupIcon/>
                  </InputAdornment>
                  }
                >
                  {teamsCurrent.map((team) => (
                    <MenuItem key={team.id} value={team}>
                      <Checkbox
                        checked={this.checkTeamSelected(team)}
                      />
                      <ListItemText primary={team.name} />
                    </MenuItem>
                  ))}

                </Select>
              </FormControl>
            </div>
            <div className="col-sm-4">
              <FormControl className="form-input">
                <InputLabel
                  className="title-input"
                  htmlFor="input-with-icon-adornment"
                >
                  Số điện thoại
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  type="text"
                  name="phone"
                  inputProps={{ pattern: REGEX_TEL }}
                  onChange={(ev) => this._setValue(ev, "phone")}
                  value={form.phone.value}
                  readOnly={!onEditInfo}
                  required
                  startAdornment={
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  }
                />
                <span className="validate-noti">
                  {form.dirty && form.phone.err === "*"
                    ? errRequiredNoti + "phone"
                    : ""}
                  {form.dirty && form.phone.err !== "*" ? form.phone.err : ""}
                </span>
              </FormControl>
              <FormControl className="form-input">
                <InputLabel
                  className="title-input"
                  htmlFor="input-with-icon-adornment"
                >
                  Email cá nhân
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  type="email"
                  name="email"
                  onChange={(ev) => this._setValue(ev, "email")}
                  value={form.email.value}
                  readOnly={!onEditInfo}
                  required
                  startAdornment={
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  }
                />
                <span className="validate-noti">
                  <span>
                    {form.dirty && form.email.err === "*"
                      ? errRequiredNoti + "email"
                      : ""}
                    {form.dirty && form.email.err !== "*" ? form.email.err : ""}
                  </span>
                </span>
              </FormControl>
              <FormControl className="form-input">
                <InputLabel
                  className="title-input"
                  htmlFor="input-with-icon-adornment"
                >
                  Facebook
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  readOnly={!onEditInfo}
                  onChange={(ev) => this._setValue(ev, "linkFacebook")}
                  value={form.linkFacebook.value}
                  startAdornment={
                    <InputAdornment position="start">
                      <FacebookIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className="form-input">
                <InputLabel className="title-input">Tình trạng</InputLabel>
                <Select
                  className="input"
                  id="demo-simple-select"
                  value={form.status.value}
                  onChange={(ev) => this.handleChangeStatus(ev)}
                  disabled={!onEditInfo}
                  startAdornment={
                    <InputAdornment
                      position="start"
                      style={{
                        marginRight: "19px",
                      }}
                    >
                      <HowToRegIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem className="option-status" value={10}>
                    Pending
                  </MenuItem>
                  <MenuItem className="option-status" value={20}>
                    Working
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-sm-4">
              <FormControl className="form-input">
                <InputLabel
                  className="title-input"
                  htmlFor="input-with-icon-adornment"
                >
                  Tên ngân hàng
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  name="bankName"
                  onChange={(ev) => this._setValue(ev, "bankName")}
                  value={form.bankName.value}
                  readOnly={!onEditInfo}
                  required
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountBalanceIcon />
                    </InputAdornment>
                  }
                />
                <span className="validate-noti">
                  {form.dirty && form.bankName.err === "*"
                    ? errRequiredNoti + "bank name"
                    : ""}
                </span>
              </FormControl>
              <FormControl className="form-input">
                <InputLabel
                  className="title-input"
                  htmlFor="input-with-icon-adornment"
                >
                  Chủ tài khoản
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  name="ownName"
                  onChange={(ev) => this._setValue(ev, "ownName")}
                  value={form.ownName.value}
                  readOnly={!onEditInfo}
                  required
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountBoxIcon />
                    </InputAdornment>
                  }
                />
                <span className="validate-noti">
                  {form.dirty && form.ownName.err === "*"
                    ? errRequiredNoti + "bank account holder"
                    : ""}
                </span>
              </FormControl>
              <FormControl className="form-input">
                <InputLabel
                  className="title-input"
                  htmlFor="input-with-icon-adornment"
                >
                  Số tài khoản
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  name="bankNumber"
                  onChange={(ev) => this._setValue(ev, "bankNumber")}
                  value={form.bankNumber.value}
                  readOnly={!onEditInfo}
                  required
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountBoxIcon />
                    </InputAdornment>
                  }
                />
                <span className="validate-noti">
                  {form.dirty && form.bankNumber.err === "*"
                    ? errRequiredNoti + "bank account number"
                    : ""}
                </span>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="btn-control-box">
          <Button
            variant="contained"
            color="default"
            href="/app/management/users"
            className="btn-control-default"
          >
            Thoát
          </Button>
          {onEditInfo ? (
            <Button
              variant="contained"
              color="primary"
              className="btn-control-primary"
              onClick={this.onSaveEditUserInfo}
            >
              Lưu thay đổi
            </Button>
          ) : (
            ""
          )}
        </div>
        <ModalNoti
          message={this.state.notiMessage}
          done={() => this.setState({ notiMessage: "" })}
        ></ModalNoti>
      </Card>
    );
  }
}

export default withStyles(useStyles)(ManagementEditInfo);
