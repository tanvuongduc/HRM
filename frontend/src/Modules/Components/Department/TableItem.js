import React, { Component } from 'react';
import { Table } from 'reactstrap';

class TableItem extends Component {
    render() {
        let { member_id, member_name, member_department, member_company } = this.props.listmember;
        return (
            <div className='ListMember'>
                <Table>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Department</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{member_id}</td>
                            <td>{member_name}</td>
                            <td>{member_department}</td>
                            <td>{member_company}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TableItem;
