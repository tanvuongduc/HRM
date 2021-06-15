import React, { Component, Fragment } from "react";
import {
  Grid,
  TextField,
  Button,Card,MenuItem 
} from "@material-ui/core";
import { FaCheck } from "react-icons/fa";


class FormCareer  extends Component{
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    render(){
        return(
            <Fragment>
                <Grid  className="form-career">
                    <Grid container>
                        <Grid sm="4"  className="label" align="right">Tên chứng chỉ :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth/></Grid>
                        <Grid sm="4"  className="label" align="right">Mã số bằng :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth/></Grid>
                        <Grid sm="4"  className="label" align="right">Tổ chức xác nhận :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth/></Grid>
                        <Grid sm="4"  className="label" align="right">Thời gian nhận  :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth type="date"/></Grid>
                        <Grid sm="4"  className="label" align="right">Xếp loại :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth/></Grid>
                        <Grid sm="4"  className="label" align="right">Chuyên ngành :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth/></Grid>
                        <Grid sm="4"  className="label" align="right">Học vị :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth/></Grid>
                        <Grid sm="4"  className="label" align="right">Đánh giá :</Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth/></Grid>
                        <Grid sm="4"  className="label" align="right"></Grid>
                        <Grid sm="8"  className="input" ><TextField fullWidth type="file"/></Grid>
                        <Grid sm="4"  className="label" align="right">Trạng thái :</Grid>
                        <Grid sm="8"  className="input" ><TextField>Đã duyệt<FaCheck /></TextField></Grid>
                        <Grid>
                            <Button className="btn-update" variant="contained" color="primary">Cập nhật</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        )   
    }
}
export default FormCareer;