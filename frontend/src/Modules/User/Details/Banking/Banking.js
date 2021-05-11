import React, { Component, Fragment } from "react";
import "./Banking.scss";
import {FaMoneyCheckAlt} from 'react-icons/fa';

class Banking extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {bankAccountId} = this.props;
    return (
      <Fragment>
        <div className="details__card address">
          <h4>Banking</h4>
          <div className="item-info">
            <label>Chủ tài khoản</label>
            <br></br>
            <FaMoneyCheckAlt className="item-info__icon" />
            <span></span>
          </div>
          <div className="item-info">
            <label>Ngân hàng</label>
            <br></br>
            <FaMoneyCheckAlt className="item-info__icon" />
            <span>{bankAccountId.bankName}</span>
          </div>
          <div className="item-info">
            <label>Số tài khoản</label>
            <br></br>
            <FaMoneyCheckAlt className="item-info__icon" />
            <span>{bankAccountId.bankNumber}</span>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Banking;
