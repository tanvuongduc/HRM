import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import "./ItemMember.scss";
import { FaCheck, FaThumbsDown } from "react-icons/fa";

class ItemMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }

  render() {
    const { member, avatarUser} = this.props;
    const styleChoosed = {
      backgroundColor: "rgb(22, 93, 110)",
    };
    
    return (
      <Fragment>
        <div
          key={member.id}
          className="item-member"
          style={member.isChoosed ? styleChoosed : null}
          onClick={() => this.props.chooseMember(member.id)}
        >
          <img
            src={"http://localhost:3000/" + avatarUser}
            className="item-member__avatar"
          />
          <div className="item-member__info-user">
            <label className="item-member__username">{member.name}</label>
            <br></br>
            <label className="item-member__team-user">
              Team: <span className="team-user-list">
                {/* {member.team.length !== 0 ? member.team : ""} */}
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
        </div>
      </Fragment>
    );
  }
}

export default ItemMember;
