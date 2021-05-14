import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import { Http } from "../../../Helper/Http";
import "./AddMemberToTeam.scss";

import ItemMember from "./ItemMember/ItemMember";

class AddMemberToTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
        idItemChoosed: null, 
        searchMember: '',
      listMembers: [
        // {
        //   id: 1,
        //   avatar: "",
        //   userName: "Dang Jinner",
        //   team: ["Developer"],
        // },
        // {
        //   id: 2,
        //   userName: "Hai Mom",
        //   team: ["Developer, BA"],
        // },
        // {
        //   id: 3,
        //   userName: "Huy Dan",
        //   team: [],
        // },
        // {
        //   id: 4,
        //   userName: "Duc Phao",
        //   team: ["Developer, Manager"],
        // },
        // {
        //   id: 5,
        //   userName: "Dang Jinner 5",
        //   team: ["Developer, Manager"],
        // },
        // {
        //   id: 6,
        //   userName: "Hello",
        //   team: ["Developer, Manager"],
        // },
      ],
      listMemberChoosed: []
    };
  }

  componentDidMount() {
    this.getAllUser();
    console.log(this.state.listMembers);
  }

  async getAllUser() {
    const res = await Http.get("users");
    await this.setState({
      listMembers: res.data
    });

  }

  chooseMember = (id) => {
    const { listMembers, listMemberChoosed } = this.state;
    const index = this.findIndex(id);
    listMembers[index].isChoosed = !listMembers[index].isChoosed;
    this.setState({
        idItemChoosed: id
    });

    if(listMembers[index].isChoosed) {
        listMemberChoosed.push(listMembers[index]);
        this.setState({
            listMemberChoosed: listMemberChoosed
        });
    } else {
        for(var i=0; i<listMemberChoosed.length; i++) {
             if(listMembers[index] === listMemberChoosed[i]) {
                 listMemberChoosed.splice(i, 1);
             }
        }

    }
    console.log(this.state.listMemberChoosed);
    
  };

  findIndex(id) {
    const { listMembers } = this.state;
    var result;
    listMembers.forEach((member, index) => {
      if (member.id === id) {
        result = index;
      }
    });
    return result;
  }

  onSearchMember = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
        [name]: value
    });
    console.log(this.state.searchMember);

}

  render() {
    const { avatarUser } = this.props;
    var { listMembers, idItemChoosed, searchMember } = this.state;
    if(searchMember) {
         listMembers = listMembers.filter((member) => {
            return member.name.toLowerCase().indexOf(searchMember.toLowerCase()) !== -1;
        });
    
    }
       

    const itemMember = listMembers.map((member) => {
      return (
        <ItemMember
          member={member}
          avatarUser={avatarUser}
          chooseMember={this.chooseMember}
          idItemChoosed={idItemChoosed}
        />
      );
    });

   
    return (
      <Fragment>
        <div className="add-members-box">
          <div className="add-members-to-team">
            <h4 className="add-members__title">Add members to team</h4>
            <div className="add-members__list-members" id="list-members">
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
              <div className="list-members">{itemMember}</div>
            </div>
            <div className="btn-form-control">
              <a className="btn-control-close">Close</a>
              <a className="btn-control-save">Choose</a>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddMemberToTeam;
