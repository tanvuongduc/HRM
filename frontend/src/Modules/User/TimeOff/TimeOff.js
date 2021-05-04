import React, { Component, Fragment } from "react";
import { FaRegCalendar, FaUserAlt } from "react-icons/fa";
import { IoMdTimer, IoIosArrowDropdownCircle } from "react-icons/io";
import BookTimeOff from "./BookTimeOff/BookTimeOff";
import History from "./History/History";
import nextId from "react-id-generator";

import "./TimeOff.scss";
import Upcoming from "./Upcoming/Upcoming";

class TimeOff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayUpcoming: true,
      isDisplayHistory: false,
      onBookTimeOff: false,
      timeOffItems: [],
    };
  }

  onShowUpcoming = () => {
    this.setState({
      isDisplayUpcoming: true,
      isDisplayHistory: false,
    });
  };

  onShowHistory = () => {
    this.setState({
      isDisplayHistory: true,
      isDisplayUpcoming: false,
    });
  };

  onBookTimeOff = () => {
    this.setState({
      onBookTimeOff: true,
    });
  };

  closeBookTimeOff = () => {
    this.setState({
      onBookTimeOff: false,
    });
  };

  onSubmit = (data) => {
    console.log(data);
    var { timeOffItems } = this.state;
      data.id = nextId();
      timeOffItems.push(data);
      this.setState({
        timeOffItems: timeOffItems,
      });
    this.closeBookTimeOff();
  };
  render() {
    var { timeOffItems } = this.state;
    var { isDisplayUpcoming, isDisplayHistory, onBookTimeOff } = this.state;
    var elmUpcoming = isDisplayUpcoming ? (
      <Upcoming timeOffItems={timeOffItems} />
    ) : (
      ""
    );
    var elmHistory = isDisplayHistory ? <History /> : "";
    var elmBookTimeOff = onBookTimeOff ? (
      <BookTimeOff
        closeBookTimeOff={this.closeBookTimeOff}
        onSubmit={this.onSubmit}
      />
    ) : (
      ""
    );
    return (
      <Fragment>
        <div className="employment__time-off">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="time-off-control-left">
                  <div className="control-left-show">
                    <label>Show: </label>
                    <div className="show__choose">
                      <a
                        className="btn-upcoming"
                        className={isDisplayUpcoming ? "show__btn-choosed" : ""}
                        onClick={this.onShowUpcoming}
                      >
                        Upcoming
                      </a>
                      <a
                        className={isDisplayHistory ? "show__btn-choosed" : ""}
                        onClick={this.onShowHistory}
                      >
                        History
                      </a>
                    </div>
                  </div>
                  <div className="control-left-book">
                    <label>Choose: </label>
                    <div className="book__choose">
                      <a
                        className="choose-time-off"
                        onClick={this.onBookTimeOff}
                      >
                        {" "}
                        <IoMdTimer className="icon-choose" /> Time off
                      </a>
                      <a>
                        <IoIosArrowDropdownCircle className="icon-choose" />
                      </a>
                    </div>
                  </div>
                </div>
                {elmUpcoming}
                {elmHistory}
                {elmBookTimeOff}
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default TimeOff;
