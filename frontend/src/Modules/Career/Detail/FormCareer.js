import React, { Component, Fragment } from "react";
import { Grid, TextField, Button, ThemeProvider } from "@material-ui/core";
import { FaCheck } from "react-icons/fa";
import CareerService from "../Shared/CareerService";
import form from "../../../Shared/Components/Form/Form";
import ModalConfirm from "../../../Shared/Components/ModalConfirm/ModalConfirm";
import ModalNoti from "../../../Shared/Components/ModalNoti/ModalNoti"
import Upload from "../../../Shared/Components/Upload/Upload";
import CompanyService from "../../../Modules/Company/Shared/CompanyService";
import Container from '@material-ui/core/Container';
class FormCareer extends form {
  constructor(props) {
    super(props);
    this.state = {
      id_document: [],
      id_delete: null,
      documents: [],
      data_user: [],
      certificates:[],
      status: "",
      indexOfCert: this.props.index,
      notiConfirm: "",
      notiMessage: '',
      confirmMessage: "",
      data: this.props.certificate,
      form: this._getInitFormData({
        name: "",
        certNo: "",
        reciveAt: "",
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
      let certificates = res.data.certificates
      certificates.map((data, index) => {
        if (index == this.props.index) {
          this.setState({ certificate: data })
          this._fillForm({
            name: data.name,
            reciveAt: data.reciveAt,
            certNo: data.certNo,
            org: data.org,
            classification: data.classification,
            major: data.major,
            note: data.note,
            degree: data.degree,
            docs: data.docs,
            status: data.status,
          });
        };
      });
      this.setState({
        certificates: res.data.certificates,
        status: res.data.status
      });
    });
  };
  onSubmit = () => {
    
    let idUser = this.props.idUser
    let { certificates } = this.state;
    let index = parseInt(this.state.indexOfCert)
    let { name, certNo, reciveAt, org, classification, major, note, degree, docs, status } = this.state.form;
    let data = {
      name: name.value,
      certNo: certNo.value,
      org: org.value,
      classification: classification.value,
      major: major.value,
      degree: degree.value,
      note: note.value,
      reciveAt: reciveAt.value,
      docs: this.state.documents,
      status: "pending"
    }
    certificates.splice(index, 1,data),
    console.log(certificates);
    let post_data = {
      certificate: certificates,
      status: this.state.status
    }
    let method = CareerService.updateUser(idUser, post_data);
    method.then(response => {
      if (response.status === 200) {
        console.log("fasdfasd");
        this.setState({
          notiMessage:"Yêu cầu thành công"
        });
      }
      else {
        this.setState({
          confirmMessage: 'Thử lại'
        })
      }
    });
  }
  updateUpload = (idUpload, DocumentUpload) => {
    this.state.documents.push(DocumentUpload);
    this.state.id_document.push({ id: idUpload });
    this.setState({ documents: this.state.documents });

    let _idUpdate = this.state.id_document.map((id) => id.id);
    CompanyService.finishDocumentResult(_idUpdate).catch((error) => {
      console.error("Error:", error);
    });
  };
  //   componentDidUpdate = () =>{
  //     if(this.state.indexOfCert !== this.props.index){
  //       CareerService.getUserById(this.props.idUser).then((res) => {
  //         this.setState({
  //           indexOfCert:this.props.index
  //         })
  //         let certificates = res.data.certificates
  //         certificates.map((data, index) => {
  //             if (index ==   this.props.index){
  //                 this.setState({ certificate: data })
  //                 this._fillForm({
  //                     name: data.name,
  //                     reciveAt: data.reciveAt,
  //                     certNo: data.certNo,
  //                     org: data.org,
  //                     classification: data.classification,
  //                     major: data.major,
  //                     note: data.note,
  //                     degree: data.degree,
  //                     docs :data.docs,
  //                     status: data.status,
  //                 });
  //             };
  //         });
  //     }).catch((err) => {
  //         this.setState({
  //           notiMessage: 'Lỗi vui lòng bạn thử lại sau !!'
  //         })
  //         console.log(err);
  //       });
  //     }
  // };
  render() {
    let { idUser, index } = this.props;
    let { form, indexOfCert,certificates } = this.state;
   console.log(certificates);
   console.log(this.state.documents);
    return (
      <Fragment>
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
                <TextField
                  fullWidth
                  value={form.reciveAt.value}
                  id="reciveAt"
                  name="reciveAt"
                  onChange={(e) => {
                    this._setValue(e, "reciveAt");
                  }}
                  type="date"
                />
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
             <div className="btn-grid-update"> <Upload Upload={(idUpload, DocumentUpload) =>this.updateUpload(idUpload, DocumentUpload)}/></div>
             <div className="btn-grid-update"><Button variant="contained" color="primary" onClick={() =>{this.onSubmit()}}>Cập nhật</Button></div>
            </Grid>
        </Grid>
       
        <ModalNoti message={this.state.notiMessage}>

        </ModalNoti>
        <ModalConfirm
          message={this.state.notiConfirm}
        ></ModalConfirm>
      </Fragment>
    );
  }
}
export default FormCareer;
