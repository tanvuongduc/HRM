import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CareerService from '../../Shared/CareerService'
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper, Button, Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormCareer from '../../Detail/FormCareer';
import _FormCareer from '../../Detail/FormCareer';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TodayIcon from '@material-ui/icons/Today';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: false,
            open: false,
            careers: [],
            sliceNumber: 2,
            userId: '60b9aab51f194c0c78c9932b',
            indexOfCert: ""
        }
    }
    componentDidMount() {
        let careerArr = []
        careerArr.push(CareerService.getUserById(this.state.userId))
        Promise.all(careerArr).then(([res]) => {
            let careers = res.data.certificates
            this.setState({
                careers
            })
        })
    }
    showMore = () => {
        const { sliceNumber } = this.state
        this.setState({
            sliceNumber: sliceNumber + 2
        })
    }

    setOpen = (index) => {
        this.setState({
            open: true,
            indexOfCert:index
        })
    };
    setClose = (i) => {
        this.setState({
            open: false,
        })
    };
    //


    color = (index) => {
        if (index % 3 == 1) { return "primary" }
        else if (index % 3 == 2) { return "inherit" }
        else { return "grey" }
    }
    render() {
        let idUser = "  ";
        let { careers, sliceNumber, indexOfCert } = this.state
        let _index = "-1"
        console.log(this.state.indexOfCert);
        return (
            <Container maxWidth="md" style={{ paddingTop: '100px' }}>

                {/* Dialog */}
                <div>
                    <div className="btn-addNew">
                        <Button variant="contained" color="primary" size="small" onClick={() => { this.setOpen(_index) }}>
                            Thêm mới
                        </Button>
                    </div>
                    <Dialog
                        className="Dialog"
                        paper
                        fullScreen
                        keepMounted
                        open={this.state.open}
                        onClose={this.setClose_addNew}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                         <AppBar  >
                            <Toolbar>
                                <IconButton edge="start" color="inherit" onClick={this.setClose} aria-label="close">
                                <CloseIcon />
                                </IconButton>
                                <Typography variant="h6" >
                                Thông tin chi tiết
                                </Typography>
                            </Toolbar>
                            </AppBar>
                        <Button color="inherit" onClick={() => { this.setClose() }}>
                                            111111111121
                        </Button>
                        <Slide direction="up" in={this.state.open}>
                           
                                <DialogContent>
                                    <FormCareer idUser={idUser} indexOfCert={indexOfCert} />
                                </DialogContent>
   
                        </Slide>
                    </Dialog>
                </div>
                {/*  */}
                <div className="carrer-timeline">
                    <Timeline align="alternate">
                     {careers.slice(0, sliceNumber).map((row, index) => (
                        <TimelineItem key={row.id}>
                            <TimelineOppositeContent>
                                <Typography color="textSecondary">{row.recivedAt}</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color={this.color(index)}>
                                    <TodayIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper className="TimelineContent" Container onClick={() => { this.setOpen(index) }}>

                                    <Typography variant="h6" component="h1">{row.name}</Typography>
                                    <Typography>{row.certNo}</Typography>
                                    <Typography variant="body2" color="textSecondary">{row.major}</Typography>
                                </Paper>
                                {/* <Dialog
                                        className="Dialog"
                                        fullScreen
                                        open={this.state.  otherOpen}
                                    > <Button color="inherit" onClick={() => { this.setClose_View }}>
                                    111111111121
                                </Button>
                                          <_FormCareer idUser={idUser} indexOfCert={indexOfCert} />
                                        <Slide direction="up" in={this.state.  otherOpen} timeout={100} mountOnEnter unmountOnExit>
                                        <Button color="inherit" onClick={() => { this.setClose_View }}>
                                            111111111121
                                        </Button>
                                            <_FormCareer idUser={idUser} indexOfCert={indexOfCert} />
                                        </Slide>
                                    </Dialog> */}
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                    </Timeline>
                </div>
                <div className="carrer-btn">
                    <Button
                        onClick={this.showMore}
                    >xem thêm<ChevronRightIcon />
                    </Button>
                     <Button color="inherit" onClick={() => { this.setOpen (2323)}}>111111111121</Button> 
                    <Button color="inherit" onClick={() => { this.setClose ()}}>vvvczvxcv</Button>
                </div>
            </Container>
        )
    }
}

export default Overview;
