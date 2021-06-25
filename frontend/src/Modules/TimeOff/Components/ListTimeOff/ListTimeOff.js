import { Component } from 'react'
import './ListTimeOff.scss'
import Grid from '@material-ui/core/Grid';

import { Http } from "../../../../Helper/Http";
import TimeOffService from "../../Shared/TimeOffService";
import Container from '@material-ui/core/Container';
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
  randomCreatedDate,
  randomUpdatedDate,
} from '@material-ui/x-grid-data-generator';

//form
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const data = [];
TimeOffService.getListTimeOff().then((res) => {
  const resultData = res.data;
  resultData.forEach((item) => {
    const timeOffItem = {
      id: item.id,
      title: item.reason,
      startDate: new Date(item.from),
      endDate: new Date(item.to),
    };
    data.push(timeOffItem);
  });
});





class ListTimeOff extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: data,
            
        }
    }
    componentDidMount = async () => {
      console.log("DATA List", data);
    };

    AddTimeOff = () => {
      alert()
    }
    handlerChange = (e) => {
      console.log(e.target.checked)
      console.log(document.getElementsByClassName("repeat"))
      let a = document.getElementsByClassName("repeat")
      for(let i = 0; i<a.length;i++){
        e.target.checked ? a[i].disabled = false : a[i].disabled = true
      }
      // a.map(item => {
      //   if(e.target.checked == true){
      //       item.disabled = false
      //   }else{
      //       item.disabled = true
      //   }
      // })
      
  
    }

    render(){
        const { data } = this.state;
        return(
            <div>
              <Container>
              <Grid container>
                <Grid item xs={9}>
                  <div style={{ height: 500, width: '100%' }}>
                    <DataGrid
                        columns={[
                            { field: 'title',headerName: 'Lí do' , type: 'string',flex: 1 },
                            { field: 'startDate', headerName: 'Ngày bắt đầu',  type: 'date', flex: 1},
                            { field: 'endDate',headerName: 'Ngày kết thúc', type: 'date', flex: 1 },
                            { field: 'isAccept',headerName: 'Đã Phê Duyệt', type: 'boolean', flex: 1},
                          ]}
                          rows={data}
                    />
                  </div>
                </Grid>
                <Grid item xs={3}>
                <form className="form" noValidate autoComplete="off">
                  <TextField className="inputText" id="outlined-basic" label="Lí do nghỉ" variant="outlined" />
                  <TextField
                  className="date"
                  id="data"
                  label="Ngày bắt đầu"
                  type="date"
                  defaultValue="2021-06-25"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
                  <TextField
                  className="date"
                  id="date"
                  label="Ngày kết thúc"
                  type="date"
                  defaultValue="2021-06-25"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  />
                  <div>
                  <input type="checkbox" defaultChecked />all day
                  <input type="checkbox" onChange={this.handlerChange}/>repeat
                  </div>
                  <hr></hr>
                  <Select
                    className="repeat"
                    disabled="true"
                    inputProps={{ readOnly: true }}
                  >
                    <MenuItem value={10}>DAILY</MenuItem>
                    <MenuItem value={20}>MONTHLY</MenuItem>
                    <MenuItem value={30}>YEARLY</MenuItem>
                  </Select>
                  <br></br>
                  <label for="fname">Repeat every: </label>
                  <input disabled="true" className="repeat" type="number" width="50px" id="numOfTimeOf" name="numOfTimeOf"></input>
                  <br></br>
                  <label for="fname">End Repeat: </label>
                  <input disabled="true" className="repeat" type="radio" name="fav_language" value="Never"></input>
                  <label for="html">Never</label><br></br>
                  <input disabled="true" className="repeat" type="radio" name="fav_language" value="On"></input>
                  <label for="html">On</label><TextField disabled="true" type="number" className="repeat" id="outlined-basic" variant="outlined" /><br></br>
                  <input disabled="true" className="repeat" type="radio" name="fav_language" value="After"></input>
                  <label for="html">After</label>
                  <TextField
                  disabled="true"
                  className="repeat"
                  id="date"
                  type="date"
                  defaultValue="2021-06-25"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  /><br></br>
                  <Button variant="contained" type="submit" color="primary">
                    Submit 
                  </Button>
                </form>
                </Grid>
              </Grid>
              </Container>
          </div>
        )
    }
}

export default ListTimeOff;