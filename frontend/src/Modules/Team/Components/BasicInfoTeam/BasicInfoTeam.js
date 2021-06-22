import React, { Component } from "react";
import "./BasicInfoTeam.scss";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";
import TeamService from "../../Shared/TeamService";



const useStyles = (theme) => ({
  BasicInfoTeam: {
    magin: `${theme.spacing(1)}px auto`,
    padding: "10px 10px 10px 10px",
  },
  content: {
    padding: theme.spacing(1),
    height: "70px",
  },
  btn: {
    padding: theme.spacing(1),
    marginRight: `auto`,
    float: "right"
  },
});

class BasicInfoTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listDepartment: [],
      listUser: [],
 
       
    };
  }
  componentDidMount = () => {
    this.getAllUser();
    this.getAllDepartmnet();
  };


  getAllUser =() => {
    TeamService.getListUser().then((res) => {
      let members = res.data;
      this.setState({
        listUser: members,
      });
    });
  }
  getAllDepartmnet=() =>{
    TeamService.getListDepartment().then((res) => {
      let departments = res.data;
      this.setState({
        listDepartment: departments,
      });
    });
  }
  render() {
    const { classes } = this.props;
    let { quantity } = this.props;
    let { _setValue, idTeam, onSubmit,_setValueNotCheck ,data} = this.props;
    let { listDepartment, listUser} = this.state;
    let _date = data.createAt.value.slice(0, 10);
    let i =  _date.slice(5)
    let mon = "tháng" +" "+i.slice(0,2)+" "
    let year ="năm" +" "+ _date.slice(0,4)
    let day= "Ngày" +" "+ _date.slice(8)+" "
    let fullDate=day+mon+year
   
    return (
      <Card className={classes.BasicInfoTeam}>
        <Grid container className={classes.BasicInfoTeam}>
          <Grid container item xs={6}>
            <Grid item xs={3} align="right" className={classes.content}>
              <strong>Tên nhóm  :</strong>
            </Grid>
            <Grid item xs={9} className={classes.content}>
              <TextField
                fullWidth
                value={data.name.value}
                onChange={(ev) => {_setValue(ev,"name")}}
              ></TextField>
            </Grid>
            <Grid item xs={3} align="right" className={classes.content}><strong>Mã Nhóm  :</strong></Grid>
            <Grid item xs={9} className={classes.content}>
            <TextField
                fullWidth
                id="code"
                name="code"
                value={data.code.value}
                onChange={(ev) => _setValue(ev, "code")}
              ></TextField>
            </Grid>
            <Grid item xs={3} align="right" className={classes.content}>
              <strong>Sologan  :</strong>
            </Grid>
            <Grid item xs={9} className={classes.content}>
              <TextField
                fullWidth
                id="sologan"
                name="sologan"
                value={data.sologan.value}
                onChange={(ev) => _setValue(ev, "sologan")}
              ></TextField>
            </Grid>
            <Grid item xs={3} align="right" className={classes.content}>
              <strong>Mục tiêu  :</strong>
            </Grid>
            <Grid item xs={9} className={classes.content}>
              <TextField
                fullWidth
                id="achievements"
                name="achievements"
                value={data.achievements.value}
                onChange={(ev) => _setValue(ev, "achievements")}
              ></TextField>
            </Grid>
           
          </Grid>
          <Grid container item xs={6}>
          <Grid item xs={3} align="right" className={classes.content}>
              <strong>Nhóm trưởng  :</strong>
            </Grid>
            <Grid item xs={9} className={classes.content}>
              <TextField
                id="pic"
                name="pic"
                select
                fullWidth
                onChange={(ev) => _setValueNotCheck(ev,"pic")}
                value={data.pic.value}
              >
                {listUser.map((option, i) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3} align="right" className={classes.content}>
              <strong>Phòng ban  :</strong>
            </Grid>
            <Grid item xs={9} className={classes.content}>
              <TextField
              id="department"
              name="department"
                fullWidth
                select
                onChange={(ev) => _setValueNotCheck(ev, "department")}
                value={data.department.value}
              >
                {listDepartment.map((option, i) => (
                  <MenuItem key={option.id} value={option.id}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={3} align="right" className={classes.content}>
              <strong>Số thành viên  :</strong>
            </Grid>
            <Grid item xs={9} className={classes.content}>
              {quantity}
            </Grid>
            <Grid item xs={3} align="right" className={classes.content}>
              <strong>Ngày tạo  :</strong>
            </Grid>
            <Grid item xs={9} className={classes.content}>
              {fullDate}
            </Grid>
          </Grid>
          <Grid>
            <Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
            <div className={classes.btn}>
            <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                    onSubmit();
                    }}
                > 
                  {idTeam !== "0" ? "Cập nhật" : "Thêm mới" }
              </Button>
            </div>

        </Grid>
             
      </Card>
    );
  }
}
export default withStyles(useStyles)(BasicInfoTeam);
