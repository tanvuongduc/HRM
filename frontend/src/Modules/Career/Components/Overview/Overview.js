import React, { Component } from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import OverviewService from '../../Shared/OverviewService'
import { withStyles } from '@material-ui/core/styles';

const useStyles = () => ({
    paper: {
        padding: '6px 16px',
    }
})
class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carrers: []
        }

    }
    componentDidMount() {
        let carrarArr = []
        carrarArr.push(OverviewService.getCarrer())
        Promise.all(carrarArr).then(([res]) => {
            let carrers = res.data.certificates
            this.setState({
                carrers
            })
        })
    }
    render() {
        const { carrers } = this.state
        const { classes } = this.props
        return (
            <div>
                <Timeline align="alternate">
                    {
                        carrers.map((row, index) => (

                            <TimelineItem key={row.id}>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography variant="h6" component="h1">{row.name}</Typography>
                                        <Typography>{row.desc}</Typography>
                                        <Typography variant="body2" color="textSecondary">{row.recivedAt}</Typography>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        ))
                    }


                </Timeline>
            </div>
        )
    }
}

export default withStyles(useStyles)(Overview)