import React, { Component } from 'react';
import "./InfoTeam.scss";
class InfoTeam extends Component {


    getLeader(){
        const {data} = this.props;
        if(data&&data.member){
            let res =  data.member.find((m)=>{return m.regency==1})
            return(res);
        }
            return ''
    }
    render() {
        const {data} = this.props;
        console.log(data);
        return (
            <div className="info-team">
                <div className="item-info">
                    <label className="style-label">Tên:</label>
                    <span>{data.name}</span>
                </div>
                <div className="item-info">
                    <label className="style-label">PIC:</label>
                    <span> {this.getLeader().name?this.getLeader().name:''} </span>
                </div>
                <div className="item-info">
                    <label className="style-label">Team members:</label>
                    <span>{data.member?data.member.length:0}</span>
                </div>
                <div className="item-info">
                    <label className="style-label">Trạng thái:</label>
                    <span>Đang hoạt động</span>
                </div>
            </div>
        );
    }
}

export default InfoTeam;