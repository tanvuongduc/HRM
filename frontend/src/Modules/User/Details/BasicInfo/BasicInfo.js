import React, { Component, Fragment } from 'react';
import './BasicInfo.scss';
import {FaEdit} from 'react-icons/fa';

class BasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let {userName, birthday, address, certificate} = this.props;
        return(
            <Fragment>
              <div className="details__card basicInfo">
                <h4>Basic Information</h4>
                <div>
                  <div className="item-info">
                    <label>Họ và tên</label>
                    <br></br>
                    <span>{userName}</span>
                    <FaEdit className="edit-icon"/>
                  </div>
                  <div className="item-info">
                    <label>Ngày sinh</label>
                    <br></br>
                    <span>{birthday}</span>
                  </div>
                  <div className="item-info">
                    <label>Địa chỉ</label>
                    <br></br>
                    <span>{address}</span>
                  </div>
                  <div className="item-info">
                    <label>Bằng cấp</label>
                    <br></br>
                    <span>{certificate}</span>
                  </div>
                </div>
              </div>
            </Fragment>
        );
    }
}

export default BasicInfo;