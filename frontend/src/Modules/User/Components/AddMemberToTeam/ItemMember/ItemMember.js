import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import "./ItemMember.scss";
import { FaCheck, FaThumbsDown, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

class ItemMember extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { member, avatarUser } = this.props;
    const styleChoosed = {
      backgroundColor: "rgb(13, 100, 151)",
    };

    return (
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
  }
}

export default ItemMember;
