import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class WeeklySchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { field: 'ca', headerName: '' },
				{ field: 'T2', headerName: 'Thứ 2' },
				{ field: 'T3', headerName: 'Thứ 3' },
				{ field: 'T4', headerName: 'Thứ 4' },
        { field: 'T5', headerName: 'Thứ 5' },
        { field: 'T6', headerName: 'Thứ 6' },
        { field: 'T7', headerName: 'Thứ 7' },
        { field: 'CN', headerName: 'Chủ nhật'},
			],
			rowData: [
				{ ca: 'Sáng', T2: '1', T3: '1',T4 :'1',T5 :'1',T6 :'1',T7:'1',CN : '1' },
				{ ca: 'Chiều', T2: '1', T3: '1',T4 :'1',T5 :'1',T6 :'1',T7:'1',CN : '1'},
			],      
        defaultColDef: {
        flex: 1,
        minWidth: 100,
      },
      rowSelection: 'multiple',
    };
  }
  onSelectionChanged = () => {
    let selectedRows =this.gridApi.getSelectedRows();
    let selectedRowsString = '';
    let maxToShow = 5;
    selectedRows.forEach(function (selectedRow, index) {
      if (index >= maxToShow) {
        return;
      }
      if (index > 0) {
        selectedRowsString += ', ';
      }
      selectedRowsString += selectedRow.athlete;
    });
    if (selectedRows.length > maxToShow) {
      let othersCount = selectedRows.length - maxToShow;
      selectedRowsString +=
        ' and ' + othersCount + ' other' + (othersCount !== 1 ? 's' : '');
    }
    document.querySelector('#selectedRows').innerHTML = selectedRowsString;
  };


  render() {
    console.log("aaa");
    return (
      <div
      className="ag-theme-alpine"
      style={{
        height: '200px',
        width: '90%',
        padding:'10px 0 10px 20px'
      }}
    ><div className="grid_height_fix">
      <AgGridReact
        enableRangeSelection={true}
        columnDefs={this.state.columnDefs}
        rowData={this.state.rowData}>
      </AgGridReact>
        </div>
    </div>
    );
  }
}
export default WeeklySchedule;