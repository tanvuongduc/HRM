import { Component } from 'react'
import './ListTimeOff.scss'


import Container from '@material-ui/core/Container';
import * as React from 'react';
import Draw from '../ListTimeOff/Draw'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';


class ListTimeOff extends Component{
    constructor(props){
        super(props)
        this.state = {
         inputTypeFilter : null,
        }
    }
   
    handlerChange = (e) => {
      console.log(e.target.checked)
      console.log(document.getElementsByClassName("repeat"))
      let a = document.getElementsByClassName("repeat")
      for(let i = 0; i<a.length;i++){
        e.target.checked ? a[i].disabled = false : a[i].disabled = true
      }
    }
    setStatusAppointments = (item) => {
     return(
      item.status === 1
      ? "Đang chờ duyệt"
      : item.status === 2
      ? "Đã được duyệt"
      : item.status === 3
      ? "Không được duyệt"
      : "Đang chờ duyệt"
      )
    }
    setColorAppointments = (item) => {
      return(
        item.status === 1
          ? "#FFC107"
          : item.status === 2
          ? "#00a1ff"
          : item.status === 3
          ? "#ef2c2c"
          : "#FFC107"
      )
    }
    handlerValueFilter = (e) => {
      this.setState({inputTypeFilter : e.target.value});
    }
    render(){
        const prop = this.props.prop;
        const { inputTypeFilter } = this.state
        console.log('inputTypeFilter:', inputTypeFilter);
        let data = prop.data;
        // console.log("valueProps:",prop);
        if(inputTypeFilter == 1 ){
          data = data.filter((item) => {
            return item.status == 1
          })
        }if(inputTypeFilter == 2 ){
          data = data.filter((item) => {
            return item.status == 2
          })
        }if(inputTypeFilter == 3 ){
          data = data.filter((item) => {
            return item.status == 3
          })
        }if(inputTypeFilter == 0 ){
          data = prop.data
        }
        
        let today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        today = yyyy + "-" + mm + "-" + dd;
        return(
            <div>
              <Container>
              <div className="head">
              <TextField
                      id="data"
                      label="Ngày bắt đầu"
                      type="month"
                      defaultValue="2021-06-25"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
              <h3>today:{today}</h3>

              <label for="filter">Filter:</label>
              <select name="filter" id="cars" onChange={this.handlerValueFilter}>
                <option value="0">Tất cả</option>
                <option value="1">Đang chờ duyệt</option>
                <option value="2">Đã được duyệt</option>
                <option value="3">Không được duyệt</option>
              </select>
              <Draw />
              </div>
              {/* //table */}
                  <div style={{ height: '100%', width: '100%' }}>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">STT</TableCell>
                          <TableCell align="center">Id</TableCell>
                          <TableCell align="center">Lí do</TableCell>
                          <TableCell align="center">Ngày bắt đầu</TableCell>
                          <TableCell align="center">Ngày kết thúc</TableCell>
                          <TableCell align="center">Trạng thái</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                        data.map((item, index) => (
                          <TableRow style={{backgroundColor: this.setColorAppointments(item)}}>
                            <TableCell align="center">{index}</TableCell>
                            <TableCell align="center">{item.id}</TableCell>
                            <TableCell align="center">{item.title}</TableCell>
                            <TableCell align="center">{item.startDate.getDate()}</TableCell>
                            <TableCell align="center">{item.endDate.getDate()}</TableCell>
                            <TableCell align="center">{this.setStatusAppointments(item)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  </div>
              </Container>
          </div>
        )
    }
}

export default ListTimeOff;