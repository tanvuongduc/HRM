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
  MonthView,
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
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const styles = theme => ({
  
  apptContent: {
    '&>div>div': {
      whiteSpace: 'normal !important',
      lineHeight: 1.2,
    },
  },
  flexibleSpace: {
    margin: '0 auto 0 0',
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    float: 'left'
  },
  prioritySelector: {
    marginLeft: theme.spacing(2),
    minWidth: 140,
    '@media (max-width: 500px)': {
      minWidth: 0,
      fontSize: '0.75rem',
      marginLeft: theme.spacing(0.5),
    },
  },
});


const usePrioritySelectorItemStyles = makeStyles(({ palette, spacing }) => ({
  bullet: ({ color }) => ({
    backgroundColor: color ? color[400] : palette.divider,
    borderRadius: '50%',
    width: spacing(2),
    height: spacing(2),
    marginRight: spacing(2),
    display: 'inline-block',
  }),
  prioritySelectorItem: {
    display: 'flex',
    alignItems: 'center',
  },
  priorityText: {
    '@media (max-width: 500px)': {
      display: 'none',
    },
  },
  priorityShortText: {
    '@media (min-width: 500px)': {
      display: 'none',
    },
  },
}));

const Appoinment = ({ children, style, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      borderRadius: "8px",
      fontSize: "16px",
    }}
  >
    {children}
    {console.log("555555555", children[1].props)}
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
          : "Không được duyệt"
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
      {...restProps}
      className={classNames(classes.header)}
      appointmentData={appointmentData}
    >
      <IconButton
        onClick={() => alert(JSON.stringify(appointmentData))}
        className={classes.commandButton}
      >
        <MoreIcon />
      </IconButton>
    </AppointmentTooltip.Header>
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
          <span>{appointmentData.pic}</span>
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
      id: "60b9aab51f194c0c78c9932b",
      text: "Trieu Le",
    },
    {
      id: "60ba34061f194c0c78c99338",
      text: "Trieu Le 110",
    },
  ];

  const onCustomFieldChange = (nextValue) => {
    onFieldChange({ pic: nextValue });
  }
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
        onValueChange={onCustomFieldChange}
        availableOptions={optionsPic}
      />
    </AppointmentForm.BasicLayout>
  );
}

const PrioritySelectorItem = ({
  color, text: resourceTitle,
}) => {
  const text = resourceTitle || 'Tất cả trạng thái';
  const shortText = resourceTitle ? text.substring(0, 1) : 'All';
  const classes = usePrioritySelectorItemStyles({ color });

  return (
    <div className={classes.prioritySelectorItem}>
      <span className={classes.bullet} />
      <span className={classes.priorityText}>{text}</span>
      <span className={classes.priorityShortText}>{shortText}</span>
    </div>
  );
};

const PrioritySelector = withStyles(styles, { name: 'PrioritySelector' })(({
  classes, priorityChange, priority,
}) => {
  const currentPriority = priority > 0 ? instance_resourse[priority - 1] : {};
  return (
    <FormControl className={classes.prioritySelector}>
      <Select
        disableUnderline
        value={priority}
        onChange={(e) => 
          priorityChange(e.target.value)
        }
        renderValue={() => (
          <PrioritySelectorItem text={currentPriority.text} color={currentPriority.color} />
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
});


const FlexibleSpace = withStyles(styles, { name: 'FlexibleSpace' })(({
  classes, priority, priorityChange, ...restProps
}) => (
  <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
    <PrioritySelector priority={priority} priorityChange={priorityChange} />
  </Toolbar.FlexibleSpace>
));

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
    };
  }

  componentWillMount = async () => {
    const data = [];
    await TimeOffService.getListTimeOff().then((res) => {
      const dataAppointment = res.data;
      dataAppointment.forEach((item) => {
        let statusId = 0;
        if(item.status === "pending") {
          statusId = 1;
        } else if(item.status === "approved") {
          statusId = 2;
        } else if(item.status === "rejected") {
          statusId = 3;
        }
        const timeOffItem = {
          id: item.id,
          title: item.reason,
          startDate: new Date(item.from),
          endDate: new Date(item.to),
          pic: item.pic.name,
          status: statusId,
        };
        data.push(timeOffItem);
      });
    });
    this.setState({
      data: data,
    });
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
      pic: addedAppointment.pic
    };
    const res = Http.post("timeoff", timeOff);
    this.setState({ data });
  };

  priorityChange = (value) => {
    const { resources } = this.state;
    const nextResources = [{
      ...resources[0],
      instances: value > 0 ? [instance_resourse[value - 1]] : instance_resourse,
    }];

    this.setState({ currentPriority: value, resources: nextResources });
  };

  flexibleSpace = () => connectProps(FlexibleSpace, () => {
    const { currentPriority } = this.state;
    return {
      priority: currentPriority,
      priorityChange: this.priorityChange,
    };
  });
  
  filterTasks = (items, status) => items.filter(task => (
    !status || task.status === status
  ));


  render() {
    const {
      data,
      addedAppointment,
      appointmentChanges,
      editingAppointment,
      resources,
      currentPriority
    } = this.state;

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    return (
      <Paper>
        <Scheduler className="scheduler-table" height={1000} data={this.filterTasks(data, currentPriority)}>
          <ViewState defaultCurrentDate={today} />
          <MonthView />
          <WeekView startDayHour={9} endDayHour={15} />
          <DayView startDayHour={9} endDayHour={15} />
          <Toolbar flexibleSpaceComponent={this.flexibleSpace()} />
          <DateNavigator />
          <TodayButton />
          <Appointments appointmentComponent={Appoinment} />
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
          <AppointmentTooltip
            headerComponent={Header}
            contentComponent={Content}
            commandButtonComponent={CommandButton}
            showOpenButton
            showCloseButton
          />
          <ViewSwitcher />
          <AppointmentForm 
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
            basicLayoutComponent={BasicLayout}
            textEditorComponent={TextEditor}
          />
          <DragDropProvider />
          <Resources data={resources} />
        </Scheduler>
      </Paper>
    );
  }
}

export default TimeOff;
