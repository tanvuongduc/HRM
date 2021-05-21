import React, { Component, Fragment } from "react";
import "./Banking.scss";
import { FaMoneyCheckAlt, FaEdit } from "react-icons/fa";

class Banking extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isDisplayEditInfo = (code, title, value) => {
    this.props.onShowEditInfo(code, title, value);
  };

  render() {
    const { bankAccount } = this.props;
    return (
      <div className="details-card address">
        <h4>Banking</h4>
        <div className="item-info">
          <label>Chủ tài khoản</label>
          <br></br>
          <FaMoneyCheckAlt className="info-icon" />
          <span></span>
        </div>
        <div className="item-info">
          <label>Ngân hàng</label>
          <br></br>
          <FaMoneyCheckAlt className="info-icon" />
          <span>{bankAccount.bankName}</span>
          <FaEdit
            className="edit-icon"
            onClick={() =>
              this.isDisplayEditInfo(
                "bankName",
                "Ngân hàng",
                bankAccount.bankName
              )
            }
          />
        </div>
        <div className="item-info">
          <label>Số tài khoản</label>
          <br></br>
          <FaMoneyCheckAlt className="info-icon" />
          <span>{bankAccount.bankId}</span>
          <FaEdit
            className="edit-icon"
            onClick={() =>
              this.isDisplayEditInfo("bankId", "Số tài khoản", bankAccount.Id)
            }
          />
        </div>
      </div>
    );
  }
}

export default Banking;
