import React, { Component, useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Grid,
  Paper,
  TextField,
  Avatar,
  Typography,
  MenuItem,
  Button,FormControl,Select
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ModalConfirm from "../../../../Shared/Components/ModalConfirm/ModalConfirm"
import ModalNoti from "../../../../Shared/Components/ModalNoti/ModalNoti"
import Departmentservice from "../../Shared/Departmentservice"


const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    height: 80,
  },
  h2: {
    textAlign: "right",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  text: {
    textAlign :"right",
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  btn: {
    marginLeft: "auto",
    padding: theme.spacing(3),
  },
}));

const Formdepartment = (props) => {
  let { id } = useParams();
  const classes = useStyles();
  const [Department, setDepartment] = useState({
    name:"",
    code:"",
    pic:"",
    desc:"",

  });
  const [listUser,setUser]= useState([]);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [notiMessage, setNotiMessage] = useState("");
 
useEffect(() => {
    if (id !== "0") {
      fetchDepartment();
      fetchUser();
    }
  }, [])
  console.log(Department);
  const fetchDepartment = async () => {
    let fetchDepartment = await Departmentservice.getDepartmentById(id)
    setDepartment(fetchDepartment.data)
  }

  const fetchUser = async () =>{
    let fetchUser = await Departmentservice.listUser()
    setUser(fetchUser.data)
  }
  // const fetchListDepartment = async () => {
  //   let fetchListDepartment = await Departmentservice.listDepartment()
  //   setlistDepartment(fetchListDepartment.data)
  // }

  
  let User_list = listUser.map((data, i) => {
    return (
      <option value={data.id} key={i}>
        {data.name}
      </option>
    );
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment((Department) => ({ ...Department, [name]: value }));
  }
  const editDepartment = () => {
    const payload = Department
    return Departmentservice.editDepartment(id,payload)
  }
  const postDepartment = () => {
    const payload = Department
    return Departmentservice.postDepartment(payload)
  }


  const handleSubmitForm = () => {
    if (id === "0") {
      postDepartment().then(() => {
            setNotiMessage("Thêm mới !")
        }).catch((err) => {
            console.log(err)
            setNotiMessage("Có lỗi xảy ra, vui lòng thử lại!")
        })

    } else {
        //cap nhat
        setConfirmMessage("Bạn đồng ý sửa ?")
    }
}
const answer = (answer) => {
  if (answer) {
    editDepartment().then(() => {
          setConfirmMessage("")
          setNotiMessage("Bạn đã sửa thành công!")
      }).catch((err) => {
          setNotiMessage("Có lỗi xảy ra, vui lòng thử lại!")
      })

  } else {
      setConfirmMessage("")
  }
}

const done = () => {
  setNotiMessage("")
}

  return (
    <Fragment>
      <ModalConfirm message={confirmMessage} answer={answer}></ModalConfirm>
      <ModalNoti message={notiMessage} done={done}></ModalNoti>
      //test
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap></Typography>
          </Grid>
        </Grid>
      </Paper>
      <div component={Paper}>
        <div>
          <h2 className={classes.h2}>
            {id !== "0" ? "Chỉnh sửa Phòng Ban" : "Thêm mới Phòng Ban"}
          </h2>
        </div>
        <Grid container>
          <Grid xs="6" container>
            <Grid xs="3" className={classes.text}>Nhập tên phòng ban :</Grid>
            <Grid xs="9" className={classes.text}>
              <TextField fullWidth id="name" onChange={handleChange}>{Department.name}</TextField>
            </Grid>
          </Grid>
          <Grid xs="6" container>
            <Grid xs="3" className={classes.text}>Nhập mã phòng ban :</Grid>
            <Grid xs="9" className={classes.text}>
              <TextField fullWidth id="code"   onChange={handleChange} >value={Department.code} </TextField>
            </Grid>
          </Grid>
          <Grid xs="6" container>
            <Grid xs="3" className={classes.text} >Ghi chú :</Grid>
            <Grid xs="9" className={classes.text}>
              <TextField fullWidth id="desc" onChange={handleChange}> value={Department.desc}  </TextField>
            </Grid>
          </Grid>
          <Grid xs="6" container>
            <Grid xs="3" className={classes.text}>Chọn trưởng phòng :</Grid>
            <Grid xs="9" >
              <FormControl>
              <Select
                native
                autoWidth
               id="pic"
                value={Department.pic._id}
                onChange={handleChange}
                // input={<Input id="demo-dialog-native" />}
              > {User_list}
              </Select>
                </FormControl> 
            </Grid>
          </Grid>

          <div className={classes.btn}>
            <Button variant="contained" color="primary" onClick={() => handleSubmitForm()}>
              {id == "0" ? "Thêm mới" : "Sửa"}
            </Button>
          </div>
        </Grid>
      </div>
    </Fragment>
  );
};
export default Formdepartment;
