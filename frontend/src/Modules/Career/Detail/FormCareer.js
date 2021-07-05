import React, { Fragment } from "react";
import { Grid, TextField, Button, Input } from "@material-ui/core";
import { FaCheck } from "react-icons/fa";
import CareerService from "../Shared/CareerService";
import form from "../../../Shared/Components/Form/Form";
import ModalNoti from "../../../Shared/Components/ModalNoti/ModalNoti";
import Upload from "../../../Shared/Components/Upload/Upload";
// import { Gallery, Item } from 'react-photoswipe-gallery'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class FormCareer extends form {
  constructor(props) {
    super(props);
    this.state = {
      multiple: "true",
      id_document: [],
      documents: [],
      certificates: [],
      status: "",
      indexOfCert: this.props.index,
      notiMessage: "",
      data: this.props.certificate,
      form: this._getInitFormData({
        name: "",
        certNo: "",
        recivedAt: "",
        org: "",
        classification: "",
        major: "",
        note: "",
        degree: "",
        docs: [],
        status: "",
      }),
    };
  }
  componentDidMount = () => {
    CareerService.getUserById(this.props.idUser).then((res) => {
      let certificates = res.data.certificates;
      if(certificates){
        certificates.map((data, index) => {
          if (index == this.props.index) {
            this.setState({ certificate: data });
            console.log();
            this._fillForm({
              name: data.name,
              recivedAt: data.recivedAt,
              certNo: data.certNo,
              org: data.org,
              classification: data.classification,
              major: data.major,
              note: data.note,
              degree: data.degree,
              docs: data.docs,
              status: data.status,
            });
          }
        });
      }
      
      this.setState({
        certificates: res.data.certificates,
        status: res.data.status,
      });
    });
  };
  onSubmit = () => {
    let idUser = this.props.idUser;
    let { certificates, documents, id_document } = this.state;
    let index = parseInt(this.state.indexOfCert);
    let {
      name,
      certNo,
      recivedAt,
      org,
      classification,
      major,
      note,
      degree,
      docs,
    } = this.state.form;
    let value_docs= docs.value
    let id_docs =[];
    for( let i= 0; i<value_docs.length;i++){
      id_docs.push(value_docs[i].id)
    }
    console.log(id_docs);
    let newImgList=[...id_docs,...id_document]
    console.log(newImgList);
    let data = {
      name: name.value,
      certNo: certNo.value,
      org: org.value,
      classification: classification.value,
      major: major.value,
      degree: degree.value,
      note: note.value,
      recivedAt: recivedAt.value,
      docs: newImgList,
      status: "pending",
    };
    certificates.splice(index, 1, data), console.log(certificates);
    let post_data = {
      certificates: certificates,
      status: this.state.status,
    };
    let method = CareerService.updateUser(idUser, post_data);
    method.then((response) => {
      console.log(response.status);
      if (response.status == 200) {
        this.setState({
          notiMessage: "Yêu cầu thành công",
        });
      } else {
        this.setState({
          notiMessage: "Thử lại",
        });
      }
    });
  };
  onChange = (ev, key) => {
    let date = Date.parse(ev);
    console.log(date);
    this.setState((prevState) => {
      prevState.form[key] = {
        value: date,
        err: "",
      };
      return prevState;
    });
  };
  updateUpload = (idUpload, DocumentUpload) => {
    console.log(idUpload);
    let id_Uploads = [];
    id_Uploads.push(idUpload);
    let documents=[];
    for(let i= 0; i <DocumentUpload.length;i++){
      documents.push(DocumentUpload[i]);
    }
    this.setState({
      id_document: id_Uploads,
    });
    this.setState({ documents: documents});
  };
  render() {
   let { form } = this.state;
   let img =form.docs.value[0]?.url;
   console.log(img);
   let docs= this.state.form.docs.value;
   let id_docs =[];
   id_docs.push(docs.id)
   let documents = this.state.documents;
   let newImgList = [...docs,...documents];
   console.log(documents);
   console.log();
   console.log(newImgList);
   let imgList = newImgList.map((data)=>{
           return(
            <GridListTile key={data.img}>
            <img src={"http://103.124.95.189:3000/"+data.url} alt={data.title} />
            <GridListTileBar
              title={data.title}
              actionIcon={
                <IconButton aria-label={`star ${data.title}`}>
                  <StarBorderIcon />
                </IconButton>
              }
            />
          </GridListTile>
     )
   })
    return (
      <Fragment>
        <ModalNoti 
          message={this.state.notiMessage}
          done={() => this.setState({ notiMessage: "" })}>
        </ModalNoti>
        <Grid className="form-career">
          <Grid container paper>
            <Grid sm="6" container>
              <Grid sm="4" className="label" align="right">
                Tên chứng chỉ :
              </Grid>
              <Grid sm="8" className="input">
                <TextField
                  fullWidth
                  value={form.name.value}
                  id="name"
                  name="name"
                  onChange={(e) => {
                    this._setValue(e, "name");
                  }}
                />
              </Grid>
              <Grid sm="4" className="label" align="right">
                Mã số bằng :
              </Grid>
              <Grid sm="8" className="input">
                <TextField
                  fullWidth
                  value={form.certNo.value}
                  id="certNo"
                  name="certNo"
                  onChange={(e) => {
                    this._setValue(e, "certNo");
                  }}
                />
              </Grid>
              <Grid sm="4" className="label" align="right">
                Tổ chức :
              </Grid>
              <Grid sm="8" className="input">
                <TextField
                  fullWidth
                  value={form.org.value}
                  id="org"
                  name="org"
                  onChange={(e) => {
                    this._setValue(e, "org");
                  }}
                />
              </Grid>
              <Grid sm="4" className="label" align="right">
                Thời gian nhận :
              </Grid>
              <Grid sm="8" className="input">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      variant="inline"
                      fullWidth
                      format="dd/MM/yyyy"
                      value={form.recivedAt.value}
                      id="recivedAt"
                      name="recivedAt"
                      onChange={(e) => {
                        this.onChange(e, "recivedAt");
                      }}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid sm="4" className="label" align="right">
                Xếp loại :
              </Grid>
              <Grid sm="8" className="input">
                <TextField
                  fullWidth
                  id="classification"
                  name="classification"
                  value={form.classification.value}
                  onChange={(e) => {
                    this._setValue(e, "classification");
                  }}
                />
              </Grid>
            </Grid>
            <Grid sm="6" container>
              <Grid sm="4" className="label" align="right">
                Chuyên ngành :
              </Grid>
              <Grid sm="8" className="input">
                <TextField
                  fullWidth
                  value={form.major.value}
                  id="major"
                  name="major"
                  onChange={(e) => {
                    this._setValue(e, "major");
                  }}
                />
              </Grid>
              <Grid sm="4" className="label" align="right">
                Học vị :
              </Grid>
              <Grid sm="8" className="input">
                <TextField
                  fullWidth
                  value={form.degree.value}
                  id="degree"
                  name="degree"
                  onChange={(e) => {
                    this._setValue(e, "degree");
                  }}
                />
              </Grid>
              <Grid sm="4" className="label" align="right">
                Đánh giá :
              </Grid>
              <Grid sm="8" className="input">
                <TextField
                  fullWidth
                  value={form.note.value}
                  id="note"
                  name="note"
                  onChange={(e) => {
                    this._setValue(e, "note");
                  }}
                />
              </Grid>
              <Grid sm="4" className="label" align="right">
                Trạng thái :
              </Grid>
              <Grid sm="8" className="label">
                {form.status.value} <FaCheck />
              </Grid>
              <Grid sm="4" className="label" align="right"></Grid>
              <Grid sm="8" className="input"></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="grid-btn">
          <Grid sm="8"></Grid>
          <Grid sm="4">
            <div className="btn-grid-update">
              {" "}
              <Upload
                multiple={this.state.multiple}
                Upload={(idUpload, DocumentUpload) =>
                  this.updateUpload(idUpload, DocumentUpload)
                }
              />
            </div>
            <div className="btn-grid-update">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  this.onSubmit();
                }}
              >
                Cập nhật
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid container paper>
          <div className="root">
          <GridList className='gridList' cols={2.5}> {imgList}</GridList>
          </div>
        </Grid>
      </Fragment>
    );
  }
}
export default FormCareer;
