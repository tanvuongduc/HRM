import React, { Component } from 'react';
import avt from '../../../Asset/Img/avatar.png';
import avt2 from '../../../Asset/Img/avatar2.png';
import TableItem from './TableItem';

class ItemDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button: false
        }
    };
    showMember() {
        this.setState({
            button: true
        });
    };
    closeMember() {
        this.setState({
            button: false
        });
    };
    Button() {
        if (this.state.button) {
            return <button onClick={() => this.closeMember()}>&#8689;</button>
        } else return <button onClick={() => this.showMember()}>&#8690;</button>
    };
    ListMember() {
        if (this.state.button) {
            return <TableItem listmember={this.props.listmember} />
        } else return null
    };
    render() {
        let { department_id, department_name } = this.props.data;
        let count = [];
        for (let i = 1; i < department_id; i++) {
            count.push(i + 1);
        };
        return (
            <div className='department-item'>
                <div className='department-item-nav'>
                    <b>{count} Department</b>
                </div>
                <div className='department-item-content'>
                    <div className='item-content-top'>
                        <b>{department_name}</b>
                    </div>
                    <div className='item-content-bottom'>
                        <p>MEMBER</p>
                        <div className='content-member'>
                            <div className='content-member-avt'>
                                <img src={avt} alt={avt} />
                                <img src={avt2} alt={avt2} />
                            </div>
                            <div className='content-member-nav'>
                                {this.Button()}
                            </div>
                            {this.ListMember()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemDepartment;
