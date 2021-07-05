import { Toolbar } from "@devexpress/dx-react-scheduler-material-ui";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { lightBlue, green, red, amber } from "@material-ui/core/colors";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

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

export const instance_resourse = [
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

export const PrioritySelectorItem = ({ color, text: resourceTitle }) => {
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

export const PrioritySelector = withStyles(styles, {
  name: "PrioritySelector",
})(({ classes, priorityChange, priority }) => {
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
});

export const FlexibleSpace = withStyles(styles, { name: "FlexibleSpace" })(
  ({ classes, priority, priorityChange, ...restProps }) => (
    <Toolbar.FlexibleSpace {...restProps} className={classes.flexibleSpace}>
      <PrioritySelector priority={priority} priorityChange={priorityChange} />
    </Toolbar.FlexibleSpace>
  )
);
