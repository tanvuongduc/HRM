import React, { Component, Fragment } from "react";
import {
  Grid,
  TextField,
  Button,Card,MenuItem 
} from "@material-ui/core";
import { FaCheck } from "react-icons/fa";
import CareerService from "../Shared/CareerService"
import form from '../../../Shared/Components/Form/Form';

class FormCareer  extends form{
    constructor(props) {
        super(props);
        this.state = {
           certificate:[],
           form:this._getInitFormData({
            name :"",
            certNo :"",
            reciveAt :"",
            org :"",
            classification :"",
            major :"",
            note :"",
            degree :"",
            // docs :[],
            status :"",
        }),
        }
    }
    componentDidMount = () => {
       CareerService.getUserById(this.props.idUser).then((res)=>{
        let certificates =res.data.certificates
        certificates.map((data,index) => {
            if(index == this.props.indexOfCert){
              this.setState({certificate:data})
              console.log(data);
              this._fillForm({
                name :data.name,
                reciveAt :data.reciveAt,
                certNo :data.certNo,
                org :data.org,
                classification :data.classification,
                major :data.major,
                note :data.note,
                degree :data.degree,
                // docs :data.docs,
                status :data.status,
              });
            };
        });
     }); 
    }

    render(){
    const {idUser,indexOfCert} =this.props;
    let form= this.state.form;
    console.log(this.state.form);
        return(
            <Fragment>
                <h4 className="title-career">Thông tin chi tiết</h4>
                <Grid  className="form-career">
                    <Grid container paper>
                        <Grid sm="4"  className="label" align="right">Tên chứng chỉ :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth value={form.name.value} id="name" name ="name"  onChange={(ev) => {this._setValueNotCheck(ev,"name")}}/></Grid>
                        <Grid sm="4"  className="label" align="right">Mã số bằng :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth value={form.certNo.value} id="certNo" name ="certNo" onChange={(ev) => {this._setValueNotCheck(ev,"certNo")}}/></Grid>
                        <Grid sm="4"  className="label" align="right">Tổ chức :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth value={form.org.value} id="org" name ="org" onChange={(ev) => {this._setValueNotCheck(ev,"org")}}/></Grid>
                        <Grid sm="4"  className="label" align="right">Thời gian nhận  :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth value={form.reciveAt.value} id="reciveAt" name ="reciveAt" onChange={(ev) => {this._setValueNotCheck(ev,"reciveAt")}} type="date"/></Grid>
                        <Grid sm="4"  className="label" align="right">Xếp loại :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth  id="classification" name ="classification" onChange={(ev) => {this._setValueNotCheck(ev,"classification")}}/></Grid>
                        <Grid sm="4"  className="label" align="right">Chuyên ngành :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth value={form.major.value} id="major" name ="major" onChange={(ev) => {this._setValueNotCheck(ev,"major")}}/></Grid>
                        <Grid sm="4"  className="label" align="right">Học vị :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth value={form.degree.value} id="degree" name ="degree" onChange={(ev) => {this._setValueNotCheck(ev,"degree")}}/></Grid>
                        <Grid sm="4"  className="label" align="right">Đánh giá :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth value={form.note.value} id="note" name ="note" onChange={(ev) => {this._setValueNotCheck(ev,"note")}}/></Grid>
                        <Grid sm="4"  className="label" align="right"></Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth id="docs" name ="docs" onChange={(ev) => {this._setValueNotCheck(ev,"docs")}} type="file"/></Grid>
                        <Grid sm="4"  className="label" align="right">Trạng thái :</Grid>
                        <Grid sm="8"  className="label" >{form.status.value} <FaCheck /></Grid>
                        <Grid>
                            <Button className="btn-update" variant="contained" color="primary">Cập nhật </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        )   
    }
}
export default FormCareer;