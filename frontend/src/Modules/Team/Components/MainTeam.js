import React from "react";
import {
  Container,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ClickAwayListener,Popper
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import BasicInfoTeam from "./BasicInfoTeam/BasicInfoTeam";
import TeamService from "../Shared/TeamService";
import MemberInfoTeam from "./MemberInfoTeam/MemberInfoTeam";
import form from "../../../Shared/Components/Form/Form";
import AddMember from "../Components/AddMember/AddMember";
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModalNoti from "../../../Shared/Components/ModalNoti/ModalNoti";
import ModalConfirm from "../../../Shared/Components/ModalConfirm/ModalConfirm"
import { Fragment } from "react";

const useStyles = (theme) => ({
  infor: {
    padding: "10px 0px 10px 0px",
  },
  title: {
    padding: "5px 5px 5px 20px ",
  },
  add: {
    padding: "35px 0px 8px 10px",
    float: "right",
    marginRight: "10px",
  },
  table: {
    marginTop: "45px",
    border: "1px solid #c3c3c3",
    padding: "30px 10px 10px 10px",
  },
  btn: {
    padding: theme.spacing(1),
    marginRight: `10px`,
    float: "right"
  },
});

class MainTeam extends form {
  constructor(props) {
    super(props);
    this.state = {
      notiMessage: '',
      confirmMessage: '',
      listMemberTeam: [],
      listMembers:[],
      listMemberChoosed:[],
      idTeam: this.props.match.params.id,
      idUSer: "",
      dataUser: [],
      ////control form
      idItemChoosed: null,
      tags: [],
      form: this._getInitFormData({
        name:"",
        pic: [],
        code: "",
        department:[],
        sologan: "",
        achievements: "",
        createAt: "",
      }),
  
    anchorEl: true,
    open: false,
    checkedB: true
    };

  }

  componentDidMount = () => {
    TeamService.getBasicInfoTeam(this.state.idTeam).then((res) => {
      let data = res.data;
      this._fillForm({
        name:data.name,
        pic: data.pic._id,
        code: data.code,
        department:data.department._id,
        sologan:data.sologan,
        achievements:data.achievements,
        createAt: data.createAt,
      });
    });
    
    //list member of team by idTeam
    TeamService.getListMemberTeam(this.state.idTeam).then((res) => {
      let Users = res.data.members;
      let _listMemberTeam = [];
      Users.map((user, i) => {
        _listMemberTeam.push(user);
      });
      this.setState({
        listMemberTeam: _listMemberTeam,
      });
    });
  };

 
 // 
  handleClick = (event) => {
    const { currentTarget } = event;
    this.setState((state) => ({
      anchorEl: currentTarget,
      open: !state.open
    }));
  };
  handleClickAway = () => {
    this.setState({
      open: false
    });
  };


  addMembersToTeam = (listMemberChoosed) =>{
    this.setState({
      listMemberChoosed:listMemberChoosed
    });
    let listID ={
      members : []
  }
  // create 1 new array after add members
    listID.members.push(listMemberChoosed);
    let listMemberTeam = this.state.listMemberTeam;
    let _listMemberChoosed ={};
    _listMemberChoosed=listMemberChoosed;
    let newlist =[...listMemberTeam, ..._listMemberChoosed]
    this.setState({
      listMemberTeam:newlist
    });
     TeamService.postAddMember(this.state.idTeam,listID)
  }
  onDelete=(id) =>{
      let data={
        members:[id]
      }
      TeamService.deleteRemoveMember(this.state.idTeam,data)
     let list = this.state.listMemberTeam
     let newList=[]
     list.map((data,i) =>{
      if( data._id !==id){
         newList.push(data)
       };
     });
     this.setState({
      listMemberTeam:newList
     })
  }
///
  onSubmit = () => {
    let id = this.props.match.params.id;
    if (id !=="0") {
      this.setState({
        confirmMessage: 'Bạn muốn cập nhập thông tin này không ?'
      });
    } else {
      this.setState({
        confirmMessage: 'Bạn muốn thêm mới thành viên này không ?'
      });
    }
  }
  answer = (answer) => {
    let id = this.props.match.params.id;
    let { name , pic, department,code,sologan,achievements} = this.state.form;
    let data = {
     name:name.value,
     pic:pic.value,
     code: code.value,
     department:department.value,
     sologan:sologan.value,
     achievements:achievements.value,
  }
    if (answer) {
      let method = (id == "0") ? TeamService.postNewTeam(data) : TeamService.updateTeam(id,data);
      let notiMessage = (id) ? 'Cập nhât thành công' : 'Tạo mới thành công'
      method.then(response => {
        if (response.status === 200) {
          this.setState({
            notiMessage
          });
        }
      }); 
    }
    else {
      this.setState({
        confirmMessage: ''
      })
    }
  }
  doneAlret = () => {
    if (this.state.notiMessage) {
      window.location.reload(false); 
    } else {
      this.setState({ notiMessage: '' })
    }
  }


  render() {
    const { classes } = this.props;
    let {  listMemberTeam , idTeam,form } = this.state;
    let _listMemberTeam = listMemberTeam.map((data, i) => {
      return (
        <MemberInfoTeam
          index={i}
          dataMember={data}
          onDelete={this.onDelete}
        />
      );
    });
    const { anchorEl, open } = this.state;
    console.log(form);
    return (
      <Container maxWidth="lg">
         <ModalConfirm
            message={this.state.confirmMessage}
            answer={this.answer}
          ></ModalConfirm>
          <ModalNoti
            message={this.state.notiMessage}
            done={this.doneAlret}
          ></ModalNoti>
        <div className={classes.infor}>
          <BasicInfoTeam data={form} quantity={listMemberTeam.length} _setValue={this._setValue} _setValueNotCheck={this._setValueNotCheck} onSubmit={this.onSubmit} idTeam={idTeam}/>
        </div>
        <Grid container>
          <h2>Thông tin thành viên team</h2>
        <div  className={classes.btn}>
        <Button variant="contained" color="primary" size="small" startIcon={<PeopleOutlineIcon/>} onClick={this.handleClick}> Chọn để tìm thành viên</Button>
           <Popper  open={open} anchorEl={anchorEl} >
              <ClickAwayListener onClickAway={this.handleClickAway}>
                <AddMember idTeam={idTeam} addMembersToTeam={this.addMembersToTeam}/>
              </ClickAwayListener>
          </Popper>
        </div>
          </Grid>
        <TableContainer className={classes.table}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell align="center">Họ và Tên</TableCell>
                <TableCell align="center">Trạng Thái</TableCell>
                <TableCell align="center">Ngày Sinh</TableCell>
                <TableCell align="center">Số Điện Thoại</TableCell>
                <TableCell align="center">Tùy Chọn</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{_listMemberTeam}</TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}
export default withStyles(useStyles)(MainTeam);
