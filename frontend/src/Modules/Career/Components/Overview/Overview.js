import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import{ Paper,Button,Typography }from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormCareer from '../../Detail/FormCareer';
import form from '../../../../Shared/Components/Form/Form';

class Overview extends Component{
    constructor(props) {
        super(props);
        this.state= {
            anchorEl:false,
            open :false,
        }
    }

    handleClickOpen = () => {
       this.setState({
           open:true,
       })
      };
    
    handleClose = () => {
        this.setState({
            open:false,
        })
      };
    render(){
        let idUser ="60b9aab51f194c0c78c9932b";
        let indexOfCert=1;
        
        return (
            <Container maxWidth="md" style={{ paddingTop: '100px' }}>
           
            {/* Dialog */}
                <div>
                    <div className ="btn-addNew">
                    <Button variant="contained" color="primary" size="small"  onClick={this.handleClickOpen}>
                        Thêm mới
                    </Button>
                    </div>
                    <Dialog
                         className="Dialog"
                        paper
                        open={this.state.open}
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogContent>
                          <FormCareer idUser={idUser} indexOfCert={indexOfCert}/>
                        </DialogContent>

                    </Dialog>
                </div>
                {/*  */}
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
