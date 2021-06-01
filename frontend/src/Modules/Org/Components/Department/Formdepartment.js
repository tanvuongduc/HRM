import React, { Component, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Grid,
  Paper,
  TextField,
  Button,Card,MenuItem 
} from "@material-ui/core";
import Departmentservice from "../../Shared/Departmentservice"
import { withStyles } from '@material-ui/core/styles';
import { ModalNoti, ModalConfirm } from "../../Shared";
const useStyles = (theme) => ({
  form: {
    flexGrow: 1,
    margin: `auto`,
    border :"1px solid #c3c3c3",
    padding :"50px 50px 50px 50px",
    width :"80%"
  },
  title: {
    margin: `auto`,
    padding :"50px 50px 50px 50px",
    width :"80%"
  },
  btn: {
    marginLeft: "auto",
    padding: theme.spacing(3),
  },
  select:{
    width:"100%"
  },
  label:{
    padding: theme.spacing(2),
    margin: `auto`,
  }
})

class formDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [],
      notiMessage: '',
      confirmMessage: '',
      code: "",
      name: "",
      desc: "",
      id_user: "",
      listuser:[],
    }
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    Departmentservice.listUser().then((res) => {
      let data = res.data;
      this.setState({
        listuser: data
      })
    }).catch((err) => {
      this.setState({
        notiMessage: 'Có lỗi vui lòng thử lại !'
      })
      console.log(err);
    });
    if (id!="0") {
      Departmentservice.getDepartmentById(id)
        .then(res => {
          let data = res.data;
          
          this.setState({
            name: data.name,
            code: data.code,
            desc: data.desc,
            id_user: data.pic._id
          });
        }).catch(error => {
          this.setState({
            notiMessage: 'Có lỗi vui lòng thử lại !'
          })
          console.log(error);
      });
    }
    return;
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    let id = this.props.match.params.id;
    if (id !=="0") {
      this.setState({
        confirmMessage: 'Bạn muốn cập nhập thông tin này không ?'
      });
    } else {
      this.setState({
        confirmMessage: 'Bạn muốn thêm mới thành viên này không ?'
      });
    }
  }
  answer = (answer) => {
    let id = this.props.match.params.id;
    let { name , desc, id_user} = this.state;
    let data = {
     name:name,
     desc:desc,
     pic:id_user
  }
  console.log(data);
    if (answer) {
      let method = (id !== "0") ? Departmentservice.editDepartment(id,data) : Departmentservice.postDepartment(data);
      let notiMessage = (id) ? 'Cập nhât thành công' : 'Tạo mới thành công'
      method.then(response => {
        if (response.status === 200) {
          this.setState({
            notiMessage
          });
        }
      });

    }
    else {
      this.setState({
        confirmMessage: ''
      })
    }
  }
  doneAlret = () => {
    if (this.state.notiMessage) {
      window.history.back();
    } else {
      this.setState({ notiMessage: '' })
    }
  }

  render() {
    const { classes } = this.props;
    let { listuser, name, code, desc, id_user } = this.state;
    console.log(listuser);
    let id = this.props.match.params.id
    return (
      <Fragment>
         <ModalConfirm
            message={this.state.confirmMessage}
            answer={this.answer}
          ></ModalConfirm>
          <ModalNoti
            message={this.state.notiMessage}
            done={this.doneAlret}
          ></ModalNoti>
           <div>
            <h2 className={classes.title}>
              {id !== "0" ? "Chỉnh sửa Phòng Ban" : "Thêm mới Phòng Ban"}
            </h2>
          </div>
        <Card className={classes.form} >
          <Grid container >
            <Grid xs="6"  container>
              <Grid xs="4" align="right"  className={classes.label}><strong>Nhập tên phòng ban :</strong></Grid>
              <Grid xs="8"  className={classes.label}>
                <TextField fullWidth id="name" name="name" value={name} onChange={this.onChange}></TextField>
              </Grid>
            </Grid>
            <Grid xs="6" container>
              <Grid xs="4"   className={classes.label} align="right"><strong>Nhập mã phòng ban :</strong></Grid>
              <Grid xs="8"  className={classes.label} >
                <TextField fullWidth id="code" name="code" value={code} onChange={this.onChange}></TextField>
              </Grid>
            </Grid>
            <Grid xs="6" container>
              <Grid xs="4"  className={classes.label}align="right" ><strong>Ghi chú :</strong></Grid>
              <Grid xs="8"  className={classes.label}  >
                <TextField fullWidth id="desc" name="desc" value={desc} onChange={this.onChange}></TextField>
              </Grid>
            </Grid>
            <Grid xs="6" container>
              <Grid xs="4"  className={classes.label} align="right"><strong> Chọn trưởng phòng :</strong></Grid>
              <Grid xs="8" className={classes.label}>
              <TextField
              id="standard-select-currency"
              select
              name="id_user"
              fullWidth
              onChange={this.onChange}
              value={id_user}
             >
              {listuser.map((option,i) => (
            <MenuItem  key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
              </Grid>
            </Grid>
            <div className={classes.btn}>
              <Button variant="contained" color="primary" onClick={this.onSubmit}>
              {id !== "0" ? "Cập nhật" : "Thêm mới"}
              </Button>
            </div>
          </Grid>
        </Card>
      </Fragment>
    );
  }

};
export default withStyles(useStyles)(formDepartment);