import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import { Switch } from "react-router";
import { Http } from "../../../../../Helper/Http";
import "./ManagementEditInfo.scss";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CakeIcon from "@material-ui/icons/Cake";
import HomeIcon from "@material-ui/icons/Home";
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

class ManagementEditInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: {
        id: "",
        name: "",
        birthday: "",
        adress: "",
        certificate: "",
        phone: "",
        email: "",
        status: "",
        socialNetwork: [],
        teams: [],
        bank: {
          bankName: "",
          bankNumber: "",
        },
        onEditInfo: false,
      },
    };
  }

  componentDidMount = async () => {
    const { userId } = this.props;
    const res = await Http.get("users/user?id=" + userId);
    this.setState({
      dataUser: res.data,
    });
    console.log("Data user", res.data);
  };

  onEditInfo = () => {
    this.setState({
      onEditInfo: !this.state.onEditInfo,
    });
  };

  onSaveEditUserInfo = async () => {
    const { dataUser } = this.state;
    const { userId } = this.props;
    const req = await Http.patch("users/" + userId, dataUser);
  };

  render() {
    const { dataUser, onEditInfo } = this.state;
    const bank = Object.assign({}, dataUser.bank);
    const birthday = new Date(dataUser.birthday);
    const month = birthday.getMonth();
    const year = birthday.getFullYear();
    const day = birthday.getDate();
    const birthdayConvert =
      year +
      "-" +
      (month < 10 ? "0" + month : month) +
      "-" +
      (day < 10 ? "0" + day : day);

    let linkFacebook = "";
    dataUser.socialNetwork.forEach((account) => {
      if (account.title === "facebook") {
        linkFacebook = account.link;
      }
    });
    console.log("birthday", birthdayConvert, typeof birthdayConvert);
    console.log("Team", dataUser.teams);

    const styleButton = onEditInfo
      ? "btn-control-default"
      : "btn-control-primary";

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
            {onEditInfo ? "Cancel editing" : "Edit"}
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
                  Username
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  name="name"
                  value={dataUser.name}
                  onChange={this.onChangeInputValue}
                  readOnly={!onEditInfo}
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className="form-input">
                <InputLabel
                  className="title-input"
                  htmlFor="input-with-icon-adornment"
                >
                  Birthday
                </InputLabel>
                <Input
                  type="date"
                  className="input"
                  id="input-with-icon-adornment"
                  name="birthday"
                  onChange={this.onChangeInputValue}
                  value={birthdayConvert}
                  readOnly={!onEditInfo}
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
                  Address
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  name="address"
                  onChange={this.onChangeInputValue}
                  value={dataUser.adress}
                  disarbled={!onEditInfo}
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
                  Certificate
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  name="certificate"
                  onChange={this.onChangeInputValue}
                  value={dataUser.certificate}
                  readOnly={!onEditInfo}
                  startAdornment={
                    <InputAdornment position="start">
                      <CardMembershipIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className="form-input">
                <InputLabel className="title-input">Team</InputLabel>
                <Select
                  readOnly={!onEditInfo}
                  id="demo-simple-select"
                  value={dataUser.teams}
                  startAdornment={
                    <InputAdornment position="start">
                      <GroupIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem value={10}>Developer</MenuItem>
                  <MenuItem value={20}>...</MenuItem>
                  <MenuItem value={30}>...</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-sm-4">
              <FormControl className="form-input">
                <InputLabel
                  className="title-input"
                  htmlFor="input-with-icon-adornment"
                >
                  Phone number
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  name="phone"
                  onChange={this.onChangeInputValue}
                  value={dataUser.phone}
                  readOnly={!onEditInfo}
                  startAdornment={
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className="form-input">
                <InputLabel
                  className="title-input"
                  htmlFor="input-with-icon-adornment"
                >
                  Email
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  name="email"
                  onChange={this.onChangeInputValue}
                  value={dataUser.email}
                  readOnly={!onEditInfo}
                  startAdornment={
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  }
                />
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
                  value={linkFacebook}
                  startAdornment={
                    <InputAdornment position="start">
                      <FacebookIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className="form-input">
                <InputLabel className="title-input">Status</InputLabel>
                <Select
                  readOnly={!onEditInfo}
                  id="demo-simple-select"
                  value={dataUser.status}
                  startAdornment={
                    <InputAdornment position="start">
                      <HowToRegIcon />
                    </InputAdornment>
                  }
                >
                  <MenuItem value={dataUser.status}>Pending</MenuItem>
                  <MenuItem value={20}>...</MenuItem>
                  <MenuItem value={30}>...</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-sm-4">
              <FormControl className="form-input">
                <InputLabel
                  className="title-input"
                  htmlFor="input-with-icon-adornment"
                >
                  Bank Name
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  name="bankName"
                  onChange={this.onChangeInputValue}
                  value={bank.bankName}
                  readOnly={!onEditInfo}
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountBalanceIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className="form-input">
                <InputLabel
                  className="title-input"
                  htmlFor="input-with-icon-adornment"
                >
                  Bank Account Holder
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  name="ownName"
                  onChange={this.onChangeInputValue}
                  value={bank.ownName}
                  readOnly={!onEditInfo}
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountBoxIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl className="form-input">
                <InputLabel
                  className="title-input"
                  htmlFor="input-with-icon-adornment"
                >
                  Bank Account Number
                </InputLabel>
                <Input
                  className="input"
                  id="input-with-icon-adornment"
                  name="bankNumber"
                  onChange={this.onChangeInputValue}
                  value={bank.bankNumber}
                  readOnly={!onEditInfo}
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountBoxIcon />
                    </InputAdornment>
                  }
                />
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
            Close
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="btn-control-primary"
            onClick={this.onSaveEditUserInfo}
          >
            Save Change
          </Button>
        </div>
      </Card>
    );
  }
}

export default ManagementEditInfo;
