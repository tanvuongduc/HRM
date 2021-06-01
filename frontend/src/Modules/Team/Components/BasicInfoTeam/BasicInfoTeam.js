import React, { Component } from 'react';
import './BasicInfoTeam.scss';
import dayjs from 'dayjs';

import { Card, Container, Grid, } from '@material-ui/core';



class BasicInfoTeam extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let { data } = this.props;
        return (
            <Card className="BasicInfoTeam">
                {data && data[0] ?
                    <Grid container>
                        <Grid item xs={6}>
                            <p>Tên nhóm: <span>{data[0].name}</span></p>
                            <p>Sologan: <span>{data[0].sologan}</span></p>
                            <p>Mục tiêu: <span>{data[0].achievements}</span></p>
                            <p>Tên nhóm trưởng: <span>{data[0].pic.name}</span></p>
                        </Grid>
                        <Grid item xs={6}>
                            <p>Địa chỉ: <span>{data[0].department.name}</span></p>
                            <p>Số thành viên: <span>-----</span></p>
                            <p>Ngày tạo: <span>{dayjs(data[0].createAt).format('DD/MM/YYYY')}</span></p>
                        </Grid>
                    </Grid>
                    : ''}

            </Card>
        );
    }
}
export default BasicInfoTeam