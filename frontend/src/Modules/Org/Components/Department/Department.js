import React, { Component, useState, useEffect, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import {TableRow,Button } from "@material-ui/core";
import { CallMissedSharp, Delete} from '@material-ui/icons';
import Departmentservice from "../../Shared/Departmentservice"
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    height: 80,
  },
  btn: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    float :"right",
  },

  text: {
    textAlign: "center",
  },
  table: {
    maxWidth: 1000,
    flexGrow: 1,
    margin: `${theme.spacing(1)}px auto`,
  },
}));



const Department = (props) => {
  const classes = useStyles();  
  const [confirmMessage, setConfirmMessage] = useState("");
  const [notiMessage, setNotiMessage] = useState("");
  const [listDepartment,setlistDepartment]=useState([])
  

  useEffect(() => {
      fetchListDepartment();
  }, [])
  const fetchListDepartment = async () => {
    let fetchListDepartment = await Departmentservice.listDepartment()
    setlistDepartment(fetchListDepartment.data)
  }
  return (
    <Fragment>
      //test
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap></Typography>
          </Grid>
        </Grid>
      </Paper>
          <div><h2 className={classes.text}>Danh sách phòng ban</h2></div>  
          <TableContainer classes={classes.table}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> <strong>Mã phòng ban</strong></TableCell>
                  <TableCell align="right"> <strong>Tên phòng ban</strong></TableCell>
                  <TableCell align="right"><strong>Trưởng phòng</strong></TableCell>
                  <TableCell align="right"><strong>Chú thích</strong></TableCell>
                  <TableCell ><div className={classes.btn}><Button size="small" variant="contained" color="primary" href="./department/0">Thêm mới</Button></div></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {listDepartment.map((item,i) =>( 
                 <TableRow>
                 <TableCell component="th" scope="row">
                   {item.code}
                 </TableCell>
                 <TableCell align="right">{item.name}</TableCell>
                 <TableCell align="right">{item.pic.name}</TableCell>
                 <TableCell align="right">{item.desc}</TableCell>
                 <TableCell >
                   <div className={classes.btn}>
                    <Link to={`department/${item.id}`}>
                      <Button size="small" variant="contained" color="primary" >Sửa</Button>
                    </Link>
                   </div>
                   <div className={classes.btn}>
                   <Button variant="contained" color="secondary" size="small" startIcon={<Delete />}>Xóa</Button>
                   </div>
                 </TableCell>
               </TableRow>
              ))}
        
              </TableBody>
            </Table>
          </TableContainer>
    </Fragment>
  );
};
export default Department;
