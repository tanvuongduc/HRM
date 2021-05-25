import React, { Component } from 'react';
import './DetailMember.scss';

import {Fragment} from 'react';
import TeamService from '../../Shared/TeamService';

import { ClickAwayListener } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

class DeatailMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setOpen: false,
        }
    }

    handleClickAway = () => {
        this.setState({
            setOpen: false
        })
    }
    handleClick = () => {
        this.setState({
            setOpen: !this.state.setOpen
        })
    }

    render() {
        const {onShowDetailMember}= this.props;
        return (
            <ClickAwayListener onClickAway={() => this.handleClickAway()}>
                <div>                   
                    <div className={this.state.setOpen ? "showList" : "hidenList"}>
                        <h3>Danh sách nhân viên</h3>
                        <button onClick={()=>this.handleClickAway()}>Đóng Form </button>
                    </div >
                </div>
            </ClickAwayListener>
        );
    }
}
export default DeatailMember