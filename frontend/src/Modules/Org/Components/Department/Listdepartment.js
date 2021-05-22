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
import { Delete} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    height: 80,
  },
  btn_add: {
    margin: `${theme.spacing(1)}px auto`,
    marginLeft:600,
  },
  btn_update:{
    margin: `${theme.spacing(1)}px auto`,
    marginLeft:2,
  },
  text: {
    textAlign: "center",
  },
  table: {
    flexGrow: 1,
    margin: `${theme.spacing(1)}px auto`,
  },
}));

const Listdepartment = (props) => {
  const classes = useStyles();
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

      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <h2 className={classes.text}>Danh sách phòng ban</h2>
            <Button className={classes.btn_add} size="small" variant="contained" color="primary" href="./department/0">Thêm mới</Button>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> <strong>Mã phòng ban</strong></TableCell>
                  <TableCell align="right"> <strong>Tên phòng ban</strong></TableCell>
                  <TableCell align="right"><strong>Loại</strong></TableCell>
                  <TableCell align="right"><strong>Chú thích</strong></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    adsfasdf
                  </TableCell>
                  <TableCell align="right">ấdfasd</TableCell>
                  <TableCell align="right">ádfasdf</TableCell>
                  <TableCell align="right">adsasdfasdfad</TableCell>
                  <TableCell>
                    <Button className={classes.btn_update} size="small" variant="contained" color="primary" href="./department/12312312">Sửa</Button>
                    <Button className={classes.btn_update} variant="contained" color="secondary"  size="small"  startIcon={<Delete />} >
                      Xóa
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Fragment>
  );
};
export default Listdepartment;
