import React, { Component } from 'react';
import './BasicInfoTeam.scss';

import {Container, Grid, } from '@material-ui/core';



class BasicInfoTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }


    render() {
        let {data} = this.props;
        return (
            <Grid container className="BasicInfoTeam">
                <Grid item xs={6}>
                    <p>Tên nhóm: <span>{data.name}</span></p>
                    <p>Sologan: <span>{data.sologan}</span></p>
                    <p>Mục tiêu: <span>{data.achievements}</span></p>
                    <p>Nhóm trường: <span>-------</span></p>
                </Grid>
                <Grid item xs={6}>
                    <p>Địa chỉ: <span>{data.department}</span></p>
                    <p>Số thành viên: <span>-----</span></p>
                    <p>Ngày tạo: <span>{data.createAt}</span></p>
                </Grid>
            </Grid>
        );
    }
}
export default BasicInfoTeam