import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Person from "@material-ui/icons/Person";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ChatBubble from "@material-ui/icons/ChatBubble";
import { Redirect, withRouter } from "react-router-dom";
import Sidebar2 from "../Sidebar2/Sidebar2";
import "../AppHeader.scss";
import { Component } from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import UserService from "../../../../Modules/User/Shared/UserService";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = (theme) => ({
  iconBackground: {
    color: "secondary",
    borderTopLeftRadius: 5,
    borderRadius: 5,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },

  grow: {
    zIndex: "100",
    flexGrow: 1,
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    overflow: "visible",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "80%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      marginRight: "3.5em",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  iconDehaze: {
    cursor: "pointer",
  },

  dehazaButton: {
    marginLeft: "-10px",
  },

  username: {
    fontSize: "18px",
    marginLeft: "5px",
    fontWeight: "500",
  },

  textMenuItem: {
    marginLeft: "-20px"
  }
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSideBar: false,
      userLogin: {},
      anchorEl: null,
    };
  }

  componentDidMount = async () => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    await UserService.getMyInfo(userId).then((res) => {
      this.setState({
        userLogin: res.data,
      });
    });
  };

  setOpenSideBar = () => {
    this.setState({
      openSideBar: !this.state.openSideBar,
    });
    this.props.showSideBar();
  };

  handleClose =  () => {
    this.setState({
      anchorEl: null
    });
  }

  handleClick =  (event) => {
     this.setState({
      anchorEl: event.currentTarget
    });
  }

  goTo(url = "") {
    url = window.location.origin + "/" + url;
    window.location.replace(url);
  }

  logOut = () => {
    localStorage.clear();
    this.goTo("login");
  }
  


  render() {
    const { classes } = this.props;
    const { userLogin, anchorEl } = this.state;
    const menuId = "primary-search-account-menu";
    const mobileMenuId = "primary-search-account-menu-mobile";
    return (
      <div className={classes.grow}>
        <AppBar position="static" className="app-bar">
          <Toolbar>
            <Sidebar2 openSideBar={this.state.openSideBar} />
            <IconButton color="inherit" className={classes.dehazaButton}>
              <DehazeIcon
                className={classes.iconDehaze}
                onClick={this.setOpenSideBar}
              />
            </IconButton>

            <Typography className={classes.title} variant="h6" noWrap>
              HRM
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit" className={classes.iconBackground}>
                <Badge badgeContent={0} color="secondary">
                  <ChatBubble />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 4 new mails"
                color="inherit"
                className={classes.iconBackground}
              >
                <Badge badgeContent={0} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                className={classes.iconBackground}
              >
                <Badge badgeContent={0} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="customized-menu"
                aria-haspopup="true"
                color="inherit"
                className={classes.iconBackground}
                onClick={this.handleClick}
              >
                <Person />
                <div className={classes.username}>
                  <span>{userLogin.name}</span>
                </div>
              </IconButton>
              <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <StyledMenuItem onClick={() => this.goTo("app/user")}>
                    <ListItemIcon>
                    <AccountBoxIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Thông tin cá nhân" className={classes.textMenuItem} />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={this.logOut}>
                    <ListItemIcon>
                      <ExitToAppIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Đăng xuất" className={classes.textMenuItem} />
                  </StyledMenuItem>
                </StyledMenu>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                backgroundColor="chocolate"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(AppHeader);
