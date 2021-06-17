import React, { Component } from 'react'
import CompanyService from '../../Shared/CompanyService';
import Card from '@material-ui/core/Card';

export default class Quickview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countDepartmets: null,
            countTeams: null,
            countPeoples: null
        }
    };

    countDepartmets = () => {
        CompanyService.countDepartmets()
            .then(res => {
                res.data.map((e, i) => {
                    this.setState({ countDepartmets: i + 1 })
                })
            })
    };

    countTeams = () => {
        CompanyService.countTeams()
            .then(res => {
                res.data.map((e, i) => {
                    this.setState({ countTeams: i + 1 })
                })
            })
    };

    countPeoples = () => {
        CompanyService.countPeoples()
            .then(res => {
                res.data.map((e, i) => {
                    this.setState({ countPeoples: i + 1 })
                })
            })
    };

    componentDidMount() {
        this.countDepartmets();
        this.countTeams();
        this.countPeoples();
    };

    render() {
        return (
            <Card className="quickview-content">
                <h3>Overview</h3>
                <div className="quickview-item">
                    <div>
                        <b>{this.state.countDepartmets}</b><p>Departments</p>
                    </div>
                    <div>
                        <b>{this.state.countTeams}</b><p>Teams</p>
                    </div>
                    <div>
                        <b>{this.state.countPeoples}</b><p>Peoples</p>
                    </div>
                </div>
            </Card>
        )
    }
}
