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

class ListTimeOff extends Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    // componentDidMount = async () => {
    //   console.log("DATA List", data);
    // };
    handlerChange = (e) => {
      console.log(e.target.checked)
      console.log(document.getElementsByClassName("repeat"))
      let a = document.getElementsByClassName("repeat")
      for(let i = 0; i<a.length;i++){
        e.target.checked ? a[i].disabled = false : a[i].disabled = true
      }
    }

    render(){
        const data = this.props.data;
        console.log('dataaaaa:', data);
        return(
            <div>
              <Container>
              <div className="head">
              <Draw />
              </div>
              {/* //table */}
                  <div style={{ height: 500, width: '100%' }}>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">STT</TableCell>
                          <TableCell align="center">Id</TableCell>
                          <TableCell align="center">Lí do</TableCell>
                          <TableCell align="center">Ngày bắt đầu</TableCell>
                          <TableCell align="center">Ngày kết thúc</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {data.map((item, index) => (
                          <TableRow>
                            <TableCell align="center">{index}</TableCell>
                            <TableCell align="center">{item.id}</TableCell>
                            <TableCell align="center">{item.title}</TableCell>
                            <TableCell align="center">{item.startDate}</TableCell>
                            <TableCell align="center">{item.endDate}</TableCell>
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