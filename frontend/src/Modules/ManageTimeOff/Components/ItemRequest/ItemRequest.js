import { CardBody } from "reactstrap";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import React, { Component } from "react";
import "./ItemRequest.scss";
import {
  Button,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import ManageTimeOffService from "../../Shared/ManageTimeOffService";
import { ModalConfirm, ModalNoti } from "../../../../Shared";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import DoneIcon from "@material-ui/icons/Done";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";

class ItemRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmMessage: "",
      message: "",
      approved: false,
      rejected: false,
      showDetailRequest: false,
      hideDetailRequest: false,
    };
  }

  onShowDetailRequest = () => {
    this.setState({
      hideDetailRequest: false,
      showDetailRequest: !this.state.showDetailRequest,
    });
  };

  onHideDetailRequest = () => {
    this.setState({
      showDetailRequest: false,
      hideDetailRequest: !this.state.hideDetailRequest,
    });
    console.log(this.state);
  };

  convertDateTime(datetime) {
    const newDateTime = new Date(datetime);
    const dd = String(newDateTime.getDate()).padStart(2, "0");
    const mm = String(newDateTime.getMonth() + 1).padStart(2, "0");
    const YY = newDateTime.getFullYear();
    const hour = String(newDateTime.getHours()).padStart(2, "0");
    const min = String(newDateTime.getMinutes()).padStart(2, "0");
    const dateTimeConvert = hour + ":" + min + " - " + dd + "/" + mm + "/" + YY;
    return dateTimeConvert;
  }

  approveRequestTimeOff = () => {
    this.setState({
      confirmMessage: "Bạn có chắc chắn đồng ý duyệt yêu cầu xin nghỉ này ?",
      approved: !this.state.approved,
    });
  };

  rejectRequestTimeOff = async (timeoffId) => {
    this.setState({
      confirmMessage: "Bạn có chắc chắn không duyệt yêu cầu xin nghỉ này ?",
      rejected: !this.state.rejected,
    });
  };

  cancelRejectedRequest = async () => {
    this.setState({
      confirmMessage: "Bạn có chắc chắn muốn hủy trạng thái xét duyệt yêu cầu này ?",
    });
  };

  answerConfirmRequest = async (answer, timeoffId) => {
    if (answer) {
      await ManageTimeOffService.updateRequest(timeoffId, {
        status: "approved",
      })
        .then((res) => {
          this.setState({
            message: "Duyệt yêu cầu xin nghỉ thành công !!",
          });
        })
        .catch((err) => {
          this.setState({
            message: "Duyệt yêu cầu xin nghỉ thất bại, vui lòng thử lại sau !!",
          });
        });
    }
    this.setState({
      confirmMessage: "",
    });
  };

  answerRejectRequest = async (answer, timeoffId) => {
    if (answer) {
      await ManageTimeOffService.updateRequest(timeoffId, {
        status: "rejected",
      })
        .then((res) => {
          this.setState({
            message: "Yêu cầu xin nghỉ đã không được duyệt !!",
          });
        })
        .catch((err) => {
          this.setState({
            message: "Duyệt yêu cầu xin nghỉ thất bại, vui lòng thử lại sau !!",
          });
        });
    }
    this.setState({
      confirmMessage: "",
    });
  };

  answerCancelRejectedRequest = async (answer, timeoffId) => {
    if (answer) {
      await ManageTimeOffService.updateRequest(timeoffId, {
        status: "pending",
      })
        .then((res) => {
          this.setState({
            message: "Hủy bỏ trạng thái không duyệt yêu cầu thành công !!",
          });
        })
        .catch((err) => {
          this.setState({
            message:
              "Hủy bỏ trạng thái không duyệt yêu cầu thất bại, vui lòng thử lại !!",
          });
        });
    }
    this.setState({
      confirmMessage: "",
    });
  };

  setClassesForItemRequest() {
    const { showDetailRequest, hideDetailRequest } = this.state;
    const { data } = this.props;
    let classes = "item-request";
    if (showDetailRequest) {
      classes += " item-request-detail";
    } else if (hideDetailRequest) {
      classes += " item-request hide-request-detail";
    }
    if (data.status === "approved") {
      classes += " item-request-approved";
    } else if (data.status === "rejected") {
      classes += " item-request-rejected";
    }

    return classes;
  }

  render() {
    const { showDetailRequest, hideDetailRequest } = this.state;
    const { data } = this.props;
    const startDate = this.convertDateTime(data.from);
    const endDate = this.convertDateTime(data.to);
    return (
      <div style={{ marginTop: "22px" }}>
        <Grid item xs={12} className="parent-request">
          <div className={this.setClassesForItemRequest()}>
            <AccessTimeIcon className="avatar" />
            <div className="body-request">
              <Grid container>
                <Grid item xs={5} className="grid-item">
                  <Typography className="title-request">
                    Yêu cầu xin nghỉ từ : {data.by.name}
                  </Typography>
                </Grid>
                <Grid item xs={7} className="grid-item">
                  <Typography className="content-request">
                    Thời gian từ {startDate} đến {endDate}
                  </Typography>
                </Grid>
                <Grid item xs={4} className="grid-item">
                  <Typography className="title-request">
                    Tên nhân viên: {data.by.name}
                  </Typography>
                </Grid>
                <Grid item xs={8} className="grid-item">
                  <Typography className="content-request">
                    Team: {data.by.teams}
                  </Typography>
                </Grid>
                <Grid item xs={4} className="grid-item">
                  <Typography className="title-request">
                    Trạng thái: {data.status}
                  </Typography>
                </Grid>
                <Grid item xs={12} className="grid-item">
                  <Typography className="title-request">
                    Lý do xin nghỉ: {data.reason}
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <Chip
              icon={
                data.status === "approved" ? (
                  <DoneIcon className="icon-status" />
                ) : data.status === "rejected" ? (
                  <CloseIcon className="icon-status" />
                ) : (
                  <AutorenewIcon className="icon-status" />
                )
              }
              label={
                data.status === "approved"
                  ? "Đã được duyệt"
                  : data.status === "rejected"
                  ? "Không được duyệt"
                  : "Đang chờ duyệt"
              }
              clickable
              className="request-status"
              deleteIcon={<DoneIcon />}
            />
            <IconButton
              className="view-detail-btn"
              onClick={
                !showDetailRequest
                  ? this.onShowDetailRequest
                  : this.onHideDetailRequest
              }
            >
              {showDetailRequest ? (
                <KeyboardArrowUpIcon className="view-detail-icon" />
              ) : (
                <KeyboardArrowDownIcon className="view-detail-icon" />
              )}
            </IconButton>
          </div>
          <div className="btn-request">
            {data.status === "rejected" ? (
              <Button
                variant="contained"
                color="secondary"
                className="btn-request-item"
                onClick={this.cancelRejectedRequest}
              >
                Hủy bỏ
              </Button>
            ) : data.status === "pending" ? (
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className="btn-request-item"
                  onClick={this.approveRequestTimeOff}
                >
                  Duyệt
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className="btn-request-item"
                  onClick={this.rejectRequestTimeOff}
                >
                  Không duyệt
                </Button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </Grid>
        <ModalConfirm
          message={this.state.confirmMessage}
          answer={(confirm) => {
            this.state.approved
              ? this.answerConfirmRequest(confirm, data.id)
              : this.state.rejected
              ? this.answerRejectRequest(confirm, data.id)
              : this.answerCancelRejectedRequest(confirm, data.id);
          }}
        ></ModalConfirm>
        <ModalNoti
          message={this.state.message}
          done={() => this.setState({ message: "" })}
        ></ModalNoti>
      </div>
    );
  }
}

export default ItemRequest;
