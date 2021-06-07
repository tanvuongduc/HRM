import React, { Component } from "react";
import {
  Card,
  Container,
  Grid,
  Button,
  TextField,
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

const useStyles = (theme) => ({
  infor: {
    padding: "30px 0px 10px 0px",
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
});

class MainTeam extends form {
  constructor(props) {
    super(props);
    this.state = {
      basicInfoTeam: [],
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
        name: "",
        pic: "",
        department: "",
        sologan: "",
        achievements: "",
      }),
  
    anchorEl: null,
    open: false,
    checkedB: true
    };

  }

  componentDidMount = () => {
    TeamService.getBasicInfoTeam(this.state.idTeam).then((res) => {
      let data = res.data;
      let _data = {
        name: data.name,
        sologan: data.sologan,
        createAt: data.createAt,
        department: data.department,
        achievements: data.achievements,
        pic:data.pic._id
      };
      this.setState({
        basicInfoTeam: _data,
      });
    });
    
    //list member of team by idTeam
    TeamService.getListMemberTeam(this.state.idTeam).then((res) => {
      let Users = res.data.members;
      console.log(Users);
      let _listMemberTeam = [];
      Users.map((user, i) => {
        _listMemberTeam.push(user);
      });
      this.setState({
        listMemberTeam: _listMemberTeam,
      });
    });
  };



  deleteMemberId = (id) => {
    TeamService.deleteRemoveMember(this.state.idTeam);
  };
 
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
  onSubmit =()=>{
    
    
  }

  render() {
    const { classes } = this.props;
    let { basicInfoTeam, listMemberTeam, listMemberChoosed, idTeam,form } = this.state;
    let _listMemberTeam = listMemberTeam.map((data, i) => {
      return (
        <MemberInfoTeam
          index={i}
          dataMember={data}
          deleteMember={this.deleteMemberId}
        />
      );
    });
    const { anchorEl, open } = this.state;
    console.log(form);
    return (
      <Container maxWidth="lg">
        <div className={classes.infor}>
          <BasicInfoTeam data={basicInfoTeam} quantity={listMemberTeam.length} _setValue={this._setValue} onSubmit={this.onSubmit} idTeam={idTeam}/>
        </div>
        <div className={classes.title}>
          <h2>Thông tin thành viên team</h2>
        </div>
        <Grid container>
          <Grid xs="6">
            <div className={classes.add}>
            </div>
          </Grid>
          <Grid xs="6">
          <Button variant="contained" color="primary" size="small" startIcon={<PeopleOutlineIcon/>} onClick={this.handleClick}> Chọn để tìm thành viên</Button>
           <Popper  open={open} anchorEl={anchorEl} >
              <ClickAwayListener onClickAway={this.handleClickAway}>
                <AddMember idTeam={idTeam} addMembersToTeam={this.addMembersToTeam}/>
              </ClickAwayListener>
          </Popper>
          </Grid>
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
