import React, { Component } from "react";
import { Button, CardContent } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./HeaderBar.scss";

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scopeStatus: 1,
      scopeTimeRequest: 0,
    };
  }

  handleScopeStatus = (ev) => {
    this.setState({
      scopeStatus: ev.target.value,
    });
    this.props.scopeStatus(ev.target.value);
  };

  handleScopeTimeRequest = (value) => {
    this.setState({
      scopeTimeRequest: value,
    });
    this.props.scopeTime(value);
  };

  render() {
    return (
      <div className="manage-timeoff-header">
        <CardContent>
          <FormControl className="form-header-timeoff">
            <Button
              onClick={() => this.handleScopeTimeRequest(1)}
              variant="outlined"
              size="large"
              color="primary"
              className="btn-header"
            >
              Hôm nay
            </Button>
          </FormControl>
          <FormControl
            variant="outlined"
            style={{ width: "200px" }}
            className="form-header-timeoff"
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Chọn trạng thái
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Chọn trạng thái "
              value={this.state.scopeStatus}
              onChange={this.handleScopeStatus}
            >
              <MenuItem value={0}>
                <em>Tất cả</em>
              </MenuItem>
              <MenuItem value={1}>Đang chờ duyệt</MenuItem>
              <MenuItem value={2}>Đã được duyệt</MenuItem>
              <MenuItem value={3}>Không được duyệt</MenuItem>
            </Select>
          </FormControl>

          <FormControl
            variant="outlined"
            style={{ width: "200px" }}
            className="form-header-timeoff"
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Chọn thời gian
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Chọn thời gian "
              value={this.state.scopeTimeRequest}
              onChange={(ev) => this.handleScopeTimeRequest(ev.target.value)}
            >
              <MenuItem value={0}>
                <em>Chọn thời gian</em>
              </MenuItem>
              <MenuItem value={1}>Hôm nay</MenuItem>
              <MenuItem value={2}>Tuần này</MenuItem>
              <MenuItem value={3}>Tháng này</MenuItem>
              <MenuItem value={4}>Năm nay</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </div>
    );
  }
}

export default HeaderBar;
