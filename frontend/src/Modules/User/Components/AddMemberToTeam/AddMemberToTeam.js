import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import { Http } from "../../../../Helper/Http";
import "./AddMemberToTeam.scss";

import ItemMember from "./ItemMember/ItemMember";

class AddMemberToTeam extends Component {
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

  async getAllUser() {
    const res = await Http.get("users");
    const members = res.data.filter((member) => {
      if (!member.teams) return 1;
      return member.teams.indexOf("609ddb7ab7ca213f2489ff38") < 0;
    });
    await this.setState({
      listMembers: members,
    });
  }

  chooseMember = (id) => {
    const { listMembers, listMemberChoosed } = this.state;
    const index = this.findIndex(id);
    listMembers[index].isChoosed = !listMembers[index].isChoosed;
    this.setState({
      idItemChoosed: id,
    });

    if (listMembers[index].isChoosed) {
      listMemberChoosed.push(listMembers[index].id);
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

  addMembersToTeam = async () => {
    const { listMemberChoosed } = this.state;
    const res = await Http.post(
      "teams/add/members?team=609ddb7ab7ca213f2489ff38",
      { members: listMemberChoosed }
    );
    this.props.onCloseAddMember();
  };

  onSearchMember = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { avatarUser } = this.props;
    let { listMembers, idItemChoosed, searchMember } = this.state;
    if (searchMember) {
      listMembers = listMembers.filter((member) => {
        return (
          member.name.toLowerCase().indexOf(searchMember.toLowerCase()) !== -1
        );
      });
    }

    const itemMember = listMembers.map((member) => {
      return (
        <ItemMember
          key={member.id}
          member={member}
          avatarUser={avatarUser}
          chooseMember={this.chooseMember}
          idItemChoosed={idItemChoosed}
        />
      );
    });

    return (
      <div className="add-members-box">
        <div className="add-members-to-team">
          <h4 className="title">Add members to team</h4>
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
            <a
              className="btn-control-close"
              onClick={this.props.onCloseAddMember}
            >
              Close
            </a>
            <a className="btn-control-save" onClick={this.addMembersToTeam}>
              Add to team
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMemberToTeam;
