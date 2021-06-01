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
import { Form } from "../../../../Shared";
import { REGEX_TEL } from "../../../Exam/Shared";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { Card } from "@material-ui/core";

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
        certificate: "",
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
      teamSelected: [],
      teamsName: [],
    };
  }

  componentDidMount = async () => {
    const res = await Http.get("teams");
    this.setState({
      teamsName: res.data
    });
    console.log("TeamsName", this.state.teamsName);
  };

  addMemberToTeam(teamId, userId) {
    const req = Http.post("teams/add/members?team=" + teamId, userId);
  }

  onSubmitAddNewUser = async () => {
    this._validateForm();
    this.state.form["dirty"] = true;
    const { form, teamSelected } = this.state;
    if (form.status.value == 10) {
      form.status.value = "Pending";
    }
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
      status: form.status.value,
      teams: teamSelected
    };
    try {
      const req = await Http.post("users", newDataUser);
      console.log("New User", req.data);
      this.props.onSubmitAddNewUser();
      this.props.onCloseAddNewUser();
    } catch (error) {
      console.log("Error add new user");
    }
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

  getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  handleChange = (event) => {
    this.setState({
      teamSelected: event.target.value,
    });
  };

  handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      teamSelected: event.target.value,
    });
    console.log("Team selected", this.state.teamSelected);
  };

  render() {
    const { classes } = this.props;
    const { teamsName, teamSelected } = this.state;
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
          <h3 className="title">Add new user</h3>
          <div className="input">
            <div className="row">
              <div className="col-sm-6">
                <TextField
                  type="text"
                  name="name"
                  label="Username"
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
                  label="Birthday"
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
                  label="Address"
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
                <TextField
                  type="text"
                  name="certificate"
                  label="Certificate"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "certificate")}
                />
                <span className="validate-noti">
                  {certificate.err.length > 0 && dirty ? certificate.err : ""}
                </span>
                <FormControl className="input-field">
                  <InputLabel id="demo-mutiple-chip-label">Teams</InputLabel>
                  <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    multiple
                    name="teams"
                    value={teamSelected}
                    onChange={this.handleChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                      <div className={classes.chips}>
                        {teamSelected.map((team) => (
                          <Chip
                            key={team.id}
                            label={team.name}
                            className={classes.chip}
                          />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}
                  >
                    {teamsName.map((team) => (
                      <MenuItem key={team.id} value={team}>
                        {team.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <span className="validate-noti">{dirty ? teams.err : ""}</span>
                <TextField
                  type="text"
                  name="phone"
                  inputProps={{ pattern: REGEX_TEL }}
                  label="Phone number"
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
                    value={status.value}
                    required
                  >
                    <MenuItem value={10}>Pending</MenuItem>
                  </Select>
                </FormControl>
                <span className="validate-noti">
                  {status.err.length > 0 && dirty
                    ? requiredNoti + " username"
                    : ""}
                </span>
                <TextField
                  type="text"
                  label="Bank"
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
                  label="Bank Account Holder"
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
                  label="Bank Account Number"
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
      </div>
    );
  }
}

export default withStyles(useStyles)(AddNewUser);
