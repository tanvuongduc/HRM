import React, { Component, Fragment } from 'react';
import avt from '../../../Asset/Img/avatar.png';
import avt2 from '../../../Asset/Img/avatar2.png';
import TableItem from './TableItem';

class ItemDepartment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button: false,
            member: []
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
            return <TableItem member={this.state.member} />
        } else return null
    };
    componentDidMount() {
        this.props.data.map(e => {
            return this.setState({
                member: e
            });
        })
    };
    render() {
        console.log(this.state.member, 'heheh')
        return (
            <Fragment>
                <div className='department-item'>
                    <div className='department-item-nav'>
                        <b>Department</b>
                    </div>
                    {
                        this.props.data.map((e, i) => (
                            <div className='department-item-content' key={i}>
                                <div className='item-content-top'>
                                    <b>{e.department_name}</b>
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
                        ))
                    }
                </div>
            </Fragment>
        );
    }
}

export default ItemDepartment;
