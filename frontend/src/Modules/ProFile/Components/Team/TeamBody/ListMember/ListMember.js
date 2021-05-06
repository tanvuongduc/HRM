import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import "./ListMember.scss";
class ListMember extends Component {
    render() {
        const columns = [
        // { field: 'id', headerName: 'ID', width: 70 },
        { field: 'stt', headerName: 'STT', width: 80 },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 180,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'phoneNumber',
            headerName: 'Phone number',
            type: 'number',
            width: 150,
        },
        {
            field: 'status',
            headerName: 'Status',
            type: 'string',
            width: 560,
        }
        ];

        const rows = [
        { id: 1, stt:1, phoneNumber:"0123142856", fullName:"Nghiêm Thọ Đô", age: 35 },
        { id: 2, stt:2, phoneNumber:"9876543210", fullName:"Triều Lê", age: 42 },
        { id: 3, stt:3, phoneNumber:"9187618750", fullName:"Đăng", age: 45 },
        { id: 4, stt:4, phoneNumber:"1256912741", fullName:"Huy", age: 16 },
        { id: 5, stt:5, phoneNumber:"1257019250", fullName:"Tân", age: 23 },
        { id: 6, stt:6, phoneNumber:"0123142856", fullName:"Nghiêm Thọ Đô", age: 35 },
        { id: 7, stt:7, phoneNumber:"9876543210", fullName:"Triều Lê", age: 42 },
        { id: 8, stt:8, phoneNumber:"9187618750", fullName:"Đăng", age: 45 },
        { id: 9, stt:9, phoneNumber:"1256912741", fullName:"Huy", age: 16 },
        { id: 10, stt:10, phoneNumber:"1257019250", fullName:"Tân", age: 23 },
        ];


        return (
            <div className="list-member">
                <h5>Danh sách thành viên</h5>
                <div style={{ height:370, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection className="data-grid"/>
                </div>
            </div>
        );
    }
}

export default ListMember;