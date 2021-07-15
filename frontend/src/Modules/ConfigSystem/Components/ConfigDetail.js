import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Grid ,TextField,Input,InputLabel ,FormControl,Typography,InputAdornment} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import TodayIcon from '@material-ui/icons/Today';
import Calendar from './Calendar';
import WeeklySchedule from './WeeklySchedule';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
  } from '@material-ui/pickers';
class ConfigDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email :'',
            password: '',
            showPassword: false,
            selectedDate:new Date('2014-08-18T21:11:54'),
        }
    }
    handleClickShowPassword = () => {
        this.setState({
            showPassword:!this.state.showPassword
        })
    };
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    handleDateChange = (date) => {
       this.setState({selectedDate:date})
       console.log(this.state.selectedDate);
      };

render() {
    console.log(this.state.selectedDate);
  return (
    <div>
        <Typography variant="h4" gutterBottom>
            Cấu hình hệ thống
        </Typography>
        <Card>
        <CardContent className="CardContent">
            <Grid container direction>
                <Grid direction >
                    <Typography variant="h6" className="title_Typography" >
                       <EmailIcon/> Email hỗ trợ 
                    </Typography>
                </Grid>
                <Grid container className="email_system">
                    <Grid xs="4" className="email">
                        <FormControl fullWidth>
                            <InputLabel className="title-input" htmlFor="standard-adornment-Email">Email</InputLabel>
                            <Input
                                className="input"
                                value={this.state.email}
                                onChange={(e)=>{this.handleChange(e)}}
                                name="email"
                            />
                        </FormControl>
                    </Grid>
                    <Grid xs="4" className="password" >
                        <FormControl fullWidth>
                            <InputLabel className="title-input" htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                className="input"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={(e)=>{this.handleChange(e)}}
                                name="password"
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                    onMouseDown={this.handleMouseDownPassword}
                                    >
                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            <Grid direction container >
                <Grid direction container >
                    <Grid xs="4">
                        <Typography variant="h6" className="title_Typography" >
                            Loại ngày nghỉ 
                        </Typography>
                    </Grid>
                    <Grid xs="4">
                        <Typography variant="h6" className="title_Typography" >
                           Ngày nghỉ tối đa
                        </Typography>
                    </Grid>
                </Grid> 
                <Grid container className="holiday">
                        <Grid xs="4" className="type_holiday">
                            <FormControl fullWidth>
                                <InputLabel className="title-input" htmlFor="standard-adornment-Email">Nhập</InputLabel>
                                <Input
                                    className="input"
                                    // value={this.state.email}
                                    // onChange={(e)=>{this.handleChange(e)}}
                                    // name="email"
                                />
                            </FormControl>
                        </Grid>
                        <Grid xs="4" className="type_holiday">
                            <FormControl fullWidth>
                                <InputLabel className="title-input" htmlFor="standard-adornment-Email">Nhập</InputLabel>
                                <Input
                                    className="input"
                                    // value={this.state.email}
                                    // onChange={(e)=>{this.handleChange(e)}}
                                    // name="email"
                                />
                            </FormControl>
                        </Grid>
                </Grid>
            </Grid>
            <Grid direction container >
                <Typography variant="h6" className="title_Typography" >
                Các ngày lễ trong năm 
                <Calendar/>
                </Typography>  
            </Grid>
            <Grid direction container >
                <Typography variant="h6" className="title_Typography" >
                  Ngày làm chính quy 
                </Typography>
            </Grid>
           <Grid direction container >
           <Grid direction container xs="6">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                        <div className="KeyboardTimePicker">
                            <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Ca sáng"
                            value={this.state.selectedDate}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            />
                        </div>
                        <div className="KeyboardTimePicker">
                            <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Ca chiều"
                            value={this.state.selectedDate}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            />
                        </div>
                    </Grid>
                    </MuiPickersUtilsProvider>
            </Grid>
            <Grid direction container xs="6">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justifyContent="space-around">
                        <div className="KeyboardTimePicker">
                            <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Ca sáng"
                            value={this.state.selectedDate}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            />
                        </div>
                        <div className="KeyboardTimePicker">
                            <KeyboardTimePicker
                            margin="normal"
                            id="time-picker"
                            label="Ca chiều"
                            value={this.state.selectedDate}
                            onChange={this.handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            />
                        </div>
                    </Grid>
                    </MuiPickersUtilsProvider>
            </Grid>
           </Grid>
            <Grid direction container >
               <WeeklySchedule/>
            </Grid>
        </CardContent>
        </Card>
    </div>
    );
  }
}
export default ConfigDetail;