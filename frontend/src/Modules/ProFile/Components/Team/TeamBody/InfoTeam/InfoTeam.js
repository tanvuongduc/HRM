import React, { Component } from 'react';
import "./InfoTeam.scss";
class InfoTeam extends Component {
    render() {
        return (
            <div className="info-team">
                <div className="item-info">
                    <label className="style-label">Tên:</label>
                    <span>Phần mềm</span>
                </div>
                <div className="item-info">
                    <label className="style-label">PIC:</label>
                    <span>Nghiêm Thọ Đô</span>
                </div>
                <div className="item-info">
                    <label className="style-label">Team members:</label>
                    <span>30 members</span>
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