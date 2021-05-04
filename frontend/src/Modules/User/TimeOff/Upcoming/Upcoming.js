import React, { Component, Fragment } from "react";
import './Upcoming.scss';
import { BiCalendarStar } from "react-icons/bi";
import { BsInfoCircleFill } from "react-icons/bs";

class Upcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  

  render() {
    var { timeOffItems } = this.props;
    var elmTimeOffItem = timeOffItems.map((item) => {
      return (
        <div className="time-off-item" key={item.id}>
          <BiCalendarStar className="item__icon icon-calendar" />
          <span className="item__time">{item.dateTimeOff}</span>
          <span className="item__notify">{item.noteTimeOff}</span>
          <span>{item.durationTimeOff}</span>
          <span>{item.typeTimeOff}</span>
          <BsInfoCircleFill className="item__icon icon-info" />
        </div>
      );
    });
    return (
      <Fragment>
        <div className="time-off__upcoming">
          <h3>Sắp tới</h3>
          <div className="upcoming__list-time-off">
              {elmTimeOffItem}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Upcoming;
