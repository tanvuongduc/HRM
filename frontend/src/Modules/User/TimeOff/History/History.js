import React, { Component, Fragment } from "react";
import './History.scss';
import { BiCalendarStar } from "react-icons/bi";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaRegCalendarTimes } from 'react-icons/fa';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeOffItem: [
        {
          id: 1,
          time: "Sartuday 3 Day",
          notify: "This is content",
        },
        {
          id: 2,
          time: "Sartuday 3 Day",
          notify: "This is content",
        },
        {
          id: 3,
          time: "Sartuday 3 Day",
          notify: "This is content",
        },

        {
            id: 4,
            time: "Sartuday 3 Day",
            notify: "This is content",
          }
      ],
    };
  }
  render() {
    var elmTimeOffItem = this.state.timeOffItem.map((item) => {
      return (
        <div className="time-off-item" key={item.id}>
          <FaRegCalendarTimes className="item__icon icon-calendar" />
          <span className="item__time">{item.time}</span>
          <span className="item__notify">{item.notify}</span>
          <BsInfoCircleFill className="item__icon icon-info" />
        </div>
      );
    });
    return (
      <Fragment>
        <div className="time-off__history">
          <h3>Lịch sử</h3>
          <div className="history__list-time-off">
              {elmTimeOffItem}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default History;
