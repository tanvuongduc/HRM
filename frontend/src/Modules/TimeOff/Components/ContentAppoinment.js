import { withStyles } from "@material-ui/core/styles";
import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Grid from "@material-ui/core/Grid";

const style = ({palette})  => ({
    icon: {
        color: palette.action.active,
        fontSize: "30px",
      },
      textCenter: {
        textAlign: "center",
      },
      commandButton: {
        backgroundColor: "rgba(255,255,255,0.65)",
      },
})

export const ContentAppoinment = withStyles(style, { name: "Content" })(
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

  
export const CommandButton = withStyles(style, { name: "CommandButton" })(
    ({ classes, ...restProps }) => (
      <AppointmentTooltip.CommandButton
        {...restProps}
        className={classes.commandButton}
      />
    )
  );