import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
//


import ListTimeOff from './Components/ListTimeOff/ListTimeOff'
//
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
  ConfirmationDialog,
  DayView,
  WeekView,
  DragDropProvider,
  MonthView,
  CurrentTimeIndicator,
} from "@devexpress/dx-react-scheduler-material-ui";
import "./TimeOff.scss";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Room from "@material-ui/icons/Room";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { Http } from "../Company/Shared";
import TimeOffService from "./Shared/TimeOffService";
import classNames from "clsx";
import { connectProps } from "@devexpress/dx-react-core";
import { withStyles, makeStyles, fade } from "@material-ui/core/styles";
import PriorityHigh from "@material-ui/icons/PriorityHigh";
import LowPriority from "@material-ui/icons/LowPriority";
import Lens from "@material-ui/icons/Lens";
import Event from "@material-ui/icons/Event";
import AccessTime from "@material-ui/icons/AccessTime";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { lightBlue, green, red, amber } from "@material-ui/core/colors";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Typography from "@material-ui/core/Typography";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Form, ModalNoti } from "../../Shared";
import { Card } from "@material-ui/core";

const styles = (theme) => ({
  apptContent: {
    "&>div>div": {
      whiteSpace: "normal !important",
      lineHeight: 1.2,
    },
  },
  flexibleSpace: {
    margin: "0 auto 0 0",
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
    float: "left",
  },
  prioritySelector: {
    marginLeft: theme.spacing(2),
    minWidth: 140,
    "@media (max-width: 500px)": {
      minWidth: 0,
      fontSize: "0.75rem",
      marginLeft: theme.spacing(0.5),
    },
  },

  FormResource: {
    display: "none",
  },
});

const usePrioritySelectorItemStyles = makeStyles(({ palette, spacing }) => ({
  bullet: ({ color }) => ({
    backgroundColor: color ? color[400] : palette.divider,
    borderRadius: "50%",
    width: spacing(2),
    height: spacing(2),
    marginRight: spacing(2),
    display: "inline-block",
  }),
  prioritySelectorItem: {
    display: "flex",
    alignItems: "center",
  },
  priorityText: {
    "@media (max-width: 500px)": {
      display: "none",
    },
  },
  priorityShortText: {
    "@media (min-width: 500px)": {
      display: "none",
    },
  },
}));


//set màu Appointments
const Appoinment = ({ children, style, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      borderRadius: "8px",
      fontSize: "16px",
      backgroundColor:
        children[1].props.data.status === 1
          ? "#FFC107"
          : children[1].props.data.status === 2
          ? "#00a1ff"
          : children[1].props.data.status === 3
          ? "#ef2c2c"
          : "#FFC107",
    }}
  >
    {children}
    <Chip
      size="small"
      style={{
        marginLeft: "8px",
      }}
      icon={<BookmarkBorderIcon />}
      label={
        children[1].props.data.status === 1
          ? "Đang chờ duyệt"
          : children[1].props.data.status === 2
          ? "Đã được duyệt"
          : children[1].props.data.status === 3
          ? "Không được duyệt"
          : "Đang chờ duyệt"
      }
      clickable
      color="primary"
    />
  </Appointments.Appointment>
);

const style = ({ palette }) => ({
  icon: {
    color: palette.action.active,
    fontSize: "30px",
  },
  textCenter: {
    textAlign: "center",
  },
  header: {
    backgroundSize: "cover",
  },
  commandButton: {
    backgroundColor: "rgba(255,255,255,0.65)",
  },
});

const Header = withStyles(style, { name: "Header" })(
  ({ children, appointmentData, classes, ...restProps }) => (
    <AppointmentTooltip.Header
      className={classNames(classes.header)}
      appointmentData={appointmentData}
      {...restProps}
    ></AppointmentTooltip.Header>
  )
);

const Content = withStyles(style, { name: "Content" })(
  ({ children, appointmentData, classes, ...restProps }) => (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <Grid container alignItems="center">
        <Grid item xs={2} className={classes.textCenter}>
          <PersonOutlineIcon className={classes.icon} />
        </Grid>
        <Grid item xs={10}>
          <span>Người xét duyệt: </span>
          <span>{appointmentData.pic.name}</span>
        </Grid>
      </Grid>
    </AppointmentTooltip.Content>
  )
);

const CommandButton = withStyles(style, { name: "CommandButton" })(
  ({ classes, ...restProps }) => (
    <AppointmentTooltip.CommandButton
      {...restProps}
      className={classes.commandButton}
    />
  )
);

const instance_resourse = [
  {
    id: 1,
    text: "Đang chờ phê duyệt",
    color: amber,
  },
  {
    id: 2,
    text: "Đã được duyệt",
    color: lightBlue,
  },
  {
    id: 3,
    text: "Không được duyệt",
    color: red,
  },
];

const TextEditor = (props) => {
  if (props.type === "multilineTextEditor") {
    return null;
  }
  return <AppointmentForm.TextEditor {...props} />;
};

const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
  const optionsPic = [
    {
      id: "60cff2ed74c34ea254311e8a",
      text: "Triều Lê",
    },
    {
      id: "60cff742dbec139b90add99f",
      text: "Đăng Jinner",
    },
  ];

  const onCustomFieldChange = (nextValue) => {
    onFieldChange({ pic: nextValue });
  };

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
      readOnly={appointmentData.status === 2 ? true : false}
    >
      <AppointmentForm.Label text="Người xét duyệt" type="title" />
      <AppointmentForm.Select
        type="filledSelect"
        value={appointmentData.pic}
        onValueChange={onCustomFieldChange}
        availableOptions={optionsPic}
        readOnly={appointmentData.status === 2 ? true : false}
      />
    </AppointmentForm.BasicLayout>
  );
};

const onCustomResource = withStyles(style, { name: "FormResource" })(
  ({ onResourceChange, appointmentResources, resource, ...restProps }) => {
    return (
      <AppointmentForm.ResourceEditor
        readOnly={false}
        appointmentResources={appointmentResources}
        resource={resource}
        {...restProps}
      ></AppointmentForm.ResourceEditor>
    );
  }
);
//lựa chọn ưu tiên
const PrioritySelectorItem = ({ color, text: resourceTitle }) => {
  const text = resourceTitle || "Tất cả trạng thái";
  const shortText = resourceTitle ? text.substring(0, 1) : "All";
  const classes = usePrioritySelectorItemStyles({ color });

  return (
    <div className={classes.prioritySelectorItem}>
      <span className={classes.bullet} />
      <span className={classes.priorityText}>{text}</span>
      <span className={classes.priorityShortText}>{shortText}</span>
    </div>
  );
};

const PrioritySelector = withStyles(styles, { name: "PrioritySelector" })(
  ({ classes, priorityChange, priority }) => {
    const currentPriority = priority > 0 ? instance_resourse[priority - 1] : {};
    return (
      <FormControl className={classes.prioritySelector}>
        <Select
          disableUnderline
          value={priority}
          onChange={(e) => priorityChange(e.target.value)}
          renderValue={() => (
            <PrioritySelectorItem
              text={currentPriority.text}
              color={currentPriority.color}
            />
          )}
        >
          <MenuItem value={0}>
            <PrioritySelectorItem />
          </MenuItem>
          {instance_resourse.map(({ id, color, text }) => (
            <MenuItem value={id} key={id.toString()}>
              <PrioritySelectorItem color={color} text={text} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
);

const FlexibleSpace = withStyles(styles, { name: "FlexibleSpace" })(
  ({ classes, priority, priorityChange, ...restProps }) => (
    <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
      <PrioritySelector priority={priority} priorityChange={priorityChange} />
    </Toolbar.FlexibleSpace>
  )
);

class TimeOff extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      addedAppointment: {},
      appointmentChanges: {},
      editingAppointment: undefined,
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
      isShowList: false,
    };
  }

  componentDidMount = async () => {
    const data = [];
    //get data
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
  };

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

  changeAppointmentChanges = (appointmentChanges) => {
    this.setState({ appointmentChanges });

  };

  changeEditingAppointment = (editingAppointment) => {
    this.setState({ editingAppointment, setVisibleAppoinment: true });
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

    const userId = JSON.parse(localStorage.getItem("userId"));

    const timeOff = {
      reason: addedAppointment.title,
      from: addedAppointment.startDate,
      to: addedAppointment.endDate,
      by: userId,
      pic:
        addedAppointment.pic !== undefined
          ? addedAppointment.pic
          : "60cff2ed74c34ea254311e8a",
      status: 1,
    };
    TimeOffService.addTimeOff(timeOff).then((res) => {
      this.setState({ data });
    });
  };
  // hàm thay đổi sự ưu tiên
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
  showList = () => {
    this.setState({isShowList : !this.state.isShowList})
  }

  render() {
    const {
      data,
      addedAppointment,
      appointmentChanges,
      editingAppointment,
      resources,
      currentPriority,
      locale,
      setVisibleAppoinment,
      message,
      isShowList
    } = this.state;
    console.log('ishsowlist:', isShowList);
    console.log('datahahaha:', data);

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    return (
      <div>
        <Button variant="contained" color="primary" onClick={()=> this.showList()}>
        {isShowList ?'Hiển thị dạng lịch':'Hiển thị dạng danh sách'}
        </Button>
        { isShowList ? <ListTimeOff prop={this.state}/> :
      (
      <Card>
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
            defaultAddedAppointment={this.getDefaultAppointment}
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
          <AppointmentTooltip
            headerComponent={Header}
            contentComponent={Content}
            commandButtonComponent={CommandButton}
            showOpenButton
            showCloseButton
          />
          <ViewSwitcher />
          <AppointmentForm
            onVisibilityChange={
              setVisibleAppoinment ? this.onHandleVisible : null
            }
            visible={setVisibleAppoinment}
            messages={{
              detailsLabel: "Xin nghỉ phép",
              allDayLabel: "Cả ngày",
              titleLabel: "Lý do xin nghỉ",
              commitCommand: "Gửi",
              moreInformationLabel: "Ghi chú thêm",
              repeatLabel: "Lặp lại",
              repeatEveryLabel: "Số ngày",
              daysLabel: "ngày",
              daily: "Mỗi ngày",
              weekly: "Tuần",
              monthly: "Tháng",
              yearly: "Năm",
              endRepeatLabel: "Hạn hết thúc",
              moreInformationLabel: "",
            }}
            appointmentData={{
              pic: "60cff2ed74c34ea254311e8a",
            }}
            basicLayoutComponent={BasicLayout}
            textEditorComponent={TextEditor}
            resourceEditorComponent={onCustomResource}
          />
          <DragDropProvider />
          <Resources data={resources} />
          <ConfirmationDialog messages={{ confirmCancelMessage: "Bạn có chắc chắn muốn thoát ?", discardButton: "Đồng ý", cancelButton: "Hủy" }}/>
        </Scheduler>
        <ModalNoti
          message={message}
          done={() => this.setState({ message: "" })}
        ></ModalNoti>
      </Card>
      )}
      </div>
    );
  }
}

export default TimeOff;
