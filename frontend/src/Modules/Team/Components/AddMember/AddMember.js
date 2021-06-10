import React, { Component } from "react";
import "./AddMember.scss";
import TeamService from '../../Shared/TeamService';
import { Button } from '@material-ui/core';
import { FaCheck,  FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./ItemMember.scss";
class AddMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
        idItemChoosed: null,
        searchMember: "",
        listMembers: [],
        listMemberChoosed: [],
    };
  }
  componentDidMount() {
    this.getAllUser();
  }
  getAllUser() {
    TeamService.getListUser().then(res => { 
      let members = res.data;
      let MembersNotTeam=[]
      members.map((data)=>{
       let i = data.teams
      if (i == []) return MembersNotTeam.push(data)
        else {
          let x =i.indexOf(this.props.idTeam)
          if (x == -1) {
            MembersNotTeam.push(data)
          }
        }
      })

    console.log(MembersNotTeam);
      this.setState({
      listMembers: MembersNotTeam,
    });
  })
}
chooseMember = (id) => {
  const { listMembers, listMemberChoosed } = this.state;
  const index = this.findIndex(id);
  listMembers[index].isChoosed = !listMembers[index].isChoosed;
  this.setState({
    idItemChoosed: id,
  });

  if (listMembers[index].isChoosed) {
    listMemberChoosed.push(listMembers[index]);
    this.setState({
      listMemberChoosed: listMemberChoosed,
    });
  } else {
    for (let i = 0; i < listMemberChoosed.length; i++) {
      if (listMembers[index].id === listMemberChoosed[i]) {
        listMemberChoosed.splice(i, 1);
      }
    }
  }
};
  findIndex(id) {
    const { listMembers } = this.state;
    let result;
    listMembers.forEach((member, index) => {
      if (member.id === id) {
        result = index;
      }
    });
    return result;
  }


  onSearchMember = (event) => {
    let name = target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { avatarUser, idTeam ,addMembersToTeam} = this.props;
    let { listMembers, searchMember ,listMemberChoosed} = this.state;
    const styleChoosed = {
      backgroundColor: "rgb(13, 100, 151)",
    };
    if (searchMember) {
      listMembers = listMembers.filter((data) => {
        return (
          data.name.toLowerCase().indexOf(searchMember.toLowerCase()) !== -1
        );
      });
    }
    const itemMember = listMembers.map((member) => {
      return (
        <div
        key={member.id}
        className="item-member"
        style={member.isChoosed ? styleChoosed : null}
        onClick={() =>this.chooseMember(member.id)}
      >
        <img
          src={"http://localhost:3000/" + avatarUser}
          className="item-member__avatar"
        />
        <div className="item-member__info-user">
          <label className="item-member__username">{member.name}</label>
          <br></br>
          <label className="item-member__team-user">
            Team:{" "}
            <span className="team-user-list">
              {member.teams.length !== 0 ? member.teams : "Chưa thuộc team nào"}
            </span>
          </label>
        </div>
        {member.isChoosed ? (
          <div className="item-member__choosed-icon">
            <FaCheck />
          </div>
        ) : (
          ""
        )}
        <div className="item-member__info-detail">
          <label className="info-detail__phone-number">
            <FaPhoneAlt /> <span>{member.phone}</span>
          </label>
          <br></br>
          <label className="info-detail__email">
            <FaEnvelope /> <span>{member.email}</span>
          </label>
          <br></br>
        </div>
      </div>
      );
    });
    return (
        <div className="add-members-box">
          <div className="add-members-to-team">
            <h5 className="title">Thêm</h5>
            <div className="list-members" id="list-members">
              <div className="search-bar">
                <input
                  type="text"
                  className="form-control"
                  name="searchMember"
                  placeholder="Search members ..."
                  value={this.state.searchMember}
                  onChange={this.onSearchMember}
                />
              </div>
              <div className="member">{itemMember}</div>
            </div>
            <div className="btn-form-control">  
              <Button className="btn-control-save" variant="contained"  onClick={() =>{addMembersToTeam(listMemberChoosed)}}>
                Thêm thành viên vào đội
              </Button>
            </div>
          </div>
        </div>
    );
  }
}
export default AddMember;
