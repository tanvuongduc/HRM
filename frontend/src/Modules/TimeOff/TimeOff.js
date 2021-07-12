import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  EditingState,
  Resources,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentTooltip,
  AppointmentForm,
  AllDayPanel,
  ViewSwitcher,
  EditRecurrenceMenu,
  DayView,
  WeekView,
  DragDropProvider,
  MonthView,
} from "@devexpress/dx-react-scheduler-material-ui";
import "./TimeOff.scss";
import TimeOffService from "./Shared/TimeOffService";
import { connectProps } from "@devexpress/dx-react-core";
import {  ModalNoti } from "../../Shared";
import { Card } from "@material-ui/core";
import { Appoinment } from "./Components/Appoinment";
import { HeaderAppoinment } from "./Components/HeaderAppoinment";
import { ContentAppoinment } from "./Components/ContentAppoinment";
import { CommandButton } from "./Components/ContentAppoinment";
import { instance_resourse, FlexibleSpace } from "./Components/FilterTimeOff";
import TimeOffForm from "./Components/TimeOffForm/TimeOffForm";
class TimeOff extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      addedAppointment: {},
      currentPriority: 0,
      resources: [
        {
          fieldName: "status",
          title: "Status",
          instances: instance_resourse,
        },
      ],
      locale: "vn-VI",
      setVisibleAppoinment: false,
      message: "",
    };
  }

  componentDidMount = async () => {
    // this.getData();
    this.intervalID = setInterval(this.getData.bind(this), 1200); 
  };

  getData = async () => {
    const data = [];
    await TimeOffService.getListTimeOff().then((res) => {
      const dataAppointment = res.data;
      dataAppointment.forEach((item) => {
        let statusId = 0;
        if (item.status === "pending") {
          statusId = 1;
        } else if (item.status === "approved") {
          statusId = 2;
        } else if (item.status === "rejected") {
          statusId = 3;
        }
        const timeOffItem = {
          id: item.id,
          title: item.reason,
          startDate: new Date(item.from),
          endDate: new Date(item.to),
          pic: item.pic,
          status: statusId,
        };
        data.push(timeOffItem);
      });
    });
    this.setState({
      data: data,
    });
  }

  changeAddedAppointment = async (addedAppointment) => {
    let today = new Date();
    let checkUnique = true;
    await TimeOffService.getListTimeOff().then((res) => {
      res.data.forEach((item) => {
        let convertDate = new Date(item.from);
        let convertDateEnd = new Date(item.to);
        if (
          addedAppointment.startDate 
          && (addedAppointment.startDate.getTime() === convertDate.getTime() 
          || ( convertDate.getTime() < addedAppointment.startDate.getTime() && convertDateEnd.getTime() > addedAppointment.endDate.getTime() )
          || (addedAppointment.startDate.getTime() > convertDate.getTime() && addedAppointment.startDate.getTime() < convertDateEnd.getTime())) 
        ) {
          checkUnique = false;
        }
      });
    });
    if (!checkUnique) {
      this.setState({
        message: "Bạn không được phép xin nghỉ ngày này nữa",
      });
    }

    if (addedAppointment.startDate < today) {
      this.setState({
        message: "Bạn không được phép xin nghỉ ngày trong quá khứ",
      });
    } else if (
      addedAppointment.startDate &&
      (addedAppointment.startDate.getDay() === 6 ||
        addedAppointment.startDate.getDay() === 0)
    ) {
      this.setState({
        message: "Bạn không được phép xin nghỉ thứ bảy và chủ nhật",
      });
    }
    if (
      addedAppointment.startDate &&
      addedAppointment.startDate.getDate() +
        addedAppointment.startDate.getMonth() ===
        today.getDate() + today.getMonth()
    ) {
      this.setState({
        message: "Bạn không được phép xin nghỉ vào ngày hôm nay",
      });
    }

    if (
      checkUnique &&
      addedAppointment.startDate > today &&
      addedAppointment.startDate.getDay() !== 6 &&
      addedAppointment.startDate.getDay() !== 0
    ) {
      this.setState({ addedAppointment, setVisibleAppoinment: true });
    }
  };


  priorityChange = (value) => {
    const { resources } = this.state;
    const nextResources = [
      {
        ...resources[0],
        instances:
          value > 0 ? [instance_resourse[value - 1]] : instance_resourse,
      },
    ];

    this.setState({ currentPriority: value, resources: nextResources });
  };

  flexibleSpace = () =>
    connectProps(FlexibleSpace, () => {
      const { currentPriority } = this.state;
      return {
        priority: currentPriority,
        priorityChange: this.priorityChange,
      };
    });

  filterTasks = (items, status) =>
    items.filter((task) => !status || task.status === status);

  onHandleVisible = (visible) => {
    this.setState({
      setVisibleAppoinment: visible,
    });
  };


  render() {
    const {
      data,
      resources,
      currentPriority,
      locale,
      message,
      setVisibleAppoinment,
      addedAppointment
    } = this.state;

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); 
    const yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    

    return (
      <div>
        <TimeOffForm data={addedAppointment} onOpen={setVisibleAppoinment} />
        <Card >
        <Scheduler
          className="scheduler-table"
          data={this.filterTasks(data, currentPriority)}
          height={900}
          locale={locale}
        >
          <ViewState defaultCurrentDate={today} />
          <MonthView displayName="Tháng" />
          <WeekView displayName="Tuần" startDayHour={9} endDayHour={15} />
          <DayView displayName="Ngày" startDayHour={9} endDayHour={15} />
          <Toolbar flexibleSpaceComponent={this.flexibleSpace()} />
          <DateNavigator />
          <TodayButton messages={{today: "Hôm nay"}} />
          <Appointments appointmentComponent={Appoinment} />
          <EditingState
            onAddedAppointmentChange={this.changeAddedAppointment}
          />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <AppointmentTooltip
            headerComponent={HeaderAppoinment}
            contentComponent={ContentAppoinment}
            commandButtonComponent={CommandButton}
            showOpenButton
            showCloseButton
          />
          <AppointmentForm visible={false}/>
          <ViewSwitcher />
          <DragDropProvider />
          <Resources data={resources} />
        </Scheduler>
        <ModalNoti
          message={message}
          done={() => this.setState({ message: "" })}
        ></ModalNoti>
      </Card>
      </div>
      
    );
  }
}

export default TimeOff;
