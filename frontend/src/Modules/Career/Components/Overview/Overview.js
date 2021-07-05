import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CareerService from '../../Shared/CareerService'
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Paper, Button, Typography ,Grid} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormCareer from '../../Detail/FormCareer';
import _FormCareer from '../../Detail/FormCareer';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Slide,AppBar,Toolbar,IconButton} from '@material-ui/core'
import TodayIcon from '@material-ui/icons/Today';
import CloseIcon from '@material-ui/icons/Close';
import InfiniteScroll from 'react-infinite-scroll-component';
import SchoolIcon from '@material-ui/icons/School';

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: false,
            open: false,
            careers: [],
            sliceNumber: 2,
            userId:this.props.idUser,
            indexOfCert:'',
        }
    }
    componentDidMount() {
        let careers = this.props.certificates
        console.log(careers);
        this.setState({
            careers:careers
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

    setOpen = (row) => {
        this.setState({
            open: true,
            indexOfCert:row
        })
        console.log(row);
    };
    setClose = (i) => {
        this.setState({
            open: false,
        })
        window.location.reload(true); 
    };
    //
    setDate = (data) =>{
     let dateUTC = new  Date(data);
     let date = dateUTC.getFullYear()
     return date;
    }

    render() {
        let { careers, sliceNumber, indexOfCert,userId } = this.state
        let _index = -1
        console.log(indexOfCert);
        console.log(userId);
       
        return (
            <Container maxWidth="md" >

                {/* Dialog */}
                <div>
                   {this.state.open ?   <Dialog
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
                                    <FormCareer idUser={this.state.userId}  index={indexOfCert} />
                                </DialogContent>
                        </Slide>
                    </Dialog>: null}
                </div>
                {/*  */}
                <div className="carrer-timeline">
                <InfiniteScroll
                        dataLength={this.state.sliceNumber}
                        next={() => { this.showMore() }}
                        hasMore={true}
                    >
                    <Timeline align="alternate">
                     {careers ?  careers.slice(0, sliceNumber).map((row, index) => (
                        <TimelineItem key={row.id}>
                            <TimelineOppositeContent>
                                <Typography className="Typography" color="primary">
                                    <h5> <TodayIcon/> {this.setDate(row.recivedAt)}</h5>
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <SchoolIcon />
                                </TimelineDot>
                                <TimelineConnector className="TimeLine-TimelineConnector" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div  className="TimelineContent" Container onClick={() => { this.setOpen(index) }}>
                                    <Typography variant="h6" component="h1">{row.name}</Typography>
                                    <Typography>{row.certNo}</Typography>
                                    <Typography variant="body2" color="textSecondary">{row.major}</Typography>
                                </div >
                            </TimelineContent>
                        </TimelineItem>
                    )):<h3>Chưa có sự nghiệp</h3>}
                    </Timeline>
                 </InfiniteScroll>
                </div>
                <Grid className="carrer-btn" Container>
                    <Grid sm="8">adsfsd</Grid>
                    <Grid sm="4">
                        {careers ? <Button
                            onClick={this.showMore}
                        >xem thêm<ChevronRightIcon />
                        </Button> : null }   
                        <Button variant="contained" color="primary" size="small" onClick={() => { this.setOpen(_index) }}>
                                Thêm mới
                        </Button>
                    </Grid>
                </Grid>
              
            </Container>
        )
    }
}

export default Overview;
