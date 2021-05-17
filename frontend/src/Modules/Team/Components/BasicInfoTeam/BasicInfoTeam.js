import React, { Component } from 'react';
import './BasicInfoTeam.scss';

import { Card, Container, Grid, } from '@material-ui/core';



class BasicInfoTeam extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let { data } = this.props;
        return (
            <Card className="BasicInfoTeam">
                <Grid container>
                    <Grid item xs={6}>
                        <p>Tên nhóm: <span>{data.name}</span></p>
                        <p>Sologan: <span>{data.sologan}</span></p>
                        <p>Mục tiêu: <span>{data.achievements}</span></p>
                        <p>Tên nhóm trưởng: <span>-------</span></p>
                    </Grid>
                    <Grid item xs={6}>
                        <p>Địa chỉ: <span>{data.department}</span></p>
                        <p>Số thành viên: <span>-----</span></p>
                        <p>Ngày tạo: <span>{data.createAt}</span></p>
                    </Grid>
                </Grid>
            </Card>
        );
    }
}
export default BasicInfoTeam