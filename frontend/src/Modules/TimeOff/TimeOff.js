import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
//


import LisTimeOff from './Components/ListTimeOff/ListTimeOff'
//
import {
  ViewState,
  EditingState,
  ViewSwitcher,
  Resources,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentTooltip,
  AppointmentForm,
  AllDayPanel,
  EditRecurrenceMenu,
  ConfirmationDialog,
} from "@devexpress/dx-react-scheduler-material-ui";
import "./TimeOff.scss";
import { Http } from "../Company/Shared";
import TimeOffService from "./Shared/TimeOffService";
import { makeStyles } from "@material-ui/core";
import Container from '@material-ui/core/Container';


const data = [];
TimeOffService.getListTimeOff().then((res) => {
  const dataAppointment = res.data;
  dataAppointment.forEach((item) => {
    const timeOffItem = {
      id: item.id,
      title: item.reason,
      startDate: new Date(item.from),
      endDate: new Date(item.to),
    };
    data.push(timeOffItem);
  });
});

class TimeOff extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
      isShowTimeOff: false
    };
  }

  componentDidMount = async () => {
    console.log("DATA", data);
  };

  changeAddedAppointment = (addedAppointment) => {
    this.setState({ addedAppointment });
  };

  changeAppointmentChanges = (appointmentChanges) => {
    this.setState({ appointmentChanges });
  };

  changeEditingAppointment = (editingAppointment) => {
    this.setState({ editingAppointment });
  };

  commitChanges = ({ added, changed, deleted }) => {
    let { data, addedAppointment } = this.state;
    if (added) {
      const startingAddedId =
        data.length > 0 ? data[data.length - 1].id + 1 : 0;
      data = [...data, { id: startingAddedId, ...added }];
    }
    if (changed) {
      data = data.map((appointment) =>
        changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment
      );
    }
    if (deleted !== undefined) {
      data = data.filter((appointment) => appointment.id !== deleted);
    }

    const timeOff = {
      reason: addedAppointment.title,
      from: addedAppointment.startDate,
      to: addedAppointment.endDate,
      by: "609ca06b8d576b2184936f7d",
    };
    const res = Http.post("timeoff", timeOff);
    this.setState({ data });
    console.log("DDDDD", this.state.addedAppointment);
  };
  showTimeOff = () => {
    this.setState({isShowTimeOff: !this.state.isShowTimeOff});
    
  }

  render() {
    let {data, addedAppointment, appointmentChanges, editingAppointment, isShowTimeOff}=this.state;
      console.log(isShowTimeOff)
      

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;

    
    return (
      <div>
        <Container>
      {isShowTimeOff? (
        <LisTimeOff />
      ):(
      <Paper>
        <Scheduler height={"auto"} data={data}>
          <ViewState defaultCurrentDate={today} />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
          <EditingState
            onCommitChanges={this.commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={this.changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={this.changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={this.changeEditingAppointment}
          />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <AppointmentTooltip showCloseButton showOpenButton />
          <AppointmentForm />
        </Scheduler>
      </Paper>
      )}
      
      <Button onClick={() => this.showTimeOff()} variant="contained" color="primary">
        {isShowTimeOff ? "Đóng" : "Chi tiết"}
      </Button>
      </Container>
      </div>
    );
  }
}

export default TimeOff;
