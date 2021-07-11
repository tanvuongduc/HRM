import React, { Component } from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {Slide,AppBar,Toolbar,IconButton,Typography,Button , } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import TodayIcon from '@material-ui/icons/Today';
class calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email :'',
            password: '',
            showPassword: false,
            open: false,
        }
    }
    
    setOpen = () => {
        this.setState({
            open: true,       
        })
    };
    setClose = () => {
        this.setState({
            open: false,
        })
    };
    render(){
        return(
        <div>
            <IconButton color="primary" size="small" onClick={this.setOpen}><TodayIcon/> xem lịch</IconButton>
            <Dialog
                className="Dialog"
                paper
                fullScreen
                maxWidth
                open={this.state.open}
                onClose={this.setClose}
            >
             <AppBar  >
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={this.setClose} aria-label="close">  
                        <CloseIcon />   
                    </IconButton>
                    <Typography variant="h6" >
                        Lịch
                    </Typography>
                </Toolbar>
             </AppBar>
                <Slide direction="up" in={this.state.open}>
                        <DialogContent className="calendar_dialog">
                            <DayPicker
                                numberOfMonths={12}
                                month={new Date(2021, 0)}
                                pagedNavigation
                            />
                        </DialogContent>
                </Slide>
            </Dialog>
        </div>
        );
    }
}
export default calendar;