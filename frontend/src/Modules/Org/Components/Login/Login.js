import {
    Button,
  Card,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@material-ui/core";
import React, { Fragment } from "react";
import { withRouter } from "react-router";
import { AuthService, Form, ModalNoti } from "../../Shared";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { AccountCircle, Visibility, VisibilityOff } from "@material-ui/icons";
import LockIcon from "@material-ui/icons/Lock";
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
class Login extends Form {
  constructor(props) {
    super(props);
    this.state = {
      notiMessage: "",
      form: this._getInitFormData({ username: "", password: "" }),
      showPassword: false
    };
  }

  login() {
    const { username, password } = this.state.form;
    this._validateForm();
    this.state.form["dirty"] = true;
    if(this._isFormValid()) {
      AuthService.login(username.value, password.value)
      .then((res) => {
        window.localStorage.setItem("token", res.access_token);
        AuthService.getUserInfo()
          .then((_res) => {
            let user = _res.id;
            window.localStorage.setItem("userId", JSON.stringify(user));
            AuthService.userInfo = user;
            this.goTo("app");
          })
          .catch((err) => {
            console.log("Err", err);
            this.setState({
              notiMessage:
                "Có lỗi xảy ra trong lúc lấy thông tin người dùng, xin thử lại sau!",
            });
          });
      })
      .catch((err) => {
        console.log("Err", err);
        this.setState({
          notiMessage: "Có lỗi xảy ra trong lúc đăng nhập, xin thử lại sau!",
        });
      });
    }
    
    
  }

  goTo(url = "") {
    url = window.location.origin + "/" + url;
    window.location.replace(url);
  }

  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  render() {
    const { username, password, dirty } = this.state.form;
    const { showPassword } = this.state;
    const classes = this.props;
    return (
      <div className="login-page">
        <Card className="loginCard">
            <div className="header">
                <SendIcon className="send-icon"/>
            </div>
          <h2>HRM LOGIN</h2>

          <FormControl className="form-input">
            <InputLabel
              className="title-input"
              htmlFor="input-with-icon-adornment"
            >
              Tài khoản
            </InputLabel>
            <Input
              type="email"
              className="input"
              id="input-with-icon-adornment"
              value={username.value}
              name="username"
              placeholder="Nhập tài khoản"
              onChange={(ev) => this._setValue(ev, "username")}
              required
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
            <span className="validate-noti">{username.err.valueOf("*") && dirty === true ? "Vui lòng nhập tài khoản" : ""}</span>
          </FormControl>
          <FormControl className="form-input">
            <InputLabel
              className="title-input"
              htmlFor="input-with-icon-adornment"
            >
              Mật khẩu
            </InputLabel>
            <Input
              type={showPassword ? "text" : "password"}
              className="input"
              id="input-with-icon-adornment"
              value={password.value}
              name="password"
              placeholder="Nhập mật khẩu"
              onChange={(ev) => this._setValue(ev, "password")}
              required
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>            
              }
              endAdornment={
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              }
            />
            <span className="validate-noti">{password.err.valueOf("*") && dirty === true ? "Vui lòng nhập mật khẩu" : ""}</span>

          </FormControl>
          
          <div className="btn-control-box">
            <Button className="btn-control-primary" onClick={() => this.login()} variant="contained" color="primary">
              Đăng nhập
            </Button>
          </div>
          <ModalNoti
            message={this.state.notiMessage}
            done={() => this.setState({ notiMessage: "" })}
          ></ModalNoti>
        </Card>
      </div>
    );
  }
}

export default withStyles(useStyles)(withRouter(Login));
