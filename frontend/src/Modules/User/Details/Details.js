import React, { Component, Fragment, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaEnvelopeOpenText,
  FaFacebook,
  FaTwitter,
  FaLink,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { Http } from "../../../Helper/Http";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      bithday: '',
      address: '',
      certificate: '',
      phoneNumber: '',
      email: '',
      socialNetwork: [
        {
          nameSocialNetwork: '',
          linkNetWork: ''
        }
      ]
    };
  }

  async componentDidMount() {
    let data = await this.getInfo();
    console.log(data);
  }

  async getInfo() {
    const res = await Http.get("users/user", { id: "6088cc2b80660b2f2818ae8a" });
    this.setState({

    });
    return res.data
  }

  render() {
    return (
      <div>
        <div className="profile-main__details" id="profile-details">
          <div className="row">
            <div className="col-md-4">
              <div className="details__card basicInfo">
                <h4>Basic Information</h4>
                <div>
                  <div className="item-info">
                    <label>Họ và tên</label>
                    <br></br>
                    <span>Thêm họ tên</span>
                  </div>
                  <div className="item-info">
                    <label>Ngày sinh</label>
                    <br></br>
                    <span>Thêm ngày sinh</span>
                  </div>
                  <div className="item-info">
                    <label>Địa chỉ</label>
                    <br></br>
                    <span>Thêm địa chỉ</span>
                  </div>
                  <div className="item-info">
                    <label>Bằng cấp</label>
                    <br></br>
                    <span>Thêm bằng cấp</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="details__card contact">
                <div className="item-info">
                  <h4>Contact</h4>
                  <div className="item-info">
                    <label>Số điện thoại</label>
                    <br></br>
                    <FaPhoneAlt className="item-info__icon" />
                    <span>Thêm số điện thoại</span>
                  </div>

                  <div className="item-info">
                    <label>Email cá nhân</label>
                    <br></br>
                    <FaEnvelope className="item-info__icon" />
                    <span>Thêm email</span>
                  </div>
                  <div className="item-info">
                    <label>Facebook</label>
                    <br></br>
                    <FaFacebook className="item-info__icon" />
                    <span>Thêm địa chỉ Facebook</span>
                  </div>
                  <div className="item-info">
                    <label>Twitter</label>
                    <br></br>
                    <FaTwitter className="item-info__icon" />
                    <span>Thêm ...</span>
                  </div>
                  <div className="item-info">
                    <label>Website</label>
                    <br></br>
                    <FaLink className="item-info__icon" />
                    <span>Thêm ...</span>
                  </div>
                  <div className="item-info">
                    <label>Tài khoản ngân hàng</label>
                    <br></br>
                    <FaMoneyCheckAlt className="item-info__icon" />
                    <span>Thêm ...</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="details__card address"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Details;
