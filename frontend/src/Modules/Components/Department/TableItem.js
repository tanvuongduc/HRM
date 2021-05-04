import React, { Component } from 'react';
import { Table } from 'reactstrap';

class TableItem extends Component {
    render() {
        console.log(this.props.member, 'uuuuuuuu')
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
                        {/* {
                            this.props.member.member_department.map((e, i) => (
                                <td key={i}>{ e.department_id }</td>
                            ))
                        } */}
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default TableItem;
