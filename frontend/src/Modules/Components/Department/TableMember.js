import React, { Component, Fragment } from 'react';
import avt from '../../../Asset/Img/avatar.png';
import avt2 from '../../../Asset/Img/avatar2.png';
import { Table } from 'reactstrap';

class TableMember extends Component {
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
    render() {
        return (
            <Fragment>
                <div className='item-content-bottom'>
                    <p>MEMBER</p>
                    <div className='content-member'>
                        <div className='content-member-avt'>
                            <img src={avt} alt={avt} />
                            <img src={avt2} alt={avt2} />
                        </div>
                        <div className='content-member-nav'>
                            {
                                (this.state.button) ? <button onClick={() => this.closeMember()}>&#8689;</button>
                                    : <button onClick={() => this.showMember()}>&#8690;</button>
                            }
                        </div>
                        {
                            (this.state.button) ?
                                <div className='ListMember'>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>First Name</th>
                                                <th>Department</th>
                                                <th>Company</th>
                                            </tr>
                                        </thead>
                                        {
                                            this.props.data.member_department.map((e, i) => (
                                                <tbody key={i}>
                                                    <tr>
                                                        <td>{i}</td>
                                                        <td>{e.username}</td>
                                                        <td>{e.department}</td>
                                                        <td>{e.company}</td>

                                                    </tr>
                                                </tbody>
                                            ))
                                        }
                                    </Table>
                                </div> : null
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TableMember;
