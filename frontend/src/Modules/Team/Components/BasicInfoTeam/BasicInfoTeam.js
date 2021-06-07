import React, { Component } from 'react';
import './BasicInfoTeam.scss';
import { withStyles } from '@material-ui/core/styles';
import { Card, Container, Grid, TextField,Button ,MenuItem} from '@material-ui/core';
import TeamService from "../../Shared/TeamService";

const useStyles = (theme) => ({
    BasicInfoTeam:{
     magin:`${theme.spacing(1)}px auto`,
     padding:"10px 10px 10px 10px"
    },
    content:{
        padding: theme.spacing(1),
        height :"70px",
    },
  });

class BasicInfoTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           listDepartment:[],
           listUser:[],
        }
    }
    componentDidMount = () => {
       this.getAllUser()
       this.getAllDepartmnet()
    }
    getAllUser() {
        TeamService.getListUser().then(res => { 
          let members = res.data;
          this.setState({
            listUser:members
          })
        });
    }
    getAllDepartmnet(){
        TeamService.getListDepartment().then(res => { 
            let departments = res.data;
            this.setState({
                listDepartment:departments
            })
          });
    }
 
    render() {
        const { classes } = this.props;
        let { data,quantity } = this.props;
        let { _setValue,idTeam,onSubmit} = this.props;
        let {listDepartment,listUser} =this.state
        return (
            <Card className={classes.BasicInfoTeam}>
                <Grid container  className={classes.BasicInfoTeam}>
                    <Grid container item  xs={6}>
                        <Grid item xs={3} className={classes.content}><strong>Tên nhóm</strong></Grid>
                        <Grid item xs={9} className={classes.content}><TextField fullWidth id="name" name="name" value={data.name} onChange={(ev) =>_setValue(ev,'name')}></TextField></Grid>
                        <Grid item xs={3} className={classes.content}><strong> Sologan</strong></Grid>
                        <Grid item xs={9} className={classes.content}><TextField fullWidth id="sologan" name="sologan" value={data.sologan} onChange={(ev) =>_setValue(ev,'sologan')}></TextField></Grid>
                        <Grid item xs={3} className={classes.content}><strong>Nhóm trưởng</strong></Grid>
                        <Grid item xs={9} className={classes.content}>
                            <TextField id="pic" name="pic" select fullWidth onChange={(ev) =>_setValue(ev,'pic')}  value={data.pic} >
                            {listUser.map((option,i) => (
                                <MenuItem  key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={3} className={classes.content}></Grid>
                        <Grid item xs={9} className={classes.content}></Grid>
                    </Grid>
                    <Grid container item  xs={6} >
                        <Grid item xs={3} className={classes.content}><strong>Phòng ban</strong></Grid>
                        <Grid item xs={9} className={classes.content}>
                            <TextField fullWidth select onChange={(ev) =>_setValue(ev,'department')} value={data.department}>
                            {listDepartment.map((option,i) => (
                                <MenuItem  key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={3} className={classes.content}><strong>Mục tiêu</strong></Grid>
                        <Grid item xs={9} className={classes.content}><TextField fullWidth id="achievements" name="achievements" value={data.achievements} onChange={(ev) =>_setValue(ev,'achievements')}></TextField></Grid>
                        <Grid item xs={3} className={classes.content}><strong>Số thành viên</strong></Grid>
                        <Grid item xs={9} className={classes.content}>{quantity}</Grid>
                        <Grid item xs={3} className={classes.content}><strong>Ngày tạo</strong></Grid>
                        <Grid item xs={9} className={classes.content}>{data.createAt}</Grid>
                    </Grid>
                    <Grid> 
                      <div className={classes.btn}>
                        <Button variant="contained" color="primary" onClick={()=>{onSubmit()}}>
                            {idTeam !== "0" ? "Cập nhật" : "Thêm mới"}
                        </Button>
                      </div>
                    </Grid>
                </Grid>
            </Card>
        );
    }
}
export default withStyles(useStyles)(BasicInfoTeam);