import React, { Component, Fragment } from "react";
import "./BookTimeOff.scss";
import { BsFillCalendarFill } from "react-icons/bs";


class BookTimeOff extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        typeTimeOff: '',
        dateTimeOff: '',
        durationTimeOff: '',
        noteTimeOff: ''
    };


  }

  onChangeInput = (event) => {
    var target=event.target;
    var name=target.name;
    var value=target.value;
    if(name === "typeTimeOff") {
       if(value === "1") {
           value = "Sick";
       }else if(value === "2") {
           value = "Holiday";
       }else if(value === "3") {
           value = "Parental";
       }
    }else if(name === "durationTimeOff") {
        if(value === "0.5") {
            value = "Half day";
        }else if(value === "1") {
            value = "One day";
        }else if(value === "2") {
            value = "Longer";
        }
    }

    this.setState({
        [name]: value
    });
    console.log(this.state);

 }

 onSubmit = (item) => {
    this.props.onSubmit(this.state);
 }

  render() {
    return (
      <Fragment>
        <div className="book-time-off">
          <h4>Chọn thời gian nghỉ</h4>
          <div className="book__content">
            <label>Select type: </label>
            <div>
              <select 
                className="form-control"
                name="typeTimeOff"
                value={this.state.typeTimeOff}
                onChange={this.onChangeInput}
                >
                <option value={1}>Sick</option>
                <option value={2}>Holiday</option>
                <option value={3}>Parental</option>
              </select>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label className="label-input-date">Choose Date:</label>
                <br></br>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="dateTimeOff"
                    value={this.state.dateTimeOff}
                    className="input-date"
                    onChange={this.onChangeInput}
                    placeholder="YYYY-MM-DD"
                  />
                  <span className="input-group-text" id="basic-addon2">
                    <BsFillCalendarFill />
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <label className="label-input-duration">Duration</label>
                <div className="input-duration">
                  <select 
                    className="form-control"
                    name="durationTimeOff"
                    value={this.state.durationTimeOff}
                    onChange={this.onChangeInput}
                    >
                    <option value={0.5}>Half day</option>
                    <option value={1}>One day</option>
                    <option value={2}>Longer</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control input-textarea"
                name="noteTimeOff"
                value={this.state.noteTimeOff}
                onChange={this.onChangeInput}
                placeholder="ADD NOTE"
              ></textarea>
            </div>
          </div>
          <div className="control-book-time">
            <a className="btn-close" onClick={this.props.closeBookTimeOff}>Close</a>
            <a className="btn-submit" onClick={this.onSubmit}>Submit</a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default BookTimeOff;
