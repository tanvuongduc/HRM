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
import InfiniteScroll from 'react-infinite-scroll-component';
import SchoolIcon from '@material-ui/icons/School';
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'


class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: false,
            open: false,
            careers: [],
            sliceNumber: 1,
            userId: '60d005eadbec139b90add9a9',
            indexOfCert: ""
        }
    }
    componentDidMount() {
        let careerArr = []
        careerArr.push(CareerService.getUserById(this.state.userId))
        Promise.all(careerArr).then(([res]) => {
            let careers = res.data.certificates
            console.log(careers)
            this.setState({
                careers
            })
        })
    }
    showMore = () => {
        const { sliceNumber, careers } = this.state
        if (careers.length > sliceNumber) {

            this.setState({
                sliceNumber: sliceNumber + 1
            })
        }
    }

    setOpen = (index) => {
        this.setState({
            open: true,
            indexOfCert: index
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
        let idUser = "60d005eadbec139b90add9a9";
        let { careers, sliceNumber, indexOfCert } = this.state
        let _index = "-1"
        console.log(this.state.indexOfCert);
        console.log(careers)
        return (
            <div className="career">

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
                    <InfiniteScroll
                        dataLength={this.state.sliceNumber}
                        next={() => { this.showMore() }}
                        hasMore={true}
                        style={{ width: 800, height: 500 }}
                    >
                        <Timeline >
                            {careers.slice(0, sliceNumber).map((row, index) => (
                                <TimelineItem key={row.id}>
                                    <TimelineOppositeContent>
                                        <Typography color="textSecondary">{row.recivedAt}</Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color={this.color(index)}>
                                            <SchoolIcon />
                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper className="TimelineContent" Container onClick={() => { this.setOpen(index) }} >

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
                    </InfiniteScroll>

                </div>

            </div>
        )
    }
}

export default Overview;
