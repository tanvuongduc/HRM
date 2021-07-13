import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import { withStyles } from "@material-ui/core/styles";
import classNames from "clsx";

const style = ()  => ({
    header: {
        backgroundSize: "cover",
    },
})

export const HeaderAppoinment = withStyles(style, { name: "Header" })(
  ({ children, appointmentData, classes, ...restProps }) => (
    <AppointmentTooltip.Header
      className={classNames(classes.header)}
      appointmentData={appointmentData}
      {...restProps}
    ></AppointmentTooltip.Header>
  )
);
