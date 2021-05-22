import React, { Component, useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom"
import {Grid,Paper,TextField,Avatar,Typography,MenuItem,Button}  from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { ClassSharp } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        height: 80,
      },
    h2:{
        textAlign:"center"
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
    text: {
        textAlign: "right",
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
    btn :{
        margin: `${theme.spacing(1)}px auto`,
    }
}));

const Formdepartment = (props) => {
    let { id } = useParams();
    const classes = useStyles();
    const item =["item1","item2"]
    return(
        <Fragment>

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

      <div>
      <h2 className={classes.h2}>{id !== "0" ? "Chỉnh sửa Phòng Ban" : "Thêm mới Phòng Ban"}</h2>
        <Grid container > 
            <Grid item xs={3}></Grid>
            <Grid className={classes.root} container item xs={6} component={Paper}>
                  <Grid item xs={5} className={classes.text}><strong>Tên phòng ban :</strong></Grid>
                  <Grid item xs={7}><TextField   id="name" label="mời nhập"></TextField></Grid>
                  <Grid item xs={5} className={classes.text}><strong>Mã phòng ban :</strong></Grid>
                  <Grid item xs={7} ><TextField  id="code" label="mời nhập"></TextField></Grid>
                  <Grid item xs={5} className={classes.text}><strong>Chọn loại phòng ban :</strong></Grid>
                  <Grid item xs={7}>
                  <TextField
            
                  id="standard-select-currency"
                  select
                  label="chọn"
                  helperText="hãy chọn một loại phòng ban"
                  >
                       {item.map((option) => (
                       <MenuItem key={option} value={option}>
                       {option}
                        </MenuItem>
                       ))}
                  </TextField>
                  </Grid>
                  <Grid item xs={5} className={classes.text}><strong>Ghi chú :</strong></Grid>
                  <Grid item xs={7}><TextField  id="description" label="mời nhập"></TextField></Grid>
                  <Grid item xs={9}></Grid>
                  <Grid item xs={3}><Button className={classes.btn} variant="contained" color="primary">{id == "0" ? "Thêm mới" : "Sửa"}</Button></Grid>
            </Grid>
            <Grid item xs={3}></Grid>
        </Grid>
      </div>
    </Fragment>
    );
};
export default Formdepartment;