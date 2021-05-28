import React from "react";
import { Http } from "../../../../Helper/Http";
import "./AddNewUser.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Form } from "../../../../Shared";
import { REGEX_TEL } from "../../../Exam/Shared";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Chip from '@material-ui/core/Chip';

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
        teams: [],
      }),
      teamSelected: [],
      teamsName: [],
    };
  }

  componentDidMount = async () => {
    const res = await Http.get("teams");
    const { teamsName } = this.state;
    res.data.forEach((team) => {
      const teamObj = {
        id: team.id,
        name: team.name
      }
      teamsName.push(teamObj);
    });
    this.setState({
      teamsName: teamsName,
    });
    console.log("TeamsName", this.state.teamsName);
  };

  addMemberToTeam(teamId, userId) {
    const req = Http.post("teams/add/members?team="+teamId, userId)
  }

  onSubmitAddNewUser = async () => {
    const { form, teamSelected } = this.state;
    if (form.status.value == 10) {
      form.status.value = "Pending";
    }
    console.log("Team selected", this.state.teamSelected);
    const getNameTeamSelected = [];
    teamSelected.forEach(team => {
      getNameTeamSelected.push(team.name);
    });
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
          link: form.linkFacebook.value
        },
      ],
      bank: {
        bankName: form.bankName.value,
        ownName: form.ownName.value,
        bankNumber: form.bankNumber.value,
      },
      status: form.status.value,
      teams: getNameTeamSelected
    };
    
    const req = await Http.post("users", newDataUser);
    console.log("New User", req.data);
    this.props.onSubmitAddNewUser();
    this.props.onCloseAddNewUser();
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
      teamSelected: event.target.value
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
      teamSelected: event.target.value
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
    } = this.state.form;
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
        <div className="add-new-user">
          <h3 className="title">Add new user</h3>
          <div className="input">
            <div className="row">
              <div className="col-sm-6">
                <TextField
                  type="text"
                  label="Username"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "name")}
                  required
                />
                <span className="validate-noti">
                  {name.err.length > 0 ? requiredNoti : ""}
                </span>
                <TextField
                  type="date"
                  label="Birthday"
                  className="input-field input-field-date"
                  onChange={(ev) => this._setValue(ev, "birthday")}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
                <span className="validate-noti">
                  {birthday.err.length > 0 ? requiredNoti : ""}
                </span>

                <TextField
                  type="text"
                  label="Address"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "adress")}
                  required
                />
                <span className="validate-noti">
                  {adress.err.length > 0 ? requiredNoti : ""}
                </span>
                <TextField
                  type="text"
                  label="Certificate"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "certificate")}
                />
                <span className="validate-noti">
                  {certificate.err.length > 0 ? requiredNoti : ""}
                </span>
                <FormControl className="input-field">
                  <InputLabel id="demo-mutiple-chip-label">Teams</InputLabel>
                  <Select
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    multiple
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
                      <MenuItem
                        key={team.id}
                        value={team}
                      >
                        {team.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <span className="validate-noti">{teams.err}</span>
                <TextField
                  type="text"
                  inputProps={{ pattern: REGEX_TEL }}
                  label="Phone number"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "phone")}
                  required
                />
                <span className="validate-noti">{phone.err}</span>
              </div>
              <div className="col-sm-6">
                <TextField
                  type="email"
                  label="Email"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "email")}
                  required
                />
                <span className="validate-noti">{email.err}</span>
                <TextField
                  type="text"
                  label="Facebook"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "linkFacebook")}
                />
                <span className="validate-noti">
                  {linkFacebook.err.length > 0 ? requiredNoti : ""}
                </span>
                <FormControl className="input-field">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    onChange={(ev) => this.onChangeStatusValue(ev, "status")}
                    value={status.value}
                    required
                  >
                    <MenuItem value={10}>Pending</MenuItem>
                  </Select>
                </FormControl>
                <span className="validate-noti">
                  {status.err.length > 0 ? requiredNoti : ""}
                </span>
                <TextField
                  type="text"
                  label="Bank"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "bankName")}
                  required
                />
                <span className="validate-noti">
                  {bankName.err.length > 0 ? requiredNoti : ""}
                </span>
                <TextField
                  type="text"
                  label="Bank Account Holder"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "ownName")}
                  required
                />
                <span className="validate-noti">
                  {ownName.err.length > 0 ? requiredNoti : ""}
                </span>
                <TextField
                  type="text"
                  label="Bank Account Number"
                  className="input-field"
                  onChange={(ev) => this._setValue(ev, "bankNumber")}
                  required
                />
                <span className="validate-noti">
                  {bankNumber.err.length > 0 ? requiredNoti : ""}
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
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(AddNewUser);
