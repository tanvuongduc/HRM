import React, { Component } from 'react'
import './ListTimeOff.scss'

import { Http } from "../../../../Helper/Http";
import TimeOffService from "../../Shared/TimeOffService";

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
      console.log("ListTimeoff", data);
    };
    render(){
        const { data } = this.state;
        console.log(data);
        return(
            <div>listtimeoff</div>
        )
    }
}

export default ListTimeOff;