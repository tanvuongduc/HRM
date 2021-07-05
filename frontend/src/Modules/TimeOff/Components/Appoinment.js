import Chip from "@material-ui/core/Chip";
import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";


export const Appoinment = ({ children, style, ...restProps }) => (
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
