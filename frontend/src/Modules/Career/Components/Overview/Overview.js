import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import{ Paper,Button }from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Component } from 'react';
import Popover from '@material-ui/core/Popover';
import FormCareer from '../../Detail/FormCareer';
import form from '../../../../Shared/Components/Form/Form'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

class Overview extends form{
    constructor(props) {
        super(props);
        this.state= {
            anchorEl:false,
            form:this._getInitFormData({
                name :"",
                certNo :"",
                reciveAt :"",
                org :"",
                classification :"",
                major :"",
                note :"",
                degree :"",
                docs :"",
                status :"",
            }),
        }
    }



    handleClick = (ev) => {
        let events = ev.currentTarget
        console.log(events);
        this.setState({anchorEl:events})
      };
    handleClose = () => {
        this.setState({
            anchorEl:false
        })
      };
    open = () =>{
        Boolean(anchorEl)  
    }
    id =()=>{
        this.open ? 'simple-popover' : false;
    }
    render(){
        return (
            <Container maxWidth="md" style={{ paddingTop: '100px' }}>
                  <div className="btn-addNew">
                    <Button aria-describedby={this.id} variant="contained" color="primary" onClick={this.handleClick}>
                        Thêm mới 
                    </Button>
                    <Popover
                        open={this.state.anchorEl}
                        anchorEl={this.state.anchorEl}
                        onClose={this.handleClose}
                        anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                    >
                        <Typography> <FormCareer/></Typography>
                    </Popover>
                </div>
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">9:30 am </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className="paper">
                                <Typography variant="h6" component="h1"> Eat</Typography>
                                <Typography>Because you need strength</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="body2" color="textSecondary">10:00 am</Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot >
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className="paper">
                                <Typography variant="h6" component="h1">Code</Typography>
                                <Typography>Because it&apos;s awesome!</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot >
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className="paper">
                                <Typography variant="h6" component="h1">Sleep</Typography>
                                <Typography>Because you need rest</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
    
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot >
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={3} className="paper">
                                <Typography variant="h6" component="h1">Repeat</Typography>
                                <Typography>Because this is the life you love!</Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Container>
        ) 
    }
}

export default Overview;
