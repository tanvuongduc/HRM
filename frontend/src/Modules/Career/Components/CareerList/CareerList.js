import React, { Component } from 'react'
import OverviewService from '../../Shared/OverviewService'



class CareerList extends Component {
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
        const urlId = this.props.match.params.id;
        const { carrers } = this.state
        const data = carrers.find(carrer => (
            carrer.code === urlId
        ))
        const data1 = carrers[urlId]
        console.log(data1.code)
        console.log(carrers)
        return (
            <div>
                {urlId}
            </div>
        )
    }
}
export default CareerList