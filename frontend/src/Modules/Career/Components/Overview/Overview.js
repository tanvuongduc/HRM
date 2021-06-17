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
            _open: false,
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

    handleClickOpen = (index) => {
        this.setState({
            open: true,
            indexOfCert: index
        })
    };
    handleClose = () => {
        this.setState({
            open: false,
        })
    };

    color = (index) => {
        if (index % 3 == 1) { return "primary" }
        else if (index % 3 == 2) { return "inherit" }
        else { return "grey" }
    }
    render() {
        let idUser = "60b9aab51f194c0c78c9932b";
        let { careers, sliceNumber, indexOfCert } = this.state
        let _index = "-1"
        console.log(indexOfCert);
        let dialog = careers.slice(0, sliceNumber).map((row, index) => (
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
                    <Paper className="TimelineContent" Container onClick={() => { this.handleClickOpen(index) }}>

                        <Typography variant="h6" component="h1">{row.name}</Typography>
                        <Typography>{row.certNo}</Typography>
                        <Typography variant="body2" color="textSecondary">{row.major}</Typography>
                        {this.state.open ? <Dialog
                            className="Dialog"
                            fullScreen
                            open={this.state.open}
                        >
                            <Slide direction="up" in={this.state.open} timeout={100}>
                                <AppBar>
                                    <Toolbar>
                                        <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
                                            <CloseIcon />
                                        </IconButton>
                                        <Typography variant="h6" >
                                            Sound
                                        </Typography>
                                        <Button autoFocus color="inherit" onClick={this.handleClose}>
                                            save
                                        </Button>
                                    </Toolbar>
                                </AppBar>
                                <_FormCareer idUser={idUser} indexOfCert={indexOfCert} />
                            </Slide>
                        </Dialog> : null}
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        ))
        return (
            <Container maxWidth="md" style={{ paddingTop: '100px' }}>

                {/* Dialog */}
                <div>
                    <div className="btn-addNew">
                        <Button variant="contained" color="primary" size="small" onClick={() => { this.handleClickOpen(_index) }}>
                            Thêm mới
                        </Button>
                    </div>
                    <Dialog
                        className="Dialog"
                        paper
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <Slide direction="up" in={this.state.open}>
                            <Paper elevation={100} >
                                <DialogContent>
                                    <FormCareer idUser={idUser} indexOfCert={indexOfCert} />
                                </DialogContent>
                            </Paper>
                        </Slide>
                    </Dialog>
                </div>
                {/*  */}
                <div className="carrer-timeline">
                    <Timeline >
                        {dialog}
                    </Timeline>
                </div>
                <div className="carrer-btn">
                    <Button
                        onClick={this.showMore}
                    >xem thêm<ChevronRightIcon />
                    </Button>
                </div>
            </Container>
        )
    }
}

export default Overview;
