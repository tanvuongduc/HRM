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
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button';


const useStyles = () => ({
    paper: {
        padding: '6px 16px',
    },
})
class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carrers: [],
            SliceNumber: 1
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
    showMore = () => {
        const { SliceNumber } = this.state
        this.setState({
            SliceNumber: SliceNumber + 1
        })
    }
    render() {
        const { carrers, SliceNumber } = this.state
        const { classes } = this.props
        const { path } = this.props.match;
        return (
            <div className="carrer-overview">
                <div className="carrer-timeline">
                    <Timeline align="alternate">
                        {
                            carrers.slice(0, SliceNumber).map((row, index) => (

                                <TimelineItem key={row.id}>
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <RouterLink to={`${path}/${index}`}>
                                            <Paper elevation={3} className={classes.paper}>
                                                <Typography variant="h6" component="h1">{row.name}</Typography>
                                                <Typography>{row.desc}</Typography>
                                                <Typography variant="body2" color="textSecondary">{row.recivedAt}</Typography>
                                            </Paper>
                                        </RouterLink>
                                    </TimelineContent>
                                </TimelineItem>
                            ))
                        }

                    </Timeline>
                </div>
                <div className="carrer-btn">
                    <Button
                        size="small"
                        variant="contained"
                        onClick={this.showMore}
                    >load more
                    </Button>
                </div>
            </div>
        )
    }
}

export default withStyles(useStyles)(Overview)